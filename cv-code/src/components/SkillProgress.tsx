import React from "react";

interface SkillProgressProps {
  name: string;
  level: number;
}

const SkillProgress: React.FC<SkillProgressProps> = ({ name, level }) => {
  const safeLevel = Math.max(0, Math.min(5, level));

  return (
    <div className="skill-progress-item">
      <span className="skill-name">{name}</span>
      <div className="bar-container">
        {[1, 2, 3, 4, 5].map((step) => (
          <div
            key={step}
            className={`bar-step ${step <= safeLevel ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillProgress;

