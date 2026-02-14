import {Link} from 'react-router';
import { productQuantity } from '../utils/productQuantity';
import './header.css';

export function Header({cart}) {
  console.log("cart: ", cart)
  return (
    <div className="header">
      <div className="left-section">
        <Link to="/" className="header-link header-title">
          OnlineCart
        </Link>
      </div>

      <div className="middle-section">
        <input className="search-bar" type="text" placeholder="Search" />

        <button className="search-button">
          <img className="search-icon" src="images/icons/search-icon.png" />
        </button>
      </div>

      <div className="right-section">
        <Link className="orders-link header-link" to="/orders">
          <span className="orders-text">Orders</span>
        </Link>

        <Link className="cart-link header-link" to="/checkout">
          <img className="cart-icon" src="images/icons/cart-icon.png" />
          <div className="cart-quantity">{productQuantity(cart)}</div>
          <div className="cart-text">Cart</div>
        </Link>
      </div>
    </div>
  );
}
