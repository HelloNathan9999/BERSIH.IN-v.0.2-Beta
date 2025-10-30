import { useState } from "react";
import InputScreen from "./InputScreen";
import PackageScreen from "./PackageScreen";
import PaymentScreen from "./PaymentScreen";
import ConfirmationScreen from "./ConfirmationScreen";
import InvoicePopup from "./InvoicePopup";

type Step = "input" | "package" | "payment" | "confirmation";

export default function KuotaFlow() {
  const [step, setStep] = useState<Step>("input");
  const [phone, setPhone] = useState("");
  const [packageId, setPackageId] = useState("");
  const [showInvoice, setShowInvoice] = useState(false);

  const handleNextFromInput = (p: string) => {
    setPhone(p);
    setStep("package");
  };

  const handlePackageSelect = (pkg: string) => {
    setPackageId(pkg);
    setStep("payment");
  };

  const handlePayment = () => {
    setStep("confirmation");
    setShowInvoice(true);
  };

  const handleDone = () => {
    setStep("input");
    setPhone("");
    setPackageId("");
    setShowInvoice(false);
  };

  return (
    <div className="min-h-screen p-4 bg-gray-50">
      {step === "input" && <InputScreen onNext={handleNextFromInput} />}
      {step === "package" && <PackageScreen phone={phone} onSelect={handlePackageSelect} />}
      {step === "payment" && <PaymentScreen phone={phone} packageId={packageId} onPay={handlePayment} />}
      {step === "confirmation" && <ConfirmationScreen phone={phone} packageId={packageId} onDone={handleDone} />}

      <InvoicePopup
        isOpen={showInvoice}
        onClose={() => setShowInvoice(false)}
        phone={phone}
        packageId={packageId}
      />
    </div>
  );
}
