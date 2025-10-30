import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const GameBrainstorm: React.FC = () => {
  const [idea, setIdea] = useState("");
  const [ideas, setIdeas] = useState<string[]>([]);

  const tambahIde = () => {
    if (!idea.trim()) return;
    setIdeas((prev) => [...prev, idea]);
    setIdea("");
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-lg font-bold">Game Brainstorm</h2>
      <Input placeholder="Tulis ide daur ulang" value={idea} onChange={(e) => setIdea(e.target.value)} />
      <Button onClick={tambahIde}>Tambah Ide</Button>
      <ul className="list-disc pl-5 space-y-1">
        {ideas.map((i, idx) => (
          <li key={idx}>{i}</li>
        ))}
      </ul>
    </div>
  );
};

export default GameBrainstorm;
