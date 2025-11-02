import React from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import { tw } from '@/lib/tokens';

interface HobbiesProps {
  hobbies: string[];
}

const Hobbies: React.FC<HobbiesProps> = ({ hobbies }) => {
  return (
    <div className={tw.spacing.section}>
      <SectionTitle level="h2" accent="primary">
        爱好
      </SectionTitle>
      <div className="space-y-2">
        {hobbies.map((hobby, index) => (
          <p key={index} className="flex items-center">
            <span className="inline-block w-2 h-2 rounded-full bg-primary-700 mr-2"></span>
            <span className="text-sm text-gray-700">{hobby}</span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Hobbies;