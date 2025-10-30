import React from "react";
import { motion } from "framer-motion";

interface RewardGridProps {
  progress?: number;
}

const rewards = Array.from({ length: 30 }, (_, i) => ({
  day: i + 1,
  reward: i === 29 ? "🎁" : `${i + 1}🌱`,
}));

export function RewardGrid({ progress = 0 }: RewardGridProps) {
  return (
    <div className="grid grid-cols-5 gap-2 justify-items-center">
      {rewards.map((item, idx) => (
        <motion.div
          key={item.day}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.02 }}
          className={`flex flex-col items-center justify-center p-2 rounded-xl shadow-sm w-12 h-14 text-sm ${
            idx + 1 <= progress ? "bg-green-500 text-white" : "bg-green-50"
          }`}
        >
          <span className="text-[10px] font-medium">Day {item.day}</span>
          <span>{item.reward}</span>
        </motion.div>
      ))}
    </div>
  );
}
