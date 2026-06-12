import React, { useState } from 'react';
import './FinancialRequests.css';

const FinancialRequests = () => {
  const [requests, setRequests] = useState([
    { id: 1, user: "أحمد", type: "إيداع", amount: 5000, balance: 1000, proof: "IMG_5521.jpg", status: 'pending' },
    { id: 2, user: "سارة", type: "سحب", amount: 2000, balance: 2500, proof: "طلب سحب", status: 'pending' },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedReq, setSelectedReq] = useState(null);
  const [rejectReason, setRejectReason] = useState("");

  const handleApprove = (id) => {
    console.log(`(تم قبول الطلب ${id})`);
    setRequests(requests.filter(r => r.id !== id));
  };

  const handleReject = () => {
    if (!selectedReq) return; 
    
    console.log(`(تم رفض الطلب ${selectedReq.id} - السبب: ${rejectReason})`);
    
    
    setShowModal(false);
    setRequests(requests.filter(r => r.id !== selectedReq.id));
    setSelectedReq(null);
    setRejectReason("");
  };

  return (
    <div className="requests-container">
      <h1>طلبات الإيداع والسحب</h1>
      <table className="requests-table">
        <thead>
          <tr>
            <th>المستخدم</th>
            <th>النوع</th>
            <th>المبلغ</th>
            <th>البيانات</th>
            <th>الإجراء</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((req) => (
            <tr key={req.id}>
              <td>{req.user}</td>
              <td className={req.type === 'إيداع' ? 'text-green' : 'text-red'}>{req.type}</td>
              <td>{req.amount} $</td>
              <td>
                {`${req.type === 'إيداع' ? <a href="#">{req.proof}</a> : `الرصيد المتاح: ${req.balance}`}`}
              </td>
              <td>
                <button className="btn-approve" onClick={() => handleApprove(req.id)}>قبول</button>
                <button className="btn-reject" onClick={() => { 
                  setSelectedReq(req); 
                  setShowModal(true); 
                }}>رفض</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>سبب الرفض</h2>
            <p>رفض طلب المستخدم: <strong>{selectedReq?.user}</strong></p>
            <textarea 
              placeholder="اكتب سبب الرفض هنا ليراه المستخدم..." 
              value={rejectReason}
              onChange={(e) => setRejectReason(e.target.value)}
            />
            <div className="modal-actions">
              <button onClick={() => setShowModal(false)}>إلغاء</button>
              <button className="btn-reject" onClick={handleReject}>تأكيد الرفض</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FinancialRequests;