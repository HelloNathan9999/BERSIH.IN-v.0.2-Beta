import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "ghost";
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  variant = "default",
  className = "",
  children,
  ...rest
}) => {
  const base = "px-4 py-2 rounded";
  const variantClass =
    variant === "ghost" ? "bg-transparent text-gray-700" : "bg-green-600 hover:bg-green-700 text-white";
  return (
    <button className={`${base} ${variantClass} ${className}`} {...rest}>
      {children}
    </button>
  );
};

interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onSkip: () => void;
}

const OnboardingNavigation: React.FC<NavigationProps> = ({
  currentSlide,
  totalSlides,
  onNext,
  onSkip,
}) => {
  return (
    <div className="flex flex-col items-center mt-6 space-y-4">
      {/* Dots indicator */}
      <div className="flex space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              currentSlide === index ? "bg-green-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Buttons */}
      <div className="flex justify-between w-full max-w-xs mt-4">
        <Button
          variant="ghost"
          className="text-gray-500"
          onClick={onSkip}
        >
          Skip
        </Button>

        <Button
          variant="default"
          className="bg-green-600 hover:bg-green-700 text-white"
          onClick={onNext}
        >
          {currentSlide === totalSlides - 1 ? "Mulai" : "Next"}
        </Button>
      </div>
    </div>
  );
};

export default OnboardingNavigation;
