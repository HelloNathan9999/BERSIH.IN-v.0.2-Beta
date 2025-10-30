import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { RewardGrid } from "./RewardGrid";

export default function CheckInPopup() {
  const [checkedIn, setCheckedIn] = useState(false);
  const [dayProgress, setDayProgress] = useState(0);

  useEffect(() => {
    const savedProgress = localStorage.getItem("checkinProgress");
    const today = new Date().toDateString();
    const lastCheckin = localStorage.getItem("lastCheckin");

    if (savedProgress) setDayProgress(Number(savedProgress));
    if (lastCheckin === today) setCheckedIn(true);
  }, []);

  const handleCheckIn = () => {
    if (checkedIn) return;

    const today = new Date().toDateString();
    const newProgress = dayProgress >= 30 ? 1 : dayProgress + 1;

    setDayProgress(newProgress);
    setCheckedIn(true);
    localStorage.setItem("checkinProgress", newProgress.toString());
    localStorage.setItem("lastCheckin", today);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white p-6 rounded-2xl shadow-xl w-[90%] max-w-sm"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
        >
          <h2 className="text-xl font-semibold text-center mb-2">
            Check-In Harian 🌿
          </h2>
          <p className="text-center text-gray-600 mb-4">
            Hari ke-{dayProgress} dari 30 hari 🎯
          </p>

          <RewardGrid progress={dayProgress} />

          <div className="mt-6 text-center">
            <Button
              onClick={handleCheckIn}
              disabled={checkedIn}
              className={`w-full ${
                checkedIn ? "bg-gray-300 cursor-not-allowed" : "bg-green-600"
              }`}
            >
              {checkedIn ? "Sudah Check-In Hari Ini" : "Check-In Sekarang"}
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
