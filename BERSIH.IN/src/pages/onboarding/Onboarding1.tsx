import React from "react";
import { useNavigate } from "react-router-dom";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
};

function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button {...props} className={`px-4 py-2 bg-green-600 text-white rounded ${className}`}>
      {children}
    </button>
  );
}

export default function Onboarding1() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen justify-between items-center px-6 py-10 text-center">
      <img src="/assets/images/onboarding/slide1.png" alt="Onboarding 1" className="w-64 mx-auto" />

      <div>
        <h1 className="text-2xl font-bold mb-3">Ubah Sampah Jadi Manfaat</h1>
        <p className="text-gray-500 text-sm mb-6">
          Kumpulkan sampah, tukarkan dengan green coin, dan wujudkan lingkungan yang lebih bersih serta bernilai ekonomi.
        </p>
        <Button onClick={() => navigate("/onboarding/2")} className="w-full">
          Lanjut
        </Button>
      </div>
    </div>
  );
}
