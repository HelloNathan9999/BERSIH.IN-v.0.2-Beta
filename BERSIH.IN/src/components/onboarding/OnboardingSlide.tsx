import React from "react";

interface OnboardingSlideProps {
  image: string;
  title: string;
  description: string;
}

const OnboardingSlide: React.FC<OnboardingSlideProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-6 space-y-4">
      <img src={image} alt={title} className="w-72 h-72 object-contain" />
      <h2 className="text-2xl font-bold text-green-700">{title}</h2>
      <p className="text-gray-600 text-base max-w-md">{description}</p>
    </div>
  );
};

export default OnboardingSlide;
