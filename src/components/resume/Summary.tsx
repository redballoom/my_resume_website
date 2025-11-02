import React from 'react';

interface SummaryProps {
  summary: string;
}

const Summary: React.FC<SummaryProps> = ({ summary }) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-blue-800 border-b-2 border-gray-200 pb-2">个人简介</h2>
      <p className="text-gray-700 leading-relaxed">
        {summary}
      </p>
    </section>
  );
};

export default Summary;