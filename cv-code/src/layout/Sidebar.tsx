import React from "react";
import { useTranslation } from 'react-i18next';
import './Sidebar.scss';
const Sidebar: React.FC = () => {
  const { t } = useTranslation();
  
 const rawEducation: unknown = t('education_list', { returnObjects: true });
  const educationList = (Array.isArray(rawEducation) ? rawEducation : []) as { school: string; major: string; duration: string }[];

  return (
    <aside className="cv-sidebar">
      <div className='print-container'>
        <button className="print-pdf">
          <span className="btn-icon">📥</span> Tải xuống
        </button>
      </div>
      <div className="profile-container">
        <div className="avatar-box">
          <img src="/src/assets/IMG_1204.jpeg" alt="Văn Huy" />
        </div>
        <h1 className="profile-name">NGUYỄN VĂN HUY</h1>
        <p className="profile-job">THỰC TẬP SINH</p>
      </div>

      <div className="sidebar-section">
        <h3 className="section-title">
          <span className="title-icon">📞</span> {t('contact')}
        </h3>
        <p className="contact-item">📮nguyenvanhuy062006@gmail.com</p>
        <p className="contact-item">📍 Hải Phòng, Việt Nam</p>
      </div>

      <div className="sidebar-section">
        <h3 className="section-title">
          <span className="title-icon">🎓</span> Học vấn
        </h3>
        {Array.isArray(educationList) && educationList.map((edu: { school: string; major: string; duration: string }, idx: number) => (
          <div className="edu-item" key={idx}>
            <h4 className="item-main">{edu.school}</h4>
            <p className="item-sub">{edu.major}</p>
            <p className="item-date">{edu.duration}</p>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
