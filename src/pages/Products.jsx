import React, { useState } from 'react';
import DataTable from '../components/DataTable';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'لابتوب ديل', price: '800$', stock: 10 },
    { id: 2, name: 'ماوس لاسلكي', price: '20$', stock: 50 }
  ]);

  const [modal, setModal] = useState({ show: false, row: null });
  const [reason, setReason] = useState('');

  const initiateDelete = (row) => {
    setModal({ show: true, row });
  };

  const confirmDelete = () => {
    if (!modal.row) return;
    
    console.log(`تم حذف المنتج ${modal.row.name} لسبب: ${reason}`);
    setProducts(products.filter(p => p.id !== modal.row.id));
    
    setModal({ show: false, row: null });
    setReason('');
  };

  return (
    <div className="products-page">
      <h1>إدارة المنتجات</h1>
      
      <DataTable 
        columns={[
          { header: 'اسم المنتج', field: 'name' }, 
          { header: 'السعر', field: 'price' }
        ]} 
        data={products} 
        actions={(row) => (
          <div className="actions">
            <button className="delete-btn" onClick={() => initiateDelete(row)}>حذف</button>
          </div>
        )}
      />

      {modal.show && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>سبب الحذف</h3>
            <p>أنت تقوم بحذف المنتج: <strong>{modal.row.name}</strong></p>
            <textarea 
              placeholder="اكتب سبب الحذف للمستخدم..." 
              value={reason} 
              onChange={(e) => setReason(e.target.value)}
            />
            <div className="modal-actions">
              <button className="cancel-btn" onClick={() => setModal({ show: false, row: null })}>إلغاء</button>
              <button className="confirm-btn" onClick={confirmDelete}>إرسال الإشعار والحذف</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;