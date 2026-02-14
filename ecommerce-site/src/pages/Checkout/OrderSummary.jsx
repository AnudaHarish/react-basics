import dayjs from 'dayjs';
import axios from 'axios';
import {formatMoney} from '../../utils/formatMoney';
import {DeliveryOptions} from './DeliveryOptions';
import './CheckoutPage.css';

export function OrderSummery({cart, deliveryOptions, loadCart}) {
  const deleteCartItem = async (cartItem) => {
    await axios.delete(`/api/cart-items/${cartItem.product.id}`);
    await loadCart();
  }

  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 &&
        cart.map((cartItem) => {
          const selectedOption = deliveryOptions.find((deliveryOption) => {
            return deliveryOption.id === cartItem.deliveryOptionId;
          });
          return (
            <div key={cartItem.product.id} className="cart-item-container">
              <div className="delivery-date">
                {`Delivery date: ${dayjs(selectedOption.estimatedDeliveryTimeMs).format("dddd, MMMM D")}`}
              </div>

              <div className="cart-item-details-grid">
                <img className="product-image" src={cartItem.product.image} />

                <div className="cart-item-details">
                  <div className="product-name">{cartItem.product.name}</div>
                  <div className="product-price">
                    {formatMoney(cartItem.product.priceCents)}
                  </div>
                  <div className="product-quantity">
                    <span>
                      Quantity:{" "}
                      <span className="quantity-label">
                        {cartItem.quantity}
                      </span>
                    </span>
                    <span className="update-quantity-link link-primary">
                      Update
                    </span>
                    <span className="delete-quantity-link link-primary"
                      onClick={() => deleteCartItem(cartItem)}
                    >
                      Delete
                    </span>
                  </div>
                </div>

                <DeliveryOptions cartItem={cartItem} deliveryOptions={deliveryOptions} loadCart={loadCart} />
              </div>
            </div>
          );
        })}
    </div>
  );
}
