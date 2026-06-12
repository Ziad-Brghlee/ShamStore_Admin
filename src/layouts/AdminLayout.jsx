import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar'; // تأكد من المسار الصحيح حسب مجلدك

const AdminLayout = () => {
  return (
    <div className="admin-layout-wrapper">
      {/* القائمة الجانبية (موجودة مسبقاً عندك) */}
      <Sidebar />

      {/* منطقة المحتوى التي تتغير حسب الرابط */}
      <div className="main-content-area">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;