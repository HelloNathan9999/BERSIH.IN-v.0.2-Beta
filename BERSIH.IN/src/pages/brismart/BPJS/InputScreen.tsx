import { useState } from "react";
import { Button, Input } from "@/components/ui";
import { useNavigate } from "react-router-dom";

export default function InputScreen() {
  const [bpjsNumber, setBpjsNumber] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    if (bpjsNumber.length < 11) return alert("Nomor BPJS tidak valid");
    navigate("/brismart/bpjs/package", { state: { bpjsNumber } });
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-semibold text-center">Bayar Tagihan BPJS</h1>
      <Input
        type="number"
        placeholder="Masukkan Nomor BPJS"
        value={bpjsNumber}
        onChange={(e) => setBpjsNumber(e.target.value)}
      />
      <Button className="w-full" onClick={handleNext}>
        Cek Tagihan
      </Button>
    </div>
  );
}
