import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    // هنا نقوم بعملية الانتقال للداشبورد بعد ضغط الزر
    if (email && password) {
       localStorage.setItem('isLoggedIn', 'true'); 
    navigate('/Dashboard');
    } else {
      alert("يرجى ملء الحقول المطلوبة");
    }
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleLogin}>
        <div className="login-header">
          <h2>تسجيل الدخول</h2>
          <p>أهلاً بك في لوحة تحكم المتجر</p>
        </div>
        
        <input 
          type="email" 
          placeholder="البريد الإلكتروني" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
        />
        <input 
          type="password" 
          placeholder="كلمة المرور" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required 
        />
        
        <button type="submit">دخول</button>
      </form>
    </div>
  );
};

export default Login;