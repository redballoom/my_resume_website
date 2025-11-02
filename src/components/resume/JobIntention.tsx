import React from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import InfoCard from '@/components/ui/InfoCard';
import { tw } from '@/lib/tokens';

interface JobIntentionProps {
  jobIntention: string;
}

const JobIntention: React.FC<JobIntentionProps> = ({ jobIntention }) => {
  return (
    <div className={tw.spacing.section}>
      <SectionTitle level="h3" accent="primary">
        求职意向
      </SectionTitle>
      <InfoCard
        variant="gradient"
        accent="primary"
        className="text-sm"
      >
        <p className={tw.text.body}>{jobIntention}</p>
      </InfoCard>
    </div>
  );
};

export default JobIntention;