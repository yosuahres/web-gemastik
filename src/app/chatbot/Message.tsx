import React from "react";

interface MessageProps {
  message: {
    text: string;
    sender: "user" | "bot";
  };
}

const Message: React.FC<MessageProps> = ({ message }) => {
  const isUser = message.sender === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} w-full`}>
      <div
        className={`max-w-[80%] p-4 rounded-xl mb-4 ${
          isUser ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
        }`}
      >
        {message.text}
      </div>
    </div>
  );
};

export default Message;
