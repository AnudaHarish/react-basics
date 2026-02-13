import axios from 'axios';
import { useEffect, useState } from 'react';
import {PaymentSummary} from './PaymentSummary';
import { CheckoutHeader } from './CheckoutHeader';
import { OrderSummery } from './OrderSummary';
import './CheckoutPage.css';

export function CheckoutPage({ cart }){
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummery, setPaymentSummary] = useState(null);
  useEffect(() => {
    const getDeliveryOptions = async () => {
      let response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime');
      setDeliveryOptions(response.data);

      response = await axios.get('/api/payment-summary')
      setPaymentSummary(response.data);
    }

    getDeliveryOptions();
  }, []);

  return (
    <>
      <title>Checkout</title>
      <CheckoutHeader cart={cart} />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummery cart={cart} deliveryOptions={deliveryOptions} />

          <PaymentSummary paymentSummery={paymentSummery}/>
        </div>
      </div>
    </>
  );
}