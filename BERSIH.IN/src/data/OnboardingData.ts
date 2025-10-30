export interface OnboardingSlide {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const onboardingSlides: OnboardingSlide[] = [
  {
    id: 1,
    title: "Apa Itu BERSIH.IN?",
    description:
      "BERSIH.IN adalah aplikasi Bank Sampah Digital yang memudahkan kamu mengelola, menabung, dan menukar sampah jadi nilai ekonomi.\n\nDengan BERSIH.IN, kamu bisa bantu lingkungan lebih bersih sambil dapat cuan dari sampah yang kamu setor!",
    image: "/assets/images/onboarding/Onboarding # 1.png",
  },
  {
    id: 2,
    title: "Manfaat Menggunakan Aplikasi",
    description:
      "• Tukar sampah jadi saldo digital atau poin.\n• Kurangi sampah & bantu bumi lebih hijau.\n• Semua transaksi tercatat otomatis & transparan.\n• Kelola semuanya praktis lewat ponsel kamu.",
    image: "/assets/images/onboarding/Onboarding # 2.png",
  },
  {
    id: 3,
    title: "Kenali Fitur & Cara Kerja",
    description:
      "• Setor Sampah: Pilih jenis, jadwal, dan lokasi penjemputan.\n• Saldo & Poin: Dapatkan saldo digital tiap setor.\n• Riwayat Transaksi: Pantau semua aktivitas.\n• Reward & Referral: Ajak teman, dapat bonus.\n\n📍Langkah cepat:\n1️⃣ Pilih menu 'Setor Sampah'\n2️⃣ Pilih kategori & jumlah\n3️⃣ Tentukan lokasi\n4️⃣ Petugas datang → verifikasi → saldo masuk",
    image: "/assets/images/onboarding/Onboarding # 3.png",
  },
  {
    id: 4,
    title: "Mulai Sekarang!",
    description:
      "Setiap tindakan kecil bisa membawa perubahan besar.\n\nBersama BERSIH.IN, mari kita wujudkan lingkungan yang lebih bersih, hijau, dan berkelanjutan.",
    image: "/assets/images/onboarding/Onboarding # 4.png",
  },
];
