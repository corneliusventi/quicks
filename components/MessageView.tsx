"use client";

import { BASE_API } from "@/config";
import deleteRequest from "@/libs/deleteRequest";
import fetcher from "@/libs/fetcher";
import postRequest from "@/libs/postRequest";
import putRequest from "@/libs/putRequest";
import { useEffect, useState } from "react";
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
  const [editMessage, setEditMessage] = useState<Message>();
  const [removeMessage, setRemoveMessage] = useState<Message>();

  const {
    data: messages,
    isLoading,
    mutate,
  } = useSWRImmutable<Message[]>(
    chat ? `${BASE_API}/chats/${chat.id}/messages` : null,
    fetcher
  );
  const { trigger: triggerCreateMessage } = useSWRMutation<Message>(
    `${BASE_API}/messages`,
    postRequest
  );

  const { trigger: triggerUpdateMessage } = useSWRMutation<Message>(
    () => `${BASE_API}/messages/${editMessage?.id}`,
    putRequest
  );

  const { trigger: triggerDeleteMessage } = useSWRMutation<Message>(
    () => `${BASE_API}/messages/${removeMessage?.id}`,
    deleteRequest
  );

  const addToMessages = (messages: Message[], newMessage: Message) => {
    return [...messages, newMessage];
  };

  const updateMessages = (messages: Message[], updatedMessage: Message) => {
    let newMessages = [...messages];
    const index = newMessages.findIndex(
      (message) => message.id === updatedMessage.id
    );

    if (index !== -1) {
      newMessages[index] = updatedMessage;
    }
    return newMessages;
  };

  const deleteFromMessages = (messages: Message[], deletedMessage: Message) => {
    return messages.filter((message) => message.id !== deletedMessage.id);
  };

  const edit = (message: Message) => {
    setEditMessage(message);
  };

  const remove = (message: Message) => {
    setRemoveMessage(message);
  };

  const send = (text: string) => {
    const newMessage: Message = {
      id: uuidv4(),
      chatId: chat.id,
      userId: "3a2658ff-65ab-469f-9c10-61702fe9998d",
      from: "Cornelius Venti",
      text,
      time: new Date().toISOString(),
      me: true,
      read: false,
    };

    mutate(
      async (messages) => {
        const message = await triggerCreateMessage(newMessage);
        return messages && message ? addToMessages(messages, message) : [];
      },
      {
        optimisticData: (messages) => {
          return messages ? addToMessages(messages, newMessage) : [];
        },
        revalidate: false,
      }
    );
  };

  const update = (text: string, message: Message) => {
    const updatedMessage: Message = {
      ...message,
      text,
    };

    mutate(
      async (messages) => {
        const message = await triggerUpdateMessage(updatedMessage);
        return messages && message ? updateMessages(messages, message) : [];
      },
      {
        optimisticData: (messages) =>
          messages && message ? updateMessages(messages, updatedMessage) : [],
        revalidate: false,
      }
    );

    setEditMessage(undefined);
  };

  useEffect(() => {
    if (removeMessage) {
      mutate(
        async (messages) => {
          await triggerDeleteMessage();
          return messages ? deleteFromMessages(messages, removeMessage) : [];
        },
        {
          optimisticData: (messages) => {
            return messages ? deleteFromMessages(messages, removeMessage) : [];
          },
          revalidate: false,
        }
      );

      setRemoveMessage(undefined);
    }
  }, [removeMessage, setRemoveMessage, mutate]);

  return (
    <div className="flex h-full flex-col">
      <MessageBar chat={chat} back={unselectChat} close={close} />
      {isLoading && <Loading message="Loading Messages" />}
      {messages && (
        <>
          {chat.support ? (
            <SupportMessageList
              messages={messages}
              edit={edit}
              remove={remove}
            />
          ) : (
            <MessageList messages={messages} edit={edit} remove={remove} />
          )}
          <MessageBox editMessage={editMessage} send={send} update={update} />
        </>
      )}
    </div>
  );
}
