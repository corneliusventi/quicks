"use client";

import fetcher from "@/libs/fetcher";
import { useState } from "react";
import useSWR from "swr";
import { Chat } from "./ChatItem";
import ChatList from "./ChatList";
import Loading from "./Loading";
import MessageBar from "./MessageBar";
import MessageBox from "./MessageBox";
import { Message } from "./MessageItem";
import MessageList from "./MessageList";
import SearchBox from "./SearchBox";
import SupportMessageList from "./SupportMessageList";

type QuickInboxTabProps = {
  close: () => void;
};

const BASE_API = "https://my-json-server.typicode.com/corneliusventi/quicks";

export default function QuickInboxTab({ close }: QuickInboxTabProps) {
  const [chat, setChat] = useState<Chat>();

  const { data: chats, isLoading: isLoadingChats } = useSWR<Chat[]>(
    `${BASE_API}/chats`,
    fetcher
  );

  const { data: messages, isLoading: isLoadingMessages } = useSWR<Message[]>(
    chat ? `${BASE_API}/chats/${chat.id}/messages` : null,
    fetcher
  );

  const selectChat = (id: string) => {
    if (chats) {
      const chat = chats.find((chat) => chat.id === id);
      setChat(chat);
    }
  };

  return (
    <>
      {chat ? (
        <div className="flex h-full flex-col">
          <MessageBar
            chat={chat}
            back={() => setChat(undefined)}
            close={close}
          />
          {isLoadingMessages && <Loading message="Loading Messages" />}
          {messages && (
            <>
              {chat.support ? (
                <SupportMessageList messages={messages} />
              ) : (
                <MessageList messages={messages} />
              )}
            </>
          )}
          <MessageBox />
        </div>
      ) : (
        <div className="flex h-full flex-col px-8 py-4">
          <SearchBox />
          {isLoadingChats && <Loading message="Loading Chats" />}
          {chats && <ChatList chats={chats} selectChat={selectChat} />}
        </div>
      )}
    </>
  );
}
