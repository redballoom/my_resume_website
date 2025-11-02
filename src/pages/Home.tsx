import React from 'react';
import PersonalInfo from '../components/resume/PersonalInfo';
import Skills from '../components/resume/Skills';
import Hobbies from '../components/resume/Hobbies';
import Summary from '../components/resume/Summary';
import WorkExperience from '../components/resume/WorkExperience';
import ProjectExperience from '../components/resume/ProjectExperience';
import Education from '../components/resume/Education';
import resumeData from '../lib/resumeData.json';

export default function Home() {
  return (
    <div id="home" className="min-h-screen bg-gray-100 pt-20 pb-8 px-4 sm:pt-8 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* 左侧边栏 */}
            <div id="personal" className="p-6 md:w-1/3 bg-[#F5F7F9]">
              {/* 头像区域 - 带蓝色半圆背景 */}
               <div className="relative">
                <div className="absolute inset-0 bg-blue-800 rounded-b-[50%] transform -translate-y-[40%]"></div>
                <div className="flex justify-center pt-10 relative z-10">
                  <div className="w-40 h-40 rounded-full border-4 border-white overflow-hidden shadow-lg">
                    <img 
                      src={resumeData.personalInfo.avatar} 
                      alt={resumeData.personalInfo.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* 姓名 */}
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-gray-800">{resumeData.personalInfo.name}</h1>
              </div>
              
              {/* 个人信息 */}
              <PersonalInfo 
                name={resumeData.personalInfo.name}
                email={resumeData.personalInfo.email}
                phone={resumeData.personalInfo.phone}
                address={resumeData.personalInfo.address}
                website={resumeData.personalInfo.website}
              />
              
              {/* 技能 */}
              <Skills skills={resumeData.skills} />
              
              {/* 爱好 */}
              <Hobbies hobbies={resumeData.hobbies} />
            </div>
            
            {/* 右侧内容区 */}
            <div className="p-8 md:w-2/3 bg-white">
              {/* 个人简介 */}
              <div id="summary">
                <Summary summary={resumeData.summary} />
              </div>

              {/* 工作经历 */}
              <div id="work">
                <WorkExperience experiences={resumeData.workExperience} />
              </div>

              {/* 项目经历 */}
              <div id="projects">
                <ProjectExperience projects={resumeData.projectExperience} />
              </div>

              {/* 教育背景 */}
              <div id="education">
                <Education education={resumeData.education} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}