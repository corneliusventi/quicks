import { format } from "date-fns";
import Image from "next/image";
import { Message } from "./ChatItem";
import { Color } from "./MessageList";

type MessageItemProps = {
  message: Message;
  color?: Color;
};
export default function MessageItem({ message, color }: MessageItemProps) {
  const time = format(new Date(message.time), "HH:mm");

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
        <button>
          <Image height={16} width={16} src="/more.svg" alt="more icon" />
        </button>
      </div>
    </div>
  );
}
