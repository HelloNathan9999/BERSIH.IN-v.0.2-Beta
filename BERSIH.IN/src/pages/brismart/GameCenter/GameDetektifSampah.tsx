import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const dummyItems = ["Plastik", "Kertas", "Logam", "Sampah Organik"];

const GameDetektifSampah: React.FC = () => {
  const [found, setFound] = useState<string[]>([]);

  const temukanItem = () => {
    const item = dummyItems[Math.floor(Math.random() * dummyItems.length)];
    setFound((prev) => [...prev, item]);
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-lg font-bold">Game Detektif Sampah</h2>
      <p>Item yang ditemukan: {found.join(", ") || "Belum ada"}</p>
      <Button onClick={temukanItem}>Temukan Sampah!</Button>
    </div>
  );
};

export default GameDetektifSampah;
