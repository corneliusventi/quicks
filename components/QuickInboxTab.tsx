"use client";

import { useState } from "react";
import { Chat } from "./ChatItem";
import ChatView from "./ChatView";
import MessageView from "./MessageView";

type QuickInboxTabProps = {
  unselectQuick: () => void;
};

export default function QuickInboxTab({ unselectQuick }: QuickInboxTabProps) {
  const [chat, setChat] = useState<Chat>();

  const selectChat = (chat: Chat) => setChat(chat);
  const unselectChat = () => setChat(undefined);

  return (
    <>
      {chat ? (
        <MessageView
          chat={chat}
          unselectChat={unselectChat}
          close={unselectQuick}
        />
      ) : (
        <ChatView selectChat={selectChat} />
      )}
    </>
  );
}
