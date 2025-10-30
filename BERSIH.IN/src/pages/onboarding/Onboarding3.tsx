import React from "react";
import { useNavigate } from "react-router-dom";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  children?: React.ReactNode;
};

function Button({ className = "", children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`px-4 py-2 bg-green-600 text-white rounded ${className}`}
    >
      {children}
    </button>
  );
}

export default function Onboarding3() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen justify-between items-center px-6 py-10 text-center">
      <img src="/assets/images/onboarding/slide3.png" alt="Onboarding 3" className="w-64 mx-auto" />

      <div>
        <h1 className="text-2xl font-bold mb-3">Bangun Komunitas Hijau</h1>
        <p className="text-gray-500 text-sm mb-6">
          Gabung dengan komunitas peduli lingkungan, ikuti misi, dan dapatkan reward setiap kontribusi kecilmu.
        </p>
        <Button onClick={() => navigate("/onboarding/4")} className="w-full">
          Lanjut
        </Button>
      </div>
    </div>
  );
}
