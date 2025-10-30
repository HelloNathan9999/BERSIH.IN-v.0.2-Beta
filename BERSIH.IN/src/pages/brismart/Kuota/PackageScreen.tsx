import { useState } from "react";
import { Button } from "@/components/ui";

interface PackageScreenProps {
  phone: string;
  onSelect: (packageId: string) => void;
}

const packages = [
  { id: "p1", name: "Kuota 2GB", price: 20000 },
  { id: "p2", name: "Kuota 5GB", price: 45000 },
  { id: "p3", name: "Kuota 10GB", price: 85000 },
];

export default function PackageScreen({ phone, onSelect }: PackageScreenProps) {
  const [selected, setSelected] = useState("");

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Pilih Paket untuk {phone}</h1>
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
