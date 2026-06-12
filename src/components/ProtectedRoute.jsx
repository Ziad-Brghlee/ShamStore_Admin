import { Navigate } from 'react-router-dom';
import 'Fina'

const ProtectedRoute = ({ children }) => {
  // الحارس يسأل: هل يوجد مفتاح في "جيب" المتصفح (localStorage)؟
  const isAuthenticated = localStorage.getItem('isLoggedIn'); 

  if (!isAuthenticated) {
    // إذا لم يجد مفتاحاً، يطرده لصفحة الدخول
    return <Navigate to="/" />;
  }
  
  // إذا وجد المفتاح، يعرض الصفحة المطلوبة (children)
  return children;
};

export default ProtectedRoute;