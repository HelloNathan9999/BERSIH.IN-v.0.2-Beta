import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const dummyFAQ = [
  { question: "Bagaimana cara mendaftar akun?", answer: "Klik tombol Daftar di halaman login dan isi form pendaftaran." },
  { question: "Apakah data saya aman?", answer: "Semua data tersimpan di server aman dan terenkripsi." },
  { question: "Bagaimana cara menukar green coin?", answer: "Gunakan fitur Voucher & Reward di menu utama untuk menukar coin." },
];

const FAQScreen: React.FC = () => {
  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold">FAQ – Pertanyaan Umum</h2>
      <Accordion type="single" collapsible>
        {dummyFAQ.map((faq, idx) => (
          <AccordionItem key={idx} value={`faq-${idx}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQScreen;
