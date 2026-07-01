import React from "react";
import {useTranslation} from 'react-i18next';
import './Sidebar.scss';
const Sidebar: React.FC = () => {
  const {t}=useTranslation();
  const educationList =(t('education_list',{returnObjects:true}) || [])as {school:string;major: string;duration:string}[];
  return (
    <aside className="cv-sidebar">
      <div className="profile-container">
        <div className='avatar-box'>
        <img src='/src/assets/IMG_1204.jpeg' alt ='Văn Huy'/>
        </div>
      <h1 className='profile-name'>VĂN HUY</h1>
      <p className='profile-job'>THỰC TẬP SINH</p>
      </div>
      <div className='sidebar-section'>
        <h3 className='section-title'>
          <span className='title-icon'>🧑‍💻</span>{t('contact')}
        </h3>
        {educationList.map((edu,idex)=>(
          <div className='edu-item' key={idex}>
            <h4 className='item-main'>{edu.school}</h4>
            <p className='item-sub'>{edu.major}</p>
            <p className='item-date'> {edu.duration}</p>
          </div>
        ))}
      </div>

    </aside>
  );
};

export default Sidebar;

