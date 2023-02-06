"use client";

import fetcher from "@/libs/fetcher";
import { useState } from "react";
import useSWR from "swr";
import { Chat } from "./ChatItem";
import ChatList from "./ChatList";
import Loading from "./Loading";
import MessageBar from "./MessageBar";
import MessageBox from "./MessageBox";
import MessageList from "./MessageList";
import SearchBox from "./SearchBox";
import SupportMessageList from "./SupportMessageList";

type QuickInboxTabProps = {
  close: () => void;
};

export default function QuickInboxTab({ close }: QuickInboxTabProps) {
  const {
    data: chats,
    error,
    isLoading,
  } = useSWR<Chat[]>("/api/chats", fetcher);

  const [chat, setChat] = useState<Chat>();

  const selectChat = (id: number) => {
    if (chats) {
      const chat = chats.find((chat) => chat.id === id);
      setChat(chat);
    }
  };

  return (
    <>
      {chat ? (
        <div className="flex h-full flex-col overflow-auto">
          <MessageBar
            chat={chat}
            back={() => setChat(undefined)}
            close={close}
          />
          {chat.support ? (
            <SupportMessageList messages={chat.messages} />
          ) : (
            <MessageList messages={chat.messages} />
          )}
          <MessageBox />
        </div>
      ) : (
        <div className="flex h-full flex-col px-8 py-4">
          <SearchBox />
          {isLoading && <Loading message="Loading Chats" />}
          {chats && <ChatList chats={chats} selectChat={selectChat} />}
        </div>
      )}
    </>
  );
}
