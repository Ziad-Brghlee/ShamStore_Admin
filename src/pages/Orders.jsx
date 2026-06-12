import { useState } from 'react';
import DataTable from '../components/DataTable';
import './Orders.css';

const Orders = () => {
  const [orders, setOrders] = useState([
    { id: 101, customer: 'أحمد محمود', product: 'لابتوب ديل', price: '800$', status: 'مكتمل' },
    { id: 102, customer: 'سارة خالد', product: 'شاشة سامسونج', price: '150$', status: 'قيد التوصيل' },
    { id: 103, customer: 'ياسر محمد', product: 'ماوس لاسلكي', price: '20$', status: 'مرفوض' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  // دالة تحديث الحالة
  const handleStatusChange = (id, newStatus) => {
    setOrders(orders.map(order => 
      order.id === id ? { ...order, status: newStatus } : order
    ));
  };

  // دالة الفلترة (هنا السحر يحدث!)
  const filteredOrders = orders.filter(order => 
    order.customer.toLowerCase().includes(searchTerm.toLowerCase()) || 
    order.product.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const columns = [
    { header: 'رقم الطلب', field: 'id' },
    { header: 'اسم الزبون', field: 'customer' },
    { header: 'المنتج', field: 'product' },
    { header: 'السعر', field: 'price' },
    { header: 'الحالة', field: 'status' }
  ];

  return (
    <div className="orders-page">
      <h1>إدارة الطلبات</h1>

      {/* حقل البحث للفلترة */}
      <input 
        type="text" 
        placeholder="ابحث باسم الزبون أو المنتج..." 
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      <div className="table-container">
        <DataTable 
          columns={columns} 
          data={filteredOrders} // نمرر البيانات المفلترة هنا
          actions={(row) => (
            <select 
              value={row.status} 
              onChange={(e) => handleStatusChange(row.id, e.target.value)}
              className={`modern-select ${row.status === 'مكتمل' ? 'done' : row.status === 'مرفوض' ? 'rejected' : 'pending'}`}
            >
              <option value="مكتمل">مكتمل</option>
              <option value="قيد التوصيل">قيد التوصيل</option>
              <option value="مرفوض">مرفوض</option>
            </select>
          )}
        />
      </div>
    </div>
  );
};

export default Orders;