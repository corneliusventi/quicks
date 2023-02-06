import { format } from "date-fns";
import Image from "next/image";
import ChatIcon from "./ChatIcon";
import GroupChatIcon from "./GroupChatIcon";
import PersonalChatIcon from "./PersonalChatIcon";

export type Message = {
  id: number;
  userId: number;
  from: string;
  text: string;
  time: string;
  me: boolean;
  read: boolean;
};

export type Chat = {
  id: number;
  name: string;
  group: boolean;
  support: boolean;
  messages: Message[];
  participants?: number;
};

type ChatItemProps = {
  chat: Chat;
  onClick: () => void;
};

export default function ChatItem({ chat, onClick }: ChatItemProps) {
  const lastMessage = chat.messages[chat.messages.length - 1];
  const time = format(new Date(lastMessage.time), "dd/MM/yyyy HH/mm");

  return (
    <div>
      <div className="flex space-x-4 pt-6 pb-8">
        <ChatIcon chat={chat} />
        <div className="w-full">
          <div className="flex items-start space-x-4">
            <div
              className="max-w-md cursor-pointer font-bold text-blue-1"
              onClick={onClick}
            >
              {chat.name}
            </div>
            <div className="min-w-fit text-sm text-gray-2">{time}</div>
          </div>
          <div>
            {chat.group && (
              <div className="text-sm font-bold text-gray-2">
                {lastMessage.me ? "You" : lastMessage.from}:
              </div>
            )}
            <div className="flex justify-between">
              <div className="max-w-md truncate text-sm text-gray-2">
                {lastMessage.text}
              </div>
              {!lastMessage.read && (
                <div className="h-[10px] w-[10px] rounded-full bg-red-1"></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
