import React from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import { tw } from '@/lib/tokens';

interface EducationItem {
  degree: string;
  school: string;
  period: string;
  description?: string[];
}

interface EducationProps {
  education: EducationItem[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section className={tw.spacing.section}>
      <SectionTitle level="h2" accent="primary">
        教育背景
      </SectionTitle>
      <div className="space-y-4">
        {education.map((item, index) => (
          <div key={index}>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
              <h3 className={tw.heading.h3.replace('text-primary-700', 'text-primary-700')}>{item.degree}</h3>
              <span className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded mt-1 sm:mt-0">
                {item.period}
              </span>
            </div>
            <p className="text-gray-600">{item.school}</p>
            {item.description && (
              <ul className="list-disc pl-5 text-gray-700 space-y-2 mt-3">
                {item.description.map((desc, i) => (
                  <li key={i} className="text-sm">{desc}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;