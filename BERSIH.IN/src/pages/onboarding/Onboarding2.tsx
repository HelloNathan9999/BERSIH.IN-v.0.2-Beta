import { useNavigate } from "react-router-dom";
import React from "react";

function Button({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded " +
        (className ? className : "")
      }
    >
      {children}
    </button>
  );
}

export default function Onboarding2() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen justify-between items-center px-6 py-10 text-center">
      <img src="/assets/images/onboarding/slide2.png" alt="Onboarding 2" className="w-64 mx-auto" />

      <div>
        <h1 className="text-2xl font-bold mb-3">Transaksi Digital Ramah Lingkungan</h1>
        <p className="text-gray-500 text-sm mb-6">
          Bayar tagihan, top-up, hingga belanja kebutuhan pokok langsung dari sampah yang kamu daur ulang.
        </p>
        <Button onClick={() => navigate("/onboarding/3")} className="w-full">
          Lanjut
        </Button>
      </div>
    </div>
  );
}
