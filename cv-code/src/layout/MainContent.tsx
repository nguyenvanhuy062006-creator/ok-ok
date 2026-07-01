import React from "react";
import './MainLayout.scss';
import {useTranslation} from 'react-i18next';
import SkillProgress from '../components/SkillProgress';

const MainContent: React.FC = () => {
  const {t}=useTranslation();
  const experienceList =t('experience_list',{returnObjects: true})as {company:string;position:string;duration:string;description:string}[];
  const skills=[
    {name: 'html',level : 4},
    {name: 'css', level: 4},
    {name: 'js', level: 4},
    {name: 'reactjs', level: 4}
  ];


  return (
    <main className="cv-main-content">
      <section className='main-section'>
        <h3 className='main-section-tittle'><span className='icon-circle'></span>{t('about_me')}</h3>
        <p className ='sumary-text'>{t('about_me_desc')}</p>
      </section>
      <section className='main-section'>
        <h3 className='main-section-tittle'>
          <span className='icon-circle'>📊</span>{t('skills')}
        </h3>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <SkillProgress key={index} name={skill.name} level={skill.level} />
          ))}
        </div>
      </section>
      <section className="main-section">
        <h3 className="main-section-tittle">
          <span className="icon-circle"></span> {t('experience')}
        </h3>
        {experienceList.map((exp, index) => (
          <div className="exp-block" key={index}>
            <div className="exp-timeline">
              <h4 className="company-name">{exp.company}</h4>
              <span className="job-date">{exp.duration}</span>
            </div>
            <p className="job-role">{exp.position}</p>
            <p className="job-desc">{exp.description}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default MainContent;

