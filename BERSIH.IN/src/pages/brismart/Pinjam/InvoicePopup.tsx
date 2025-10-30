import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent, Button } from "@/components/ui";

export default function InvoicePopup() {
  const navigate = useNavigate();
  const { userId, amount, duration } = useLocation().state || {};

  const handleClose = () => navigate("/brismart");

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardContent className="text-center space-y-3">
          <h2 className="text-xl font-bold text-green-600">Pengajuan Berhasil!</h2>
          <p>ID User: {userId}</p>
          <p>Jumlah: Rp {Number(amount).toLocaleString()}</p>
          <p>Tenor: {duration} Hari</p>
          <p>Saldo akan ditransfer dalam waktu 1x24 jam.</p>
          <Button className="w-full mt-3" onClick={handleClose}>
            Tutup
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
