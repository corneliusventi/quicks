import Image from "next/image";
import { useEffect, useState } from "react";
import { Message } from "./ChatItem";
import MessageItem from "./MessageItem";
import { Color } from "./MessageList";

type SupportMessageListProps = {
  messages: Message[];
};

export default function SupportMessageList({
  messages,
}: SupportMessageListProps) {
  const [loading, setLoading] = useState(true);
  const [timer, setTimer] = useState<NodeJS.Timeout>();

  const color: Color = { light: "bg-gray-7", dark: "text-blue-1" };

  useEffect(() => {
    clearTimeout(timer);
    setTimer(
      setTimeout(() => {
        setLoading(false);
      }, 10000)
    );

    return clearTimeout(timer);
  }, [setTimer, setLoading]);

  return (
    <>
      <div className="mr-2 flex-grow space-y-4 overflow-y-auto bg-scroll pl-6 pr-3 scrollbar-thin scrollbar-track-white scrollbar-thumb-gray-4 scrollbar-thumb-rounded-full">
        {messages.map((message) => (
          <MessageItem
            message={message}
            key={message.id}
            color={!message.me ? color : undefined}
          />
        ))}
      </div>
      {loading && (
        <div className="mx-4 flex flex-row items-center space-x-2 rounded-md bg-blue-2 p-2">
          <Image
            className="animate-spin"
            height={35}
            width={35}
            src="/loading-blue.svg"
            alt="loading icon"
          />
          <div className="text-sm font-bold text-gray-2">
            Please wait while we connect you with one of our team...
          </div>
        </div>
      )}
    </>
  );
}
