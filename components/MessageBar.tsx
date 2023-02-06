import Image from "next/image";
import { Chat } from "./ChatItem";

type MessageBarProps = {
  chat: Chat;
};

export default function MessageBar({ chat }: MessageBarProps) {
  return (
    <div className="mb-4 flex items-center space-x-4 border-b border-gray-4 py-4 pr-5 pl-6">
      <Image
        height={16}
        width={16}
        src="/arrow-back.svg"
        alt="arow back icon"
      />
      <div className="flex h-10 flex-grow flex-col justify-center">
        <div className="font-bold text-blue-1">{chat.name}</div>
        {chat.group && (
          <div className="text-xs text-gray-1">
            {chat.participants} Participants
          </div>
        )}
      </div>
      <Image height={14} width={14} src="/close.svg" alt="close icon" />
    </div>
  );
}
