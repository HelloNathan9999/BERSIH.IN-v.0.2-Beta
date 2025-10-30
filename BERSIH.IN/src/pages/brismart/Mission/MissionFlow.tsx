import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface Step {
  id: number;
  title: string;
  content: string;
}

const steps: Step[] = [
  { id: 1, title: "Mulai Misi", content: "Ikuti petunjuk awal misi." },
  { id: 2, title: "Lakukan Tugas", content: "Kerjakan langkah-langkah misi." },
  { id: 3, title: "Selesaikan Misi", content: "Laporkan hasil misi." },
];

const MisiFlow: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-lg font-bold">{steps[currentStep].title}</h2>
      <p>{steps[currentStep].content}</p>

      <Progress value={((currentStep + 1) / steps.length) * 100} />

      <div className="flex gap-2">
        <Button onClick={prevStep} disabled={currentStep === 0}>Kembali</Button>
        <Button onClick={nextStep} disabled={currentStep === steps.length - 1}>Lanjut</Button>
      </div>
    </div>
  );
};

export default MisiFlow;
