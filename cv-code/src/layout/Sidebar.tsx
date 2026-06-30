import React from "react";
import {useTranslation} from 'react-i18next';

const Sidebar: React.FC = () => {
  const {t}=useTranslation();
  const educationList =t('education_List',{returnObjects:true}) as any[];
  return (
    <aside className="cv-sidebar">
      <div className="profile-container"></div>
    </aside>
  );
};

export default Sidebar;

