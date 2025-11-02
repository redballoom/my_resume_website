import React from 'react';
import { 
  User, Mail, Phone, Home, Globe 
} from 'lucide-react';

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
  return (
    <div className="w-full mb-10">
      <h2 className="text-xl font-bold mb-4 border-b border-gray-300 pb-2">个人信息</h2>
      <div className="space-y-2">
        <p className="flex items-center">
          <User className="mr-2 h-4 w-4 text-blue-700" />
          <span className="font-medium w-20">姓名：</span>
          <span>{name}</span>
        </p>
        <p className="flex items-center">
          <Mail className="mr-2 h-4 w-4 text-blue-700" />
          <span className="font-medium w-20">邮箱：</span>
          <a href={`mailto:${email}`} className="text-blue-600 hover:underline">
            {email}
          </a>
        </p>
        <p className="flex items-center">
          <Phone className="mr-2 h-4 w-4 text-blue-700" />
          <span className="font-medium w-20">电话：</span>
          <span>{phone}</span>
        </p>
        <p className="flex items-center">
          <Home className="mr-2 h-4 w-4 text-blue-700" />
          <span className="font-medium w-20">地址：</span>
          <span>{address}</span>
        </p>
        <p className="flex items-center">
          <Globe className="mr-2 h-4 w-4 text-blue-700" />
          <span className="font-medium w-20">网站：</span>
          <a href={`https://${website}`} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
            {website}
          </a>
        </p>
      </div>
    </div>
  );
};

export default PersonalInfo;