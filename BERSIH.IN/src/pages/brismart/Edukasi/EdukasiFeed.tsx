import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Post {
  id: number;
  title: string;
  author: string;
  date: string;
  excerpt: string;
}

const dummyPosts: Post[] = [
  {
    id: 1,
    title: "Cara Daur Ulang Sampah Plastik di Rumah",
    author: "Admin Komunitas",
    date: "24 Okt 2025",
    excerpt: "Pelajari langkah mudah mendaur ulang sampah plastik menjadi barang berguna...",
  },
  {
    id: 2,
    title: "Live Edukasi: Bank Sampah Digital",
    author: "GreenTalks",
    date: "22 Okt 2025",
    excerpt: "Ikuti diskusi seru tentang digitalisasi sistem bank sampah...",
  },
];

const EdukasiFeed = () => {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Edukasi & Komunitas</h1>
      {dummyPosts.map((post) => (
        <Card key={post.id} className="cursor-pointer hover:shadow-md transition-all">
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p className="text-sm text-muted-foreground mb-2">
              {post.author} • {post.date}
            </p>
            <p className="text-sm mb-3">{post.excerpt}</p>
            <Button variant="outline" size="sm">Lihat Detail</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default EdukasiFeed;
