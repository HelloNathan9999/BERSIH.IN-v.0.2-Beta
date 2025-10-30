import React, { useState } from "react";
import JenisSampahSelector from "./JenisSampahSelector";
import HasilPerhitungan from "./HasilPerhitungan";
import { Button } from "@/components/ui/button";

interface Sampah {
  jenis: string;
  berat: number; // kg
}

const KalkulatorScreen: React.FC = () => {
  const [sampah, setSampah] = useState<Sampah>({ jenis: "", berat: 0 });
  const [hasil, setHasil] = useState<number | null>(null);

  const hitungNilai = () => {
    // Dummy calculation: harga/kg tergantung jenis sampah
    const hargaPerKg: Record<string, number> = {
      "Plastik": 2000,
      "Kertas": 1000,
      "Logam": 5000,
    };
    setHasil(sampah.berat * (hargaPerKg[sampah.jenis] || 0));
  };

  return (
    <div className="p-4 space-y-4">
      <JenisSampahSelector sampah={sampah} setSampah={setSampah} />
      <Button onClick={hitungNilai}>Hitung Nilai Sampah</Button>
      {hasil !== null && <HasilPerhitungan hasil={hasil} />}
    </div>
  );
};

export default KalkulatorScreen;
