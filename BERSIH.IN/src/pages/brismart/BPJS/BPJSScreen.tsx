import { useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BPJSScreen() {
  const navigate = useNavigate();
  const [idPeserta, setIdPeserta] = useState("");
  const [nominal, setNominal] = useState("");

  const handleSubmit = () => {
    if (!idPeserta || !nominal) {
      alert("Isi ID peserta dan nominal tagihan BPJS dulu, bro!");
      return;
    }
    alert(`Tagihan BPJS sebesar ${nominal} untuk ID ${idPeserta} berhasil dibayar 🏥`);
  };

  return (
    <AppLayout>
      <div className="p-4">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-bold text-green-700">Bayar BPJS</h1>
        </div>

        {/* Card Utama */}
        <Card>
          <CardHeader>
            <CardTitle>Masukkan Detail Tagihan</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <label className="text-sm font-medium">ID Peserta BPJS</label>
              <Input
                placeholder="Masukkan ID Peserta"
                value={idPeserta}
                onChange={(e) => setIdPeserta(e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm font-medium">Nominal Tagihan (Rp)</label>
              <Input
                placeholder="Contoh: 150.000"
                value={nominal}
                onChange={(e) => setNominal(e.target.value)}
              />
            </div>

            <Button className="w-full mt-2" onClick={handleSubmit}>
              Bayar Sekarang
            </Button>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
