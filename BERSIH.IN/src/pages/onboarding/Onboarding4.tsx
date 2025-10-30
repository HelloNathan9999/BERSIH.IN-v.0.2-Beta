import React from "react";
import { useNavigate } from "react-router-dom";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
};

function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className={`px-4 py-2 bg-blue-600 text-white rounded ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default function Onboarding4() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen justify-between items-center px-6 py-10 text-center">
      <img src="/assets/images/onboarding/slide4.png" alt="Onboarding 4" className="w-64 mx-auto" />

      <div>
        <h1 className="text-2xl font-bold mb-3">BERSIH.IN, Gerakan Nyata untuk Bumi</h1>
        <p className="text-gray-500 text-sm mb-6">
          Mulai langkah kecilmu hari ini — bersama BERSIH.IN, semua bisa jadi bagian dari perubahan besar.
        </p>
        <Button onClick={() => navigate("/login")} className="w-full">
          Mulai Sekarang
        </Button>
      </div>
    </div>
  );
}
