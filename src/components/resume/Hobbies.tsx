import React from 'react';

interface HobbiesProps {
  hobbies: string[];
}

const Hobbies: React.FC<HobbiesProps> = ({ hobbies }) => {
  return (
    <div className="w-full">
      <h2 className="text-xl font-bold mb-4 border-b border-gray-300 pb-2">爱好</h2>
      <div className="space-y-2">
        {hobbies.map((hobby, index) => (
          <p key={index} className="flex items-center">
            <span className="inline-block w-2 h-2 rounded-full bg-blue-700 mr-2"></span>
            {hobby}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Hobbies;