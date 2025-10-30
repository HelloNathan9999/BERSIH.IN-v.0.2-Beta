import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-3">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{title}</h2>
      {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
      <div className="h-[2px] w-12 bg-green-500 mt-1 rounded"></div>
    </div>
  );
};
