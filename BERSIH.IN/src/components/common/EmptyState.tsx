import React from "react";

interface EmptyStateProps {
  title: string;
  description?: string;
  image?: string;
  action?: React.ReactNode;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  image,
  action,
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-6">
      {image && <img src={image} alt={title} className="w-32 h-32 mb-3 opacity-80" />}
      <h3 className="text-base font-medium text-gray-700 dark:text-gray-300">{title}</h3>
      {description && <p className="text-sm text-gray-500 mt-1">{description}</p>}
      {action && <div className="mt-3">{action}</div>}
    </div>
  );
};
