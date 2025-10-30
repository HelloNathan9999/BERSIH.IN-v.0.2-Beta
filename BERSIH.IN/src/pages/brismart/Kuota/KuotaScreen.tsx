import { useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function KuotaScreen() {
  const navigate = useNavigate();
  const [nomor, setNomor] = useState("");
  const [nominal, setNominal] = useState("");

  const handleSubmit = () => {
    if (!nomor || !nominal) {
      alert("Lengkapi nomor dan nominal dulu, bro!");
      return;
    }
    alert(`Top-up kuota ${nominal} ke nomor ${nomor} berhasil 🚀`);
  };

  return (
    <AppLayout>
      <div className="p-4">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-bold text-green-700">Top-Up Kuota</h1>
        </div>

        {/* Card Utama */}
        <Card>
          <CardHeader>
            <CardTitle>Isi Data Pembelian</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <label className="text-sm font-medium">Nomor HP</label>
              <Input
                placeholder="08xxxxxxxxxx"
                value={nomor}
                onChange={(e) => setNomor(e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm font-medium">Nominal Kuota (MB/GB)</label>
              <Input
                placeholder="Contoh: 5 GB"
                value={nominal}
                onChange={(e) => setNominal(e.target.value)}
              />
            </div>

            <Button className="w-full mt-2" onClick={handleSubmit}>
              Beli Sekarang
            </Button>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
