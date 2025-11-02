import React from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import InfoCard from '@/components/ui/InfoCard';
import { Award } from 'lucide-react';
import { tw } from '@/lib/tokens';

interface Certification {
  name: string;
  time?: string;
}

interface CertificationsProps {
  certifications: Certification[];
}

const Certifications: React.FC<CertificationsProps> = ({ certifications }) => {
  return (
    <div className={tw.spacing.section}>
      <SectionTitle level="h3" accent="accent">
        专业认证
      </SectionTitle>
      <div className="space-y-3">
        {certifications.map((cert, index) => (
          <InfoCard
            key={index}
            variant="gradient"
            accent="accent"
            title={cert.name}
            description={cert.time}
            icon={Award}
          />
        ))}
      </div>
    </div>
  );
};

export default Certifications;