"use client";

import { BASE_API } from "@/config";
import fetcher from "@/libs/fetcher";
import { ChangeEventHandler, useMemo, useState } from "react";
import useSWR from "swr";
import { Chat } from "./ChatItem";
import ChatList from "./ChatList";
import Loading from "./Loading";
import SearchBox from "./SearchBox";

type ChatProps = {
  selectChat: (chat: Chat) => void;
};

export default function ChatView({ selectChat }: ChatProps) {
  const [search, setSearch] = useState("");

  const { data: chats, isLoading } = useSWR<Chat[]>(
    `${BASE_API}/chats`,
    fetcher
  );

  const filteredChats = useMemo(() => {
    return search
      ? chats?.filter((chat) => chat.name.toLowerCase().includes(search))
      : chats;
  }, [chats, search]);

  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="flex h-full flex-col px-8 py-4">
      <SearchBox search={search} onChange={handleSearchChange} />
      {isLoading && <Loading message="Loading Chats" />}
      {filteredChats && (
        <ChatList chats={filteredChats} selectChat={selectChat} />
      )}
    </div>
  );
}
