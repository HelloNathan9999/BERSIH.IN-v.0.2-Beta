import React, { useState } from "react";
import OnboardingSlide from "@/components/onboarding/OnboardingSlide";
import OnboardingNavigation from "@/components/onboarding/OnboardingNavigation";
import SplashScreen from "@/components/onboarding/SplashScreen";
import onboardingData from "@/data/onboardingData";
import { motion, AnimatePresence } from "framer-motion";

const OnboardingScreen: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSplashFinish = () => setShowSplash(false);

  const handleNext = () => {
    if (currentSlide < onboardingData.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    } else {
      // TODO: navigasi ke halaman login / register
      console.log("Onboarding selesai → pindah ke login/register");
    }
  };

  const handleSkip = () => {
    // langsung loncat ke halaman login
    console.log("Skip onboarding → langsung ke login");
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-white">
      <AnimatePresence>
        {showSplash ? (
          <SplashScreen key="splash" onFinish={handleSplashFinish} />
        ) : (
          <motion.div
            key="onboarding"
            className="flex flex-col items-center justify-between h-full py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex-1 flex items-center justify-center">
              <OnboardingSlide
                image={onboardingData[currentSlide].image}
                title={onboardingData[currentSlide].title}
                description={onboardingData[currentSlide].description}
              />
            </div>

            <OnboardingNavigation
              currentSlide={currentSlide}
              totalSlides={onboardingData.length}
              onNext={handleNext}
              onSkip={handleSkip}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OnboardingScreen;
