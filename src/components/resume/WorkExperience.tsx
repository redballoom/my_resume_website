import React from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import { tw } from '@/lib/tokens';

interface Experience {
  position: string;
  company: string;
  period: string;
  description: string[];
}

interface WorkExperienceProps {
  experiences: Experience[];
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ experiences }) => {
  return (
    <section className={tw.spacing.section}>
      <SectionTitle level="h2" accent="primary">
        工作经历
      </SectionTitle>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index}>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
              <h3 className={tw.heading.h3.replace('text-primary-700', 'text-primary-700')}>{exp.position}</h3>
              <span className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded mt-1 sm:mt-0">
                {exp.period}
              </span>
            </div>
            <h4 className="text-gray-600 mb-2">{exp.company}</h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              {exp.description.map((item, i) => (
                <li key={i} className="text-sm">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;