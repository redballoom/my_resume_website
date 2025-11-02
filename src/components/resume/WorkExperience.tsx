import React from 'react';

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
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-blue-800 border-b-2 border-gray-200 pb-2">工作经历</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index}>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
              <h3 className="text-xl font-semibold text-blue-700">{exp.position}</h3>
              <span className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded mt-1 sm:mt-0">
                {exp.period}
              </span>
            </div>
            <h4 className="text-gray-600 mb-2">{exp.company}</h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;