import React from 'react';
import { useTranslation } from 'react-i18next';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import './MainLayout.scss';

const MainLayout: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'vi' ? 'en' : 'vi');
  };

  return (
    <div className="cv-container">
      <button className="lang-toggle-btn" onClick={toggleLanguage}>
        {i18n.language === 'vi' ? 'Vi / En' : 'En / Vi'}
      </button>
      
      <div className="cv-wrapper">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
};

export default MainLayout;