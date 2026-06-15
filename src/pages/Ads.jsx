import React, { useState } from 'react';
import toast from 'react-hot-toast';
import './Ads.css';


const Ads = () => {
  const [ads, setAds] = useState([
    { id: 1, service: 'تصوير احترافي', provider: 'أحمد فوتو' },
    { id: 2, service: 'دروس لغة إنجليزية', provider: 'مدرسة سارة' },
  ]);

  const handleAction = (id, action) => {
    setAds(ads.filter(ad => ad.id !== id)); 
if (action === 'رفض') {
      toast.error(`فشل رفض الإعلان رقم ${id}`);
    } else {
      toast.success(`تم قبول الإعلان رقم وخصم 1$ من حسابك: ${id}`);
    }   
  };

  return (
    <div className="ads-container">
      <h1>إدارة الإعلانات</h1>
      <div>
        {ads.map((ad) => (
          <div key={ad.id} className="ad-card">
            <div className="ad-info">
              <h3>{ad.service}</h3>
              <p>مقدم الخدمة: {ad.provider}</p>
            </div>
            <div className="btn-group">
              <button className="btn-accept" onClick={() => handleAction(ad.id, 'قبول')}>قبول</button>
              <button className="btn-reject" onClick={() => handleAction(ad.id, 'رفض')}>رفض</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ads;