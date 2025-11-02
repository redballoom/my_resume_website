import React from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import { tw } from '@/lib/tokens';

interface Project {
  name: string;
  period: string;
  summary?: string;
  description: string[];
}

interface ProjectExperienceProps {
  projects: Project[];
}

const ProjectExperience: React.FC<ProjectExperienceProps> = ({ projects }) => {
  return (
    <section className={tw.spacing.section}>
      <SectionTitle level="h2" accent="primary">
        项目经历
      </SectionTitle>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index}>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
              <h3 className={tw.heading.h3.replace('text-primary-700', 'text-primary-700')}>{project.name}</h3>
              <span className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded mt-1 sm:mt-0">
                {project.period}
              </span>
            </div>
            {project.summary && (
              <p className="text-base font-medium mb-3 text-primary-700">
                {project.summary}
              </p>
            )}
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              {project.description.map((item, i) => (
                <li key={i} className="text-sm">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectExperience;