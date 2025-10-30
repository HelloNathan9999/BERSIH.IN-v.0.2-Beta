import React, { useState } from "react";
import EdukasiFeed from "./EdukasiFeed";
import PostDetail from "./PostDetail";
import LiveStream from "./LiveStream";
import { Button } from "@/components/ui/button";

type Screen = "feed" | "detail" | "live";

const EdukasiFlow = () => {
  const [screen, setScreen] = useState<Screen>("feed");
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

  const handleNavigate = (target: Screen, postId?: number) => {
    if (postId) setSelectedPostId(postId);
    setScreen(target);
  };

  return (
    <div className="min-h-screen bg-background">
      {screen === "feed" && (
        <div>
          <EdukasiFeed />
          <div className="p-4 flex justify-center">
            <Button onClick={() => handleNavigate("live")} className="bg-green-600 text-white">
              🎥 Tonton Live Sekarang
            </Button>
          </div>
        </div>
      )}

      {screen === "detail" && (
        <div>
          <PostDetail />
          <div className="p-4 flex justify-center">
            <Button variant="outline" onClick={() => handleNavigate("feed")}>
              ⬅️ Kembali ke Feed
            </Button>
          </div>
        </div>
      )}

      {screen === "live" && (
        <div>
          <Liv
