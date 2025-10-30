import React from "react";

const dummyAmbulance = [
  { id: 1, name: "RS Sumber Sehat", distance: "1.2 km" },
  { id: 2, name: "RS Harapan Kita", distance: "2.5 km" },
];

const AmbulanceLocator: React.FC = () => {
  return (
    <div className="p-4 space-y-2">
      <h2 className="text-lg font-bold">Ambulans Terdekat</h2>
      {dummyAmbulance.map((ambulance) => (
        <div key={ambulance.id} className="p-2 border rounded">
          <p>{ambulance.name}</p>
          <p className="text-sm text-gray-500">{ambulance.distance}</p>
        </div>
      ))}
    </div>
  );
};

export default AmbulanceLocator;
