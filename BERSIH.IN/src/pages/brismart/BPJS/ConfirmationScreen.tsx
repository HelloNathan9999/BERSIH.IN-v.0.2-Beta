import { useLocation, useNavigate } from "react-router-dom";
import { Button, Card, CardContent } from "@/components/ui";

export default function ConfirmationScreen() {
  const location = useLocation();
  const navigate = useNavigate();
  const { bpjsNumber, tagihan, method } = location.state || {};

  const handleConfirm = () => {
    navigate("/brismart/bpjs/invoice", {
      state: { bpjsNumber, tagihan, method },
    });
  };

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-lg font-semibold text-center">Konfirmasi Pembayaran</h2>
      <Card>
        <CardContent className="space-y-2">
          <p>Nomor BPJS: {bpjsNumber}</p>
          <p>Nama: {tagihan?.nama}</p>
          <p>Periode: {tagihan?.periode}</p>
          <p>Total: Rp {tagihan?.jumlah.toLocaleString()}</p>
          <p>Metode: {method}</p>
        </CardContent>
      </Card>
      <Button className="w-full" onClick={handleConfirm}>
        Bayar Sekarang
      </Button>
    </div>
  );
}
