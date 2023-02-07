"use client";

import { BASE_API } from "@/config";
import fetcher from "@/libs/fetcher";
import sendRequest from "@/libs/sendRequest";
import { useRef } from "react";
import useSWRImmutable from "swr/immutable";
import useSWRMutation from "swr/mutation";
import { v4 as uuidv4 } from "uuid";
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
  const {
    data: messages,
    isLoading,
    mutate,
  } = useSWRImmutable<Message[]>(
    chat ? `${BASE_API}/chats/${chat.id}/messages` : null,
    fetcher
  );
  const { trigger } = useSWRMutation<Message>(
    `${BASE_API}/messages`,
    sendRequest
  );

  const addNewMessage = async (newMessage: Message) => {
    const message = await trigger(newMessage);

    if (messages) {
      return message ? [...messages, message] : [...messages];
    } else {
      return message ? [message] : [];
    }
  };

  const sendMessage = (text: string) => {
    const newMessage = {
      id: uuidv4(),
      chatId: chat.id,
      userId: "3a2658ff-65ab-469f-9c10-61702fe9998d",
      from: "Cornelius Venti",
      text,
      time: new Date().toISOString(),
      me: true,
      read: false,
    };

    if (messages) {
      mutate(addNewMessage(newMessage), {
        optimisticData: () => [...messages, newMessage],
        revalidate: false,
      });
    }
  };

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
          <MessageBox send={sendMessage} />
        </>
      )}
    </div>
  );
}
