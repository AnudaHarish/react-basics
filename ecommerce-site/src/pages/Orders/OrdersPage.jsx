import axios from 'axios';
import dayjs from 'dayjs';
import {useEffect, useState} from 'react';
import {Header} from '../../components/Header';
import {OrderDetailGrid} from './OrderDetailGrid';
import {formatMoney} from '../../utils/formatMoney';
import "./OrdersPage.css";

export function OrdersPage({cart}) {
  let [orders, setOrders] = useState([]);
  useEffect(() => {
    axios.get('/api/orders?expand=products')
    .then((response) => {
      setOrders(response.data);
    })
  },[]);
  return (
    <>
      <title>Orders</title>
      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <div className="orders-grid">
          {orders.map((order) => {
            return (
              <div key={order.id} className="order-container">
                <div className="order-header">
                  <div className="order-header-left-section">
                    <div className="order-date">
                      <div className="order-header-label">Order Placed:</div>
                      <div>
                        {dayjs(order.estimatedDeliveryTimeMs).format("MMMM D")}
                      </div>
                    </div>
                    <div className="order-total">
                      <div className="order-header-label">Total:</div>
                      <div>{formatMoney(order.totalCostCents)}</div>
                    </div>
                  </div>

                  <div className="order-header-right-section">
                    <div className="order-header-label">Order ID:</div>
                    <div>{order.id}</div>
                  </div>
                </div>

                <OrderDetailGrid order={order} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
