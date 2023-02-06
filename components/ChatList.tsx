import ChatItem, { Chat } from "./ChatItem";

type ChatListProps = {
  chats: Chat[];
  selectChat: (id: number) => void;
};

export default function ChatList({ chats, selectChat }: ChatListProps) {
  return (
    <div className="divide-y divide-gray-1">
      {chats.map((chat, index) => (
        <ChatItem
          chat={chat}
          key={chat.id}
          onClick={() => selectChat(chat.id)}
        />
      ))}
    </div>
  );
}
