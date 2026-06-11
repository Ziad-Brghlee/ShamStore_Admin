import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashbord';
import Users from './pages/Users';
import Products from './pages/Products';
import Orders from './pages/Orders';
import './App.css';
function App() {
  return (
    <div className='app-container'>
      <Sidebar />
      
      {/* محتوى الصفحات المتغيرة سيظهر هنا بناءً على الرابط */}
      <div className='main-content'>
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Users" element={<Users />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Orders" element={<Orders />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;