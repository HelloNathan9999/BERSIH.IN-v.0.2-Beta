/// <reference types="react" />
import React, { useState } from "react";
import { Button } from "@/components/ui";

interface PackageScreenProps {
  phone: string;
  onSelect: (packageId: string) => void;
}

const packages = [
  { id: "p1", name: "Pulsa 5.000", price: 6500 },
  { id: "p2", name: "Pulsa 10.000", price: 11500 },
  {id: "p3", name: "Pulsa 20.000", price: 21500 },
  { id: "p4", name: "Pulsa 25.000", price: 27000 },
  { id: "p5", name: "Pulsa 50.000", price: 51500 },
  { id: "p6", name: "Pulsa 100.000", price: 101500 },
];

export default function PackageScreen({ phone, onSelect }: PackageScreenProps) {
  const [selected, setSelected] = useState("");

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Pilih Pulsa untuk {phone}</h1>
      <div className="flex flex-col gap-2">
        {packages.map((p) => (
          <Button
            key={p.id}
            variant={selected === p.id ? "default" : "outline"}
            onClick={() => setSelected(p.id)}
          >
            {p.name} - Rp{p.price.toLocaleString()}
          </Button>
        ))}
      </div>
      <Button
        className="mt-4"
        onClick={() => selected && onSelect(selected)}
        disabled={!selected}
      >
        Lanjut ke Pembayaran
      </Button>
    </div>
  );
}
