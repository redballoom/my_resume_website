import React from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import SkillBar from '@/components/ui/SkillBar';
import { tw } from '@/lib/tokens';

interface Skill {
  name: string;
  level: number;
}

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <div className={tw.spacing.section}>
      <SectionTitle level="h2" accent="primary">
        技能
      </SectionTitle>
      <div className="space-y-2">
        {skills.map((skill, index) => (
          <SkillBar
            key={index}
            name={skill.name}
            level={skill.level}
            className="mb-2"
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;