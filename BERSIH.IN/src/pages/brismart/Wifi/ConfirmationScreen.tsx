import { Button } from "@/components/ui";

interface ConfirmationScreenProps {
  account: string;
  billId: string;
  onDone: () => void;
}

export default function ConfirmationScreen({ account, billId, onDone }: ConfirmationScreenProps) {
  return (
    <div className="p-4 text-center">
      <h1 className="text-xl font-bold mb-4">Pembayaran Berhasil!</h1>
      <p>ID Pelanggan: {account}</p>
      <p>Tagihan: {billId}</p>
      <Button className="mt-4" onClick={onDone}>
        Selesai
      </Button>
    </div>
  );
}
