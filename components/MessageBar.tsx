import Image from "next/image";
import { Chat } from "./ChatItem";

type MessageBarProps = {
  chat: Chat;
  back: () => void;
  close: () => void;
};

export default function MessageBar({ chat, back, close }: MessageBarProps) {
  return (
    <div className="mb-4 flex items-center space-x-4 border-b border-gray-4 py-4 pr-5 pl-6">
      <button onClick={back}>
        <Image
          height={16}
          width={16}
          src="/arrow-back.svg"
          alt="arow back icon"
        />
      </button>
      <div className="flex h-10 flex-grow flex-col justify-center">
        <div className="font-bold text-blue-1">{chat.name}</div>
        {chat.group && (
          <div className="text-xs text-gray-1">
            {chat.participants} Participants
          </div>
        )}
      </div>
      <button onClick={close}>
        <Image height={14} width={14} src="/close.svg" alt="close icon" />
      </button>
    </div>
  );
}
