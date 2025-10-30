import React from "react";
import { ServiceCard } from "./ServiceCard";

const services = [
  { id: 1, name: "Tagihan TV Kabel", icon: "📺" },
  { id: 2, name: "Asuransi", icon: "🛡️" },
  { id: 3, name: "Pajak Daerah", icon: "🏛️" },
];

export default function LainnyaHome() {
  return (
    <div className="p-4 space-y-3">
      <h1 className="text-xl font-semibold">Layanan Lainnya</h1>
      <div className="grid grid-cols-2 gap-3">
        {services.map((item) => (
          <ServiceCard key={item.id} service={item} />
        ))}
      </div>
    </div>
  );
}
