import { Button } from "@/components/ui";

interface ConfirmationScreenProps {
  phone: string;
  packageId: string;
  onDone: () => void;
}

export default function ConfirmationScreen({ phone, packageId, onDone }: ConfirmationScreenProps) {
  return (
    <div className="p-4 text-center">
      <h1 className="text-xl font-bold mb-4">Transaksi Pulsa Berhasil!</h1>
      <p>Nomor: {phone}</p>
      <p>Paket: {packageId}</p>
      <Button className="mt-4" onClick={onDone}>
        Selesai
      </Button>
    </div>
  );
}
