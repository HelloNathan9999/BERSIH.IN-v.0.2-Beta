import { useState } from "react";
import InputScreen from "./InputScreen";
import PackageScreen from "./PackageScreen";
import PaymentScreen from "./PaymentScreen";
import ConfirmationScreen from "./ConfirmationScreen";
import InvoicePopup from "./InvoicePopup";

type Step = "input" | "package" | "payment" | "confirmation";

export default function WifiFlow() {
  const [step, setStep] = useState<Step>("input");
  const [account, setAccount] = useState("");
  const [billId, setBillId] = useState("");
  const [showInvoice, setShowInvoice] = useState(false);

  const handleNextFromInput = (acc: string) => {
    setAccount(acc);
    setStep("package");
  };

  const handlePackageSelect = (bill: string) => {
    setBillId(bill);
    setStep("payment");
  };

  const handlePayment = () => {
    setStep("confirmation");
    setShowInvoice(true);
  };

  const handleDone = () => {
    setStep("input");
    setAccount("");
    setBillId("");
    setShowInvoice(false);
  };

  return (
    <div className="min-h-screen p-4 bg-gray-50">
      {step === "input" && <InputScreen onNext={handleNextFromInput} />}
      {step === "package" && <PackageScreen account={account} onSelect={handlePackageSelect} />}
      {step === "payment" && <PaymentScreen account={account} billId={billId} onPay={handlePayment} />}
      {step === "confirmation" && <ConfirmationScreen account={account} billId={billId} onDone={handleDone} />}

      <InvoicePopup
        isOpen={showInvoice}
        onClose={() => setShowInvoice(false)}
        account={account}
        billId={billId}
      />
    </div>
  );
}
