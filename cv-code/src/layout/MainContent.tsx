import React from "react";
import './MainLayout.scss';
import {useTranslation} from 'react-i18next';

const MainContent: React.FC = () => {
  const {t}=useTranslation();
  const experienceList =t('experience_list',{returnObjects: true})as any[];
  const skills=[
    {name: 'html',level : 4},
    {name: 'css', level: 4},
    {name: 'js', level: 4},
    {name: 'reactjs', level: 4}
  ];


  return (
    <main className="cv-main-content">
      <section className='main-section'>
        <h3 className='main-section-tittle'><span className='icon-circle'>🧑‍💻</span>{t('about_me')}</h3>
        <p className ='sumary-text'>{t('about_me_desc')}</p>
      </section>
      
    </main>
  );
};

export default MainContent;

