import React from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import InfoCard from '@/components/ui/InfoCard';
import { tw } from '@/lib/tokens';

interface CoreAdvantagesProps {
  coreAdvantages: string[];
}

const CoreAdvantages: React.FC<CoreAdvantagesProps> = ({ coreAdvantages }) => {
  return (
    <div className={tw.spacing.section}>
      <SectionTitle level="h3" accent="secondary">
        核心优势
      </SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {coreAdvantages.map((advantage, index) => (
          <InfoCard
            key={index}
            variant="gradient"
            accent="secondary"
            className="text-sm font-medium"
          >
            <div className="flex items-center">
              <div className="w-2 h-2 bg-secondary-600 rounded-full mr-3"></div>
              <span>{advantage}</span>
            </div>
          </InfoCard>
        ))}
      </div>
    </div>
  );
};

export default CoreAdvantages;