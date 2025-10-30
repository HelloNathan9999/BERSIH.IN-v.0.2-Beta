import React, { useState } from "react";
import ChatBubble from "./ChatBubble";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

const ChatBotScreen: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessage: Message = { id: Date.now(), text: input, sender: "user" };
    setMessages([...messages, newMessage]);

    // Dummy bot reply
    setTimeout(() => {
      setMessages((prev) => [...prev, { id: Date.now() + 1, text: `Bot: Balasan untuk "${input}"`, sender: "bot" }]);
    }, 500);

    setInput("");
  };

  return (
    <div className="p-4 flex flex-col h-full space-y-4">
      <div className="flex-1 overflow-y-auto space-y-2">
        {messages.map((msg) => (
          <ChatBubble key={msg.id} text={msg.text} sender={msg.sender} />
        ))}
      </div>

      <div className="flex gap-2">
        <Input
          placeholder="Tulis pesan..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <Button onClick={sendMessage}>Kirim</Button>
      </div>
    </div>
  );
};

export default ChatBotScreen;
