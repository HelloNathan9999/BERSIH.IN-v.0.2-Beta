import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RankingList from "./RankingList";
import { Button } from "@/components/ui/button";
import { Trophy } from "lucide-react";

type FilterType = "Nasional" | "Provinsi" | "Kota" | "Komunitas";

const RankingFlow = () => {
  const [filter, setFilter] = useState<FilterType>("Nasional");

  const categories: FilterType[] = ["Nasional", "Provinsi", "Kota", "Komunitas"];

  return (
    <div className="min-h-screen bg-background p-4 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Trophy className="text-yellow-500" /> Ranking {filter}
        </h1>
        <div className="flex gap-2 flex-wrap justify-end">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={filter === cat ? "default" : "outline"}
              onClick={() => setFilter(cat)}
              className={filter === cat ? "bg-green-600 text-white" : ""}
            >
              {cat}
            </Button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.3 }}
        >
          <RankingList />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default RankingFlow;
