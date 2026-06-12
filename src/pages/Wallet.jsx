import React from 'react';
import './Wallet.css';

const Wallet = () => {
  // بيانات الأرباح (يتم جلبها من قاعدة البيانات)
  const earnings = [
    { id: 1, orderId: 101, seller: "متجر التقنية", total: 500, commission: 5 },
    { id: 2, orderId: 102, seller: "أزياء عالمية", total: 200, commission: 2 },
  ];

  const totalEarnings = earnings.reduce((sum, item) => sum + item.commission, 0);

  return (
    <div className="wallet-container">
      <h1>محفظة أرباح المنصة</h1>
      
      <div className="wallet-card">
        <h2>رصيد الأرباح المتاح</h2>
        <h1 className="amount">{totalEarnings} $</h1>
        
      </div>

      <div className="history-section">
        <h3>سجل التحصيلات (العمولات)</h3>
        <table className="wallet-table">
          <thead>
            <tr>
              <th>رقم الطلب</th>
              <th>البائع</th>
              <th>قيمة الطلب</th>
              <th>العمولة (1%)</th>
            </tr>
          </thead>
          <tbody>
            {earnings.map(item => (
              <tr key={item.id}>
                <td>#{item.orderId}</td>
                <td>{item.seller}</td>
                <td>{item.total} $</td>
                <td className="profit">{item.commission} $</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wallet;