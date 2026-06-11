import { useState } from 'react';
import DataTable from '../components/DataTable';

const Products = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'لابتوب ديل', price: '800$', stock: 10 },
    { id: 2, name: 'ماوس لاسلكي', price: '20$', stock: 50 },
    { id: 3, name: 'شاشة سامسونج', price: '150$', stock: 5 }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  // دالة الحذف
  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  // دالة التعديل (يمكنك وضع منطق التعديل لاحقاً هنا)
  const editProduct = (id) => {
    alert(`جاري تعديل المنتج رقم: ${id}`);
  };

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const columns = [
    { header: 'الرقم', field: 'id' },
    { header: 'اسم المنتج', field: 'name' },
    { header: 'السعر', field: 'price' },
    { header: 'الكمية', field: 'stock' }
  ];

  return (
    <div className="products-page">
      <h1>إدارة المنتجات</h1>
      
      <input 
        type="text" 
        className="search-input"
        placeholder="ابحث عن منتج بالاسم..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="table-container">
        <DataTable 
          columns={columns} 
          data={filteredProducts} 
          // هنا أضفنا أزرار الحذف والتعديل فقط
          actions={(row) => (
            <div className="actions">
              <button className="edit-btn" onClick={() => editProduct(row.id)}>تعديل</button>
              <button className="delete-btn" onClick={() => deleteProduct(row.id)}>حذف</button>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default Products;