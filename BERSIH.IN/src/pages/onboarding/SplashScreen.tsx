import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// @ts-ignore: allow importing image assets without type declarations
import logo from "/assets/images/logo-bersihin.png";

export default function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/onboarding/1");
    }, 2500); // tampil 2.5 detik
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white">
      <img src={logo} alt="BERSIH.IN" className="w-40 animate-pulse" />
      <p className="mt-4 text-gray-600 font-medium">BERSIH.IN</p>
    </div>
  );
}
