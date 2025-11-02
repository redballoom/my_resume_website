// 简历相关类型定义

export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
  website: string;
  avatar: string;
}

export interface Skill {
  name: string;
  level: number; // 1-5
}

export interface Experience {
  position: string;
  company: string;
  period: string;
  description: string[];
}

export interface Project {
  name: string;
  period: string;
  summary?: string;
  description: string[];
}

export interface Certification {
  name: string;
  time?: string;
}

export interface EducationItem {
  degree: string;
  school: string;
  period: string;
  description?: string[];
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  summary: string;
  jobIntention: string;
  coreAdvantages: string[];
  skills: Skill[];
  hobbies: string[];
  workExperience: Experience[];
  projectExperience: Project[];
  certifications: Certification[];
  education: EducationItem[];
}

export type AccentColor = 'primary' | 'secondary' | 'accent';

export interface CardVariant {
  default: string;
  bordered: string;
  gradient: Record<AccentColor, string>;
}

export interface SectionTitleProps {
  level: 'h1' | 'h2' | 'h3' | 'h4';
  children: React.ReactNode;
  className?: string;
  accent?: AccentColor;
}