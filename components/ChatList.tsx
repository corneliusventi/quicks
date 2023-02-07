import ChatItem, { Chat } from "./ChatItem";

type ChatListProps = {
  chats: Chat[];
  selectChat: (chat: Chat) => void;
};

export default function ChatList({ chats, selectChat }: ChatListProps) {
  return (
    <div className="divide-y divide-gray-1 overflow-y-auto pr-3 scrollbar-thin scrollbar-track-white scrollbar-thumb-gray-4 scrollbar-thumb-rounded-full">
      {chats.map((chat) => (
        <ChatItem chat={chat} key={chat.id} onClick={() => selectChat(chat)} />
      ))}
    </div>
  );
}
