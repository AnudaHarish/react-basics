import dayjs from 'dayjs';
import {formatMoney} from '../../utils/formatMoney';

export function DeliveryOptions({cartItem, deliveryOptions}) {
  return (
    <div className="delivery-options">
      <div className="delivery-options-title">Choose a delivery option:</div>
      {deliveryOptions.map((deliveryOption) => {
        let shippingString = "FREE shipping";
        if (deliveryOption.priceCents > 0) {
          shippingString = `${formatMoney(deliveryOption.priceCents)} - shipping`;
        }
        return (
          <div key={deliveryOption.id} className="delivery-option">
            <input
              type="radio"
              checked={cartItem.deliveryOptionId === deliveryOption.id}
              className="delivery-option-input"
              name={`delivery-option-${cartItem.product.id}`}
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
