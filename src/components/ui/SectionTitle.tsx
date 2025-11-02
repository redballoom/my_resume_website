import React from 'react';
import { tw } from '@/lib/tokens';

interface SectionTitleProps {
  level: 'h1' | 'h2' | 'h3' | 'h4';
  children: React.ReactNode;
  className?: string;
  accent?: 'primary' | 'secondary' | 'accent';
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  level,
  children,
  className = '',
  accent = 'primary'
}) => {
  const accentBackgrounds = {
    primary: 'bg-primary-100 text-primary-800',
    secondary: 'bg-secondary-100 text-secondary-800',
    accent: 'bg-accent-100 text-accent-800',
  };

  const baseClasses = tw.heading[level] + ' ' + className;

  const Tag = level;

  if (level === 'h1') {
    return <h1 className={baseClasses}>{children}</h1>;
  } else if (level === 'h2' || level === 'h3') {
    return (
      <h2 className={baseClasses}>
        <span className={`inline-block px-3 py-1 rounded-md font-semibold ${accentBackgrounds[accent]}`}>
          {children}
        </span>
      </h2>
    );
  } else {
    return <h4 className={baseClasses}>{children}</h4>;
  }
};

export default SectionTitle;