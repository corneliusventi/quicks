import ChatItem, { Chat } from "./ChatItem";

type ChatListProps = {
  chats: Chat[];
};

export default function ChatList({ chats }: ChatListProps) {
  return (
    <div className="divide-y divide-gray-1">
      {chats.map((chat, index) => (
        <ChatItem chat={chat} key={chat.id} />
      ))}
    </div>
  );
}
