import React  from "react";
import {useTranslation} from 'react-i18next';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import './MainLayout.scss';
const MainLayout: React.FC=() =>{
    const {i18n}=useTranslation();
    const toggleLanguge =() =>{
        const nextLang = i18n.language=== 'vi' ?'en':'vi';
        i18n.changeLanguage(nextLang);

    };
    return(
        <div className="cv-container">
            <button className="lang-switcher" onClick={toggleLanguge}>
                {i18n.language === 'vi'?'EN':"VI"}
            </button>
            <div className="cv-paper">
                <Sidebar/>
                <MainContent/>
            </div>
        </div>
    );
};
export default MainLayout;