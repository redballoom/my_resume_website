import React from 'react';

interface Skill {
  name: string;
  level: number;
}

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const renderSkillDots = (level: number) => {
    const dots = [];
    for (let i = 1; i <= 5; i++) {
      dots.push(
        <span
          key={i}
          className={`inline-block w-2 h-2 rounded-full mx-0.5 ${
            i <= level ? 'bg-blue-600' : 'bg-gray-300'
          }`}
        ></span>
      );
    }
    return dots;
  };

  return (
    <div className="w-full mb-10">
      <h2 className="text-xl font-bold mb-4 border-b border-gray-300 pb-2">技能</h2>
      <div className="space-y-2">
        {skills.map((skill, index) => (
          <div key={index} className="flex justify-between items-center">
            <span>{skill.name}</span>
            <div className="flex">
              {renderSkillDots(skill.level)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;