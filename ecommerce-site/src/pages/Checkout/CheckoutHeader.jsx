import {productQuantity} from '../../utils/productQuantity';
import {Link} from 'react-router';
import './checkout-header.css';

export function CheckoutHeader({cart}) {
  return (
    <div className="checkout-header">
      <div className="header-content">
        <div className="checkout-header-left-section">
          <Link to="/" className='header-title'>
            OnlineShop
          </Link>
        </div>

        <div className="checkout-header-middle-section">
          Checkout (
          <Link className="return-to-home-link" to="/">
            {productQuantity(cart)} items
          </Link>
          )
        </div>

        <div className="checkout-header-right-section">
          <img src="images/icons/checkout-lock-icon.png" />
        </div>
      </div>
    </div>
  );
}
