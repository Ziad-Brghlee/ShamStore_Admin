  import React from 'react';
  import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
  import './Dashboard.css';

  const data = [
    { name: 'السبت', طلبات: 12 },
    { name: 'الأحد', طلبات: 19 },
    { name: 'الاثنين', طلبات: 15 },
    { name: 'الثلاثاء', طلبات: 25 },
    { name: 'الأربعاء', طلبات: 22 },
  ];

  const Dashboard = () => {
    return (
      <div className="dashboard-page">
        <h1>لوحة التحكم الرئيسية</h1>
        
        <div className="stats-container">
          <div className="stat-card">
            <h3>إجمالي الأرباح</h3><p className="stat-number">7</p>
            <p className="trend-up">▲ 12% عن الأسبوع الماضي</p>
          </div>
          <div className="stat-card">
            <h3>المشترون</h3><p className="stat-number">1,240</p>
            <p className="trend-up">▲ 5% عن الأسبوع الماضي</p>
          </div>
          <div className="stat-card">
            <h3>البائعون</h3><p className="stat-number">85</p>
            <p className="trend-up">▲ 2% عن الأسبوع الماضي</p>
          </div>
          <div className="stat-card">
            <h3>الطلبات</h3><p className="stat-number">342</p>
            <p className="trend-up">▲ 8% عن الأسبوع الماضي</p>
          </div>
        </div>

        <div className="bottom-section">
          <div className="chart-container">
            <h3>حركة الطلبات خلال الأسبوع</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="طلبات" stroke="#2563eb" strokeWidth={4} dot={{ r: 6 }} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

                      
            <div className="activity-container">
              <h3>آخر عمليات النظام</h3>
              <div className="activity-item">
                <span>طلب جديد من "أحمد"</span>
                <span className="status-badge pending">بانتظار المراجعة</span>
              </div>
              <div className="activity-item">
                <span>تم شحن طلب "سارة"</span>
                <span className="status-badge shipped">تم الشحن</span>
              </div>
              <div className="activity-item">
                <span>إلغاء طلب "ياسر"</span>
                <span className="status-badge cancelled">ملغي</span>
              </div>
            </div>
          </div>
        </div>
    );
  };

  export default Dashboard;