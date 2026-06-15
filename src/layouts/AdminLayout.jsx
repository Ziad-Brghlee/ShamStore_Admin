import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar'; 

const AdminLayout = () => {
  return (
    <div className="admin-layout-wrapper">
      <Sidebar />
      <div className="main-content-area">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;