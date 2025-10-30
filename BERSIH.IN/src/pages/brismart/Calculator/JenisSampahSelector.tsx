import React from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Props {
  sampah: { jenis: string; berat: number };
  setSampah: React.Dispatch<React.SetStateAction<{ jenis: string; berat: number }>>;
}

const JenisSampahSelector: React.FC<Props> = ({ sampah, setSampah }) => {
  return (
    <div className="space-y-2">
      <Select value={sampah.jenis} onValueChange={(val) => setSampah({ ...sampah, jenis: val })}>
        <SelectTrigger>
          <SelectValue placeholder="Pilih Jenis Sampah" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Plastik">Plastik</SelectItem>
          <SelectItem value="Kertas">Kertas</SelectItem>
          <SelectItem value="Logam">Logam</SelectItem>
        </SelectContent>
      </Select>

      <Input
        type="number"
        placeholder="Berat Sampah (kg)"
        value={sampah.berat}
        onChange={(e) => setSampah({ ...sampah, berat: parseFloat(e.target.value) })}
      />
    </div>
  );
};

export default JenisSampahSelector;
