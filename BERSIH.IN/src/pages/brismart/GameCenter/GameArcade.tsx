import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const GameArcade: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold">Game Arcade</h2>
      <p>Selamat datang di Game Arcade! Pilih game edukatif:</p>
      <div className="space-y-2">
        <Button onClick={() => navigate("/gamecenter/lempar-sampah")}>Game Lempar Sampah</Button>
        <Button onClick={() => navigate("/gamecenter/detektif-sampah")}>Game Detektif Sampah</Button>
        <Button onClick={() => navigate("/gamecenter/brainstorm")}>Game Brainstorm</Button>
        <Button onClick={() => navigate("/gamecenter/boss-manager")}>Game Boss Manager</Button>
      </div>
    </div>
  );
};

export default GameArcade;
