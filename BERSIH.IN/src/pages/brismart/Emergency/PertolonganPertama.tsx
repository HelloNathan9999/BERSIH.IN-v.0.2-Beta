import React from "react";

const dummyTips = [
  "Hentikan pendarahan dengan menekan luka menggunakan kain bersih.",
  "Jika pingsan, posisikan kepala lebih rendah dari jantung.",
  "Segera panggil bantuan darurat jika korban tidak sadar.",
];

const PertolonganPertama: React.FC = () => {
  return (
    <div className="p-4 space-y-2">
      <h2 className="text-lg font-bold">Panduan Pertolongan Pertama</h2>
      <ul className="list-disc pl-5 space-y-1">
        {dummyTips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </div>
  );
};

export default PertolonganPertama;
