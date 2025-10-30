import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const GameLemparSampah: React.FC = () => {
  const [score, setScore] = useState(0);

  const lemparSampah = () => {
    setScore((prev) => prev + Math.floor(Math.random() * 10 + 1)); // dummy scoring
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-lg font-bold">Game Lempar Sampah</h2>
      <p>Score: {score}</p>
      <Button onClick={lemparSampah}>Lempar Sampah!</Button>
    </div>
  );
};

export default GameLemparSampah;
