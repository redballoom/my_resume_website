import React from 'react';

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
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-blue-800 border-b-2 border-gray-200 pb-2">项目经历</h2>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index}>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
              <h3 className="text-xl font-semibold text-blue-700">{project.name}</h3>
              <span className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded mt-1 sm:mt-0">
                {project.period}
              </span>
            </div>
            {project.summary && (
              <p className="text-base font-medium mb-3" style={{ color: '#395A86' }}>
                {project.summary}
              </p>
            )}
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              {project.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectExperience;