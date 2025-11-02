import React from 'react';

interface EducationItem {
  degree: string;
  school: string;
  period: string;
}

interface EducationProps {
  education: EducationItem[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-blue-800 border-b-2 border-gray-200 pb-2">教育背景</h2>
      <div className="space-y-4">
        {education.map((item, index) => (
          <div key={index}>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
              <h3 className="text-xl font-semibold text-blue-700">{item.degree}</h3>
              <span className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded mt-1 sm:mt-0">
                {item.period}
              </span>
            </div>
            <p className="text-gray-600">{item.school}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;