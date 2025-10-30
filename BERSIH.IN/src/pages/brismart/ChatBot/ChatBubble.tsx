import React from "react";

interface Props {
  text: string;
  sender: "user" | "bot";
}

const ChatBubble: React.FC<Props> = ({ text, sender }) => {
  const isUser = sender === "user";
  return (
    <div className={`max-w-[70%] p-2 rounded-lg ${isUser ? "bg-blue-500 text-white self-end" : "bg-gray-200 text-black self-start"}`}>
      {text}
    </div>
  );
};

export default ChatBubble;
