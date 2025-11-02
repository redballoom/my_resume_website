import React from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import { tw } from '@/lib/tokens';

interface SummaryProps {
  summary: string;
}

const Summary: React.FC<SummaryProps> = ({ summary }) => {
  return (
    <section className={tw.spacing.section}>
      <SectionTitle level="h2" accent="primary">
        个人简介
      </SectionTitle>
      <p className={tw.text.body}>
        {summary}
      </p>
    </section>
  );
};

export default Summary;