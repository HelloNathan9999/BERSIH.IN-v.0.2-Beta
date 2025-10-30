import { Button } from "@/components/ui";

interface ConfirmationScreenProps {
  meterId: string;
  billId: string;
  onDone: () => void;
}

export default function ConfirmationScreen({ meterId, billId, onDone }: ConfirmationScreenProps) {
  return (
    <div className="p-4 text-center">
      <h1 className="text-xl font-bold mb-4">Pembayaran PLN Berhasil!</h1>
      <p>ID Meter / No. Pelanggan: {meterId}</p>
      <p>Tagihan: {billId}</p>
      <Button className="mt-4" onClick={onDone}>
        Selesai
      </Button>
    </div>
  );
}
