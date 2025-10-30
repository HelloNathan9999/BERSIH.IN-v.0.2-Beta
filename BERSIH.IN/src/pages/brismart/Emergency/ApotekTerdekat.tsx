import React from "react";

const dummyApotek = [
  { id: 1, name: "Apotek Sehat Sentosa", distance: "0.8 km" },
  { id: 2, name: "Apotek Harapan", distance: "1.5 km" },
];

const ApotekTerdekat: React.FC = () => {
  return (
    <div className="p-4 space-y-2">
      <h2 className="text-lg font-bold">Apotek Terdekat</h2>
      {dummyApotek.map((apotek) => (
        <div key={apotek.id} className="p-2 border rounded">
          <p>{apotek.name}</p>
          <p className="text-sm text-gray-500">{apotek.distance}</p>
        </div>
      ))}
    </div>
  );
};

export default ApotekTerdekat;
