import { format } from "date-fns";
import Image from "next/image";
import { useState } from "react";
import { Message } from "./ChatItem";
import { Color } from "./MessageList";

type MessageItemProps = {
  message: Message;
  color?: Color;
};
export default function MessageItem({ message, color }: MessageItemProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const time = format(new Date(message.time), "HH:mm");

  const toggleMenu = () => {
    setIsMenuOpen((isMoreOpen) => !isMoreOpen);
  };

  return (
    <div
      className={`flex flex-col space-y-1 ${
        message.me ? "items-end" : "items-start"
      }`}
    >
      <div
        className={`text-sm font-bold ${color ? color.dark : "text-purple-1"}`}
      >
        {message.from}
      </div>
      <div
        className={`flex items-start space-x-2 ${
          message.me ? "flex-row-reverse space-x-reverse" : "flex-row"
        }`}
      >
        <div
          className={`w-fit max-w-lg space-y-1 rounded-md px-2 py-1 font-light ${
            color ? color.light : "bg-purple-2"
          }`}
        >
          <div className="text-sm">{message.text}</div>
          <div className="text-xs">{time}</div>
        </div>
        <div className="relative">
          <button onClick={toggleMenu}>
            <Image height={16} width={16} src="/more.svg" alt="more icon" />
          </button>
          {isMenuOpen && (
            <div className="absolute flex w-32 flex-col items-start divide-y divide-gray-4 rounded-md border border-gray-4 bg-white">
              <button className="w-full py-2 px-4 text-left text-blue-1">
                Edit
              </button>
              <button className="w-full py-2 px-4 text-left text-red-1">
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}