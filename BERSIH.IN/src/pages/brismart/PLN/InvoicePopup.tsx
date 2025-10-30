import { Dialog, Button } from "@/components/ui";

interface InvoicePopupProps {
  isOpen: boolean;
  onClose: () => void;
  meterId: string;
  billId: string;
}

export default function InvoicePopup({ isOpen, onClose, meterId, billId }: InvoicePopupProps) {
  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">Invoice PLN</h2>
        <p>ID Meter / No. Pelanggan: {meterId}</p>
        <p>Tagihan: {billId}</p>
        <Button className="mt-4" onClick={onClose}>Tutup</Button>
      </div>
    </Dialog>
  );
}
