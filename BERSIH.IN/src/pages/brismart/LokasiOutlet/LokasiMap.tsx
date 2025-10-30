import React, { useState } from "react";
import { MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import FilterPanel from "./FilterPanel";
import BankSampahDetail from "./BankSampahDetail";
import { Button } from "@/components/ui/button";

interface BankSampah {
  id: number;
  nama: string;
  alamat: string;
  jarak: string;
  koordinat: string;
}

const dummyData: BankSampah[] = [
  {
    id: 1,
    nama: "Bank Sampah BERSIH.IN - Kota Bandung",
    alamat: "Jl. Merdeka No. 45, Bandung",
    jarak: "1.2 km",
    koordinat: "-6.914744, 107.609810",
  },
  {
    id: 2,
    nama: "Bank Sampah Hijau Berseri",
    alamat: "Jl. Sukajadi No. 78, Bandung",
    jarak: "2.3 km",
    koordinat: "-6.889000, 107.604000",
  },
];

const LokasiMap = () => {
  const [selected, setSelected] = useState<BankSampah | null>(null);

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Lokasi Bank Sampah</h1>
      <FilterPanel />

      <div className="grid gap-3">
        {dummyData.map((bank) => (
          <Card
            key={bank.id}
            className="cursor-pointer hover:shadow-md transition-all"
            onClick={() => setSelected(bank)}
          >
            <CardContent className="p-4 flex justify-between items-center">
              <div>
                <h2 className="font-semibold">{bank.nama}</h2>
                <p className="text-sm text-muted-foreground">{bank.alamat}</p>
                <p className="text-xs text-green-600">{bank.jarak}</p>
              </div>
              <MapPin className="text-green-600" />
            </CardContent>
          </Card>
        ))}
      </div>

      {selected && (
        <BankSampahDetail bank={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
};

export default LokasiMap;
