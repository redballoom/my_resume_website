import React from 'react';
import {
  User, Mail, Phone, Home, Globe
} from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import { tw } from '@/lib/tokens';

interface PersonalInfoProps {
  name: string;
  email: string;
  phone: string;
  address: string;
  website: string;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({
  name,
  email,
  phone,
  address,
  website
}) => {
  const infoItems = [
    { icon: User, label: '姓名：', value: name },
    { icon: Mail, label: '邮箱：', value: email, href: `mailto:${email}` },
    { icon: Phone, label: '电话：', value: phone },
    { icon: Home, label: '地址：', value: address },
    { icon: Globe, label: '网站：', value: website, href: `https://${website}`, external: true },
  ];

  return (
    <div className={tw.spacing.section}>
      <SectionTitle level="h2" accent="primary">
        个人信息
      </SectionTitle>
      <div className="space-y-2">
        {infoItems.map((item, index) => {
          const Icon = item.icon;
          const valueElement = item.href ? (
            <a
              href={item.href}
              className="text-primary-600 hover:underline"
              {...(item.external && { target: '_blank', rel: 'noopener noreferrer' })}
            >
              {item.value}
            </a>
          ) : (
            <span>{item.value}</span>
          );

          return (
            <p key={index} className="flex items-center">
              <Icon className="mr-2 h-4 w-4 text-primary-700" />
              <span className="font-medium w-20 text-sm">{item.label}</span>
              {valueElement}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default PersonalInfo;