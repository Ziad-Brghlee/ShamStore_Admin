import React, { useState } from 'react';
import './OrdersMamagement.css';

const OrdersManagement = () => {
  // بيانات تجريبية للطلبات
  const [orders, setOrders] = useState([
    { id: 101, buyer: "خالد", seller: "متجر التقنية", amount: 500, date: "2026-06-05", status: 'Pending Delivery' },
    { id: 102, buyer: "سارة", seller: "أزياء عالمية", amount: 200, date: "2026-06-12", status: 'Pending Delivery' },
  ]);

  // دالة حساب الأيام
  const getDaysPassed = (date) => {
    const diff = new Date() - new Date(date);
    return Math.floor(diff / (1000 * 60 * 60 * 24));
  };

  const handleCancelOrder = (order) => {
    const reason = prompt("يرجى إدخال سبب إلغاء الطلب:");
    if (reason) {
      console.log(`تم إلغاء الطلب ${order.id} للسبب: ${reason}`);
      setOrders(orders.filter(o => o.id !== order.id));
      // هنا يتم استدعاء API لعمل Refund للمشتري
    }
  };

  return (
    <div className="orders-container">
      <h1>إدارة طلبات الشراء</h1>
      <table className="orders-table">
        <thead>
          <tr>
            <th>المشتري</th>
            <th>البائع</th>
            <th>المبلغ</th>
            <th>الأيام منذ الطلب</th>
            <th>الإجراء</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => {
            const days = getDaysPassed(order.date);
            const isLate = days >= 5;

            return (
              <tr key={order.id} className={isLate ? 'late-order' : ''}>
                <td>{order.buyer}</td>
                <td>{order.seller}</td>
                <td>{order.amount} $</td>
                <td style={{ color: isLate ? 'red' : 'inherit', fontWeight: isLate ? 'bold' : 'normal' }}>
                  {days} أيام
                </td>
                <td>
                  <button className="btn-cancel" onClick={() => handleCancelOrder(order)}>
                    إلغاء وإعادة أموال
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersManagement;