import { Dialog, Button } from "@/components/ui";

interface InvoicePopupProps {
  isOpen: boolean;
  onClose: () => void;
  account: string;
  billId: string;
}

export default function InvoicePopup({ isOpen, onClose, account, billId }: InvoicePopupProps) {
  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">Invoice WiFi</h2>
        <p>ID Pelanggan: {account}</p>
        <p>Tagihan: {billId}</p>
        <Button className="mt-4" onClick={onClose}>Tutup</Button>
      </div>
    </Dialog>
  );
}
