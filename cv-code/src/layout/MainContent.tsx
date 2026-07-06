import React from "react";
import './MainLayout.scss';
import { useTranslation } from 'react-i18next';

// Định nghĩa trực tiếp Component SkillProgress tại đây để loại bỏ việc import lỗi path
interface SkillProps {
  name: string;
  level: number;
}
const SkillProgress: React.FC<SkillProps> = ({ name, level }) => {
  return (
    <div className="skill-item" style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
      <span className="skill-name" style={{ width: '100px', fontWeight: 500 }}>{name}</span>
      <div className="progress-bar-bg" style={{ flex: 1, backgroundColor: '#e0e0e0', height: '8px', borderRadius: '4px', overflow: 'hidden', marginLeft: '10px' }}>
        <div className="progress-bar-fill" style={{ backgroundColor: '#3498db', height: '100%', width: `${(level / 5) * 100}%`, transition: 'width 0.3s' }}></div>
      </div>
    </div>
  );
};

const MainContent: React.FC = () => {
  const { t } = useTranslation();

  const rawExperience: unknown = t('experience_list', { returnObjects: true });
  const experienceList = (Array.isArray(rawExperience) ? rawExperience : []) as { company: string; role: string; duration: string; desc: string }[];
  const skills = [
    { name: 'HTML', level: 3 },
    { name: 'CSS', level: 3 },
    { name: 'JavaScript', level: 2 },
    { name: 'ReactJS', level: 3 }
  ];

  return (
    <main className="cv-main-content">
      <section className="main-section">
        <h3 className="main-section-tittle">
          <span className="icon-circle">👨‍💻</span> {t('about_me')}
        </h3>
        <p className="sumary-text">{t('about_me_desc')}</p>
      </section>

      <section className="main-section">
        <h3 className="main-section-tittle">
          <span className="icon-circle">📊</span> {t('skills')}
        </h3>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <SkillProgress key={index} name={skill.name} level={skill.level} />
          ))}
        </div>
      </section>

      <section className="main-section">
        <h3 className="main-section-tittle">
          <span className="icon-circle">💼</span> {t('experience')}
        </h3>
        {Array.isArray(experienceList) && experienceList.map((exp: { company: string; role: string; duration: string; desc: string }, index: number) => (
          <div className="exp-block" key={index}>
            <div className="exp-timeline">
              <h4 className="company-name">{exp.company}</h4>
              <span className="job-date">{exp.duration}</span>
            </div>
            <p className="job-role">{exp.role}</p>
            <p className="job-desc">{exp.desc}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default MainContent;