import React from 'react';

interface SkillBarProps {
  name: string;
  level: number; // 1-5
  maxLevel?: number;
  className?: string;
}

const SkillBar: React.FC<SkillBarProps> = ({
  name,
  level,
  maxLevel = 5,
  className = ''
}) => {
  const renderSkillDots = () => {
    const dots = [];
    for (let i = 1; i <= maxLevel; i++) {
      dots.push(
        <span
          key={i}
          className={`inline-block w-2 h-2 rounded-full mx-0.5 transition-colors ${
            i <= level
              ? 'bg-primary-600'
              : 'bg-gray-300'
          }`}
          aria-label={`${name} 熟练度: ${level}/${maxLevel}`}
        />
      );
    }
    return dots;
  };

  return (
    <div className={`flex justify-between items-center ${className}`}>
      <span className="text-sm font-medium text-gray-700">{name}</span>
      <div className="flex" role="progressbar" aria-valuemin={0} aria-valuemax={maxLevel} aria-valuenow={level}>
        {renderSkillDots()}
      </div>
    </div>
  );
};

export default SkillBar;