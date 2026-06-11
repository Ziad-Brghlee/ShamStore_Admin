import { useState } from 'react';
import DataTable from '../components/DataTable';
import './Users.css';

const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'زياد برغله', city: 'دمشق', isActive: true },
    { id: 2, name: 'سامر الحلبي', city: 'حلب', isActive: true },
    { id: 3, name: 'ريما الحمصي', city: 'حمص', isActive: false },
    { id: 4, name: 'خالد اللاذقاني', city: 'اللاذقية', isActive: true },
    { id: 5, name: 'منى الطرطوسي', city: 'طرطوس', isActive: true }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  // دالة الحظر/التنشيط
  const toggleStatus = (id) => {
    setUsers(users.map(user => 
      user.id === id ? { ...user, isActive: !user.isActive } : user
    ));
  };

  // فلترة المستخدمين بناءً على اسمهم (تستخدم في البحث)
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const columns = [
    { header: 'الرقم', field: 'id' },
    { header: 'الاسم', field: 'name' },
    { header: 'المدينة', field: 'city' }
  ];

  return (
    <div className="users-page">
      <h1>إدارة المستخدمين</h1>
      
      
      {/* حقل البحث */}
      <input 
        type="text" 
        placeholder="ابحث عن مستخدم بالاسم..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <div className="table-container">
        <DataTable 
          columns={columns} 
          data={filteredUsers} // هنا نمرر البيانات المفلترة
          actions={(row) => (
            <button 
              onClick={() => toggleStatus(row.id)}
              className={`action-btn ${row.isActive ? 'block-btn' : 'activate-btn'}`}
            >
              {row.isActive ? 'حظر الحساب' : 'تنشيط الحساب'}
            </button>
          )}
        />
      </div>
    </div>
  );
};

export default Users;