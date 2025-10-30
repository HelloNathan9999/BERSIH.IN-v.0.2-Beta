import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent, Button } from "@/components/ui";

export default function InvoicePopup() {
  const location = useLocation();
  const navigate = useNavigate();
  const { bpjsNumber, tagihan, method } = location.state || {};

  const handleClose = () => navigate("/brismart");

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardContent className="space-y-3 text-center">
          <h2 className="text-xl font-bold text-green-600">Pembayaran Berhasil!</h2>
          <p>Nomor BPJS: {bpjsNumber}</p>
          <p>Nama: {tagihan?.nama}</p>
          <p>Jumlah: Rp {tagihan?.jumlah.toLocaleString()}</p>
          <p>Metode: {method}</p>
          <Button className="w-full mt-4" onClick={handleClose}>
            Tutup
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
