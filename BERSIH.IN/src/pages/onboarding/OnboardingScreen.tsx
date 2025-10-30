import { useState, type ButtonHTMLAttributes } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { onboardingSlides } from "@/data/onboardingData";
import { useNavigate } from "react-router-dom";

/* Local Button component to replace missing external module */
function Button({
  children,
  className = "",
  variant,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: string; className?: string }) {
  const base =
    "inline-flex items-center justify-center rounded-md px-4 py-2 transition ";
  const variantClass =
    variant === "ghost"
      ? "bg-transparent hover:bg-white/10 text-white"
      : "bg-white text-[#7B8960]";
  return (
    <button className={`${base} ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
}

export default function OnboardingScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    if (currentIndex < onboardingSlides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigate("/login"); // arahkan ke halaman login setelah onboarding selesai
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const { title, description, image } = onboardingSlides[currentIndex];

  return (
    <div className="flex flex-col items-center justify-between h-screen bg-[#7B8960] text-white px-6 py-10 text-center relative">
      {/* Indicator Dots */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 flex gap-2">
        {onboardingSlides.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all ${
              i === currentIndex ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Gambar */}
      <div className="flex-1 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.img
            key={image}
            src={image}
            alt={title}
            className="max-h-[300px] object-contain"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
      </div>

      {/* Teks */}
      <motion.div
        key={title}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-10"
      >
        <h2 className="text-xl font-bold mb-3">{title}</h2>
        <p className="text-sm whitespace-pre-line leading-relaxed">
          {description}
        </p>
      </motion.div>

      {/* Tombol Navigasi */}
      <div className="flex justify-between items-center w-full">
        {currentIndex > 0 ? (
          <Button
            variant="ghost"
            onClick={prevSlide}
            className="text-white font-medium"
          >
            BACK
          </Button>
        ) : (
          <div />
        )}

        <Button
          onClick={nextSlide}
          className="bg-white text-[#7B8960] font-bold px-6"
        >
          {currentIndex === onboardingSlides.length - 1 ? "START" : "NEXT"}
        </Button>
      </div>
    </div>
  );
}
