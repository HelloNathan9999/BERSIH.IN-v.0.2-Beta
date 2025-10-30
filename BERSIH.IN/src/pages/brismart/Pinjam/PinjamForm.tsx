import { useState } from "react";
import { Input, Button, Select, SelectItem } from "@/components/ui";
import { useNavigate } from "react-router-dom";

export default function PinjamForm() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [pin, setPin] = useState("");
  const [amount, setAmount] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = () => {
    if (!userId || !pin || !amount || !duration) return alert("Isi semua data!");
    navigate("/brismart/pinjam/confirmation", {
      state: { userId, amount, duration },
    });
  };

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-lg font-semibold text-center">Formulir Pinjaman</h2>
      <Input
        placeholder="Masukkan Nomor ID User"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Masukkan PIN (6 digit)"
        value={pin}
        maxLength={6}
        onChange={(e) => setPin(e.target.value)}
      />
      <Select onValueChange={setAmount}>
        <SelectItem value="200000">Rp 200.000</SelectItem>
        <SelectItem value="500000">Rp 500.000</SelectItem>
        <SelectItem value="1000000">Rp 1.000.000</SelectItem>
      </Select>

      <Select onValueChange={setDuration}>
        <SelectItem value="7">7 Hari</SelectItem>
        <SelectItem value="14">14 Hari</SelectItem>
        <SelectItem value="30">30 Hari</SelectItem>
      </Select>

      <Button className="w-full" onClick={handleSubmit}>
        Lanjutkan
      </Button>
    </div>
  );
}
