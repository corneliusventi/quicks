"use client";

import { BASE_API } from "@/config";
import fetcher from "@/libs/fetcher";
import useSWR from "swr";
import { Chat } from "./ChatItem";
import Loading from "./Loading";
import MessageBar from "./MessageBar";
import MessageBox from "./MessageBox";
import { Message } from "./MessageItem";
import MessageList from "./MessageList";
import SupportMessageList from "./SupportMessageList";

type MessageViewProps = {
  chat: Chat;
  unselectChat: () => void;
  close: () => void;
};

export default function MessageView({
  chat,
  unselectChat,
  close,
}: MessageViewProps) {
  const { data: messages, isLoading } = useSWR<Message[]>(
    chat ? `${BASE_API}/chats/${chat.id}/messages` : null,
    fetcher
  );

  return (
    <div className="flex h-full flex-col">
      <MessageBar chat={chat} back={unselectChat} close={close} />
      {isLoading && <Loading message="Loading Messages" />}
      {messages && (
        <>
          {chat.support ? (
            <SupportMessageList messages={messages} />
          ) : (
            <MessageList messages={messages} />
          )}
          <MessageBox />
        </>
      )}
    </div>
  );
}
