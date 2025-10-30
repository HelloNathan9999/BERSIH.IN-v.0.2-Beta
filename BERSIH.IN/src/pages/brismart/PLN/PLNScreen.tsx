import { useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PLNScreen() {
  const navigate = useNavigate();
  const [idPelanggan, setIdPelanggan] = useState("");
  const [nominal, setNominal] = useState("");

  const handleSubmit = () => {
    if (!idPelanggan || !nominal) {
      alert("Masukkan ID Pelanggan dan nominal token dulu, bro!");
      return;
    }
    alert(`Token PLN sebesar ${nominal} untuk ID ${idPelanggan} berhasil dibeli ⚡`);
  };

  return (
    <AppLayout>
      <div className="p-4">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-bold text-green-700">Token PLN</h1>
        </div>

        {/* Card Utama */}
        <Card>
          <CardHeader>
            <CardTitle>Beli Token Listrik</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <label className="text-sm font-medium">ID Pelanggan</label>
              <Input
                placeholder="Masukkan ID Pelanggan PLN"
                value={idPelanggan}
                onChange={(e) => setIdPelanggan(e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm font-medium">Nominal Token (Rp)</label>
              <Input
                placeholder="Contoh: 50.000"
                value={nominal}
                onChange={(e) => setNominal(e.target.value)}
              />
            </div>

            <Button className="w-full mt-2" onClick={handleSubmit}>
              Beli Token
            </Button>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
