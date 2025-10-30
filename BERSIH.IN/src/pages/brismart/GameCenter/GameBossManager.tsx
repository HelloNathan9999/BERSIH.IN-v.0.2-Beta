import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const GameBossManager: React.FC = () => {
  const [bossHealth, setBossHealth] = useState(100);

  const serangBoss = () => {
    setBossHealth((prev) => Math.max(prev - Math.floor(Math.random() * 20 + 5), 0));
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-lg font-bold">Game Boss Manager</h2>
      <p>Health Boss: {bossHealth}</p>
      <Button onClick={serangBoss} disabled={bossHealth === 0}>
        Serang Boss!
      </Button>
      {bossHealth === 0 && <p className="text-green-600 font-bold">Boss berhasil dikalahkan!</p>}
    </div>
  );
};

export default GameBossManager;
