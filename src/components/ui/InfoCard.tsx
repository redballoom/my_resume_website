import React from 'react';
import { LucideIcon } from 'lucide-react';

interface InfoCardProps {
  title?: string;
  description?: string;
  icon?: LucideIcon;
  variant?: 'default' | 'bordered' | 'gradient';
  accent?: 'primary' | 'secondary' | 'accent';
  children?: React.ReactNode;
  className?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  icon: Icon,
  variant = 'default',
  accent = 'primary',
  children,
  className = ''
}) => {
  const variantStyles = {
    default: 'bg-white border border-gray-200 shadow-sm',
    bordered: 'bg-white border-l-4 shadow-sm',
    gradient: {
      primary: 'bg-gradient-to-r from-primary-50 to-blue-50 border-l-4 border-primary-600',
      secondary: 'bg-gradient-to-r from-secondary-50 to-green-50 border-l-4 border-secondary-600',
      accent: 'bg-gradient-to-r from-accent-50 to-purple-50 border-l-4 border-accent-600',
    }
  };

  const getCardStyles = () => {
    if (variant === 'gradient') {
      return variantStyles.gradient[accent];
    }
    return variantStyles[variant];
  };

  return (
    <div className={`rounded-lg p-4 ${getCardStyles()} ${className}`}>
      {(title || description || Icon) && (
        <div className="flex items-start space-x-3">
          {Icon && (
            <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
              ${accent === 'primary' ? 'bg-primary-600' : ''}
              ${accent === 'secondary' ? 'bg-secondary-600' : ''}
              ${accent === 'accent' ? 'bg-accent-600' : ''}
            `}>
              <Icon className="text-white" size={16} />
            </div>
          )}
          <div className="flex-1 min-w-0">
            {title && (
              <h4 className="text-sm font-medium text-gray-800">{title}</h4>
            )}
            {description && (
              <p className="text-xs text-gray-600 mt-1">{description}</p>
            )}
          </div>
        </div>
      )}
      {children && (
        <div className="mt-3">
          {children}
        </div>
      )}
    </div>
  );
};

export default InfoCard;