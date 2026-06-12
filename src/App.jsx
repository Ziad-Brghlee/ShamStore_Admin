import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Products from './pages/Products';
import Orders from './pages/Orders';
import Wallet from './pages/Wallet';
import ProtectedRoute from './components/ProtectedRoute';
import FinancialRequests from './pages/FinancialRequests';
import OrdersManagement from './pages/OrdersManagement';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/*" element={
        <div className='app-container'>
          <Sidebar />
          <div className='main-content'>
            <Routes>
              <Route path="/Dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/Users" element={<ProtectedRoute><Users /></ProtectedRoute>} />
              <Route path="/Products" element={<ProtectedRoute><Products /></ProtectedRoute>} />
              <Route path="/Orders" element={<ProtectedRoute><Orders /></ProtectedRoute>} />
              <Route path="/Wallet" element={<ProtectedRoute><Wallet /></ProtectedRoute>} />
              <Route path="/FinancialRequests" element={<ProtectedRoute><FinancialRequests /></ProtectedRoute>} />
              <Route path="/OrdersManagement" element={<ProtectedRoute><OrdersManagement /></ProtectedRoute>} />
            </Routes>
          </div>
        </div>
      } />
    </Routes>
  );
}

export default App;