import React from "react";
import { Button } from "@/components/ui/button";

const PostDetail = () => {
  const post = {
    title: "Cara Daur Ulang Sampah Plastik di Rumah",
    author: "Admin Komunitas",
    date: "24 Okt 2025",
    content: `
      Mendaur ulang sampah plastik bisa dimulai dari langkah kecil di rumah.
      Pisahkan sampah berdasarkan jenisnya, bersihkan, dan ubah menjadi produk kreatif
      seperti pot tanaman, tempat alat tulis, atau bahkan bahan kerajinan.
    `,
  };

  return (
    <div className="p-6 space-y-3">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="text-sm text-muted-foreground">
        {post.author} • {post.date}
      </p>
      <p className="text-base leading-relaxed whitespace-pre-line">{post.content}</p>
      <Button variant="outline" className="mt-4">Kembali</Button>
    </div>
  );
};

export default PostDetail;
