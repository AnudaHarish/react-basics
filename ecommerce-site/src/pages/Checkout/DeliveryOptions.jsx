import dayjs from 'dayjs';
import axios from 'axios';
import {formatMoney} from '../../utils/formatMoney';

export function DeliveryOptions({cartItem, deliveryOptions, loadCart}) {
  const updateDeliveryOptions = async (deliveryOption) => {
    await axios.put(`/api/cart-items/${cartItem.productId}`, {
      deliveryOptionId: deliveryOption.id
    });
    loadCart();
  }
  return (
    <div className="delivery-options">
      <div className="delivery-options-title">Choose a delivery option:</div>
      {deliveryOptions.map((deliveryOption) => {
        let shippingString = "FREE shipping";
        if (deliveryOption.priceCents > 0) {
          shippingString = `${formatMoney(deliveryOption.priceCents)} - shipping`;
        }
        return (
          <div key={deliveryOption.id} className="delivery-option"
          onClick={() => updateDeliveryOptions(deliveryOption)}>
            <input
              type="radio"
              checked={cartItem.deliveryOptionId === deliveryOption.id}
              onChange={() => {}}
              className="delivery-option-input"
              name={`delivery-option-${cartItem.productId}`}
            />
            <div>
              <div className="delivery-option-date">
                {dayjs(deliveryOption.estimatedDeliveryTimeMs).format(
                  "dddd, MMMM D",
                )}
              </div>
              <div className="delivery-option-price">{shippingString}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
