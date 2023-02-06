"use client";

import { useState } from "react";
import MessageBar from "./MessageBar";
import { Chat } from "./ChatItem";
import ChatList from "./ChatList";
import Loading from "./Loading";
import SearchBox from "./SearchBox";
import MessageList from "./MessageList";
import MessageBox from "./MessageBox";
import SupportMessageList from "./SupportMessageList";

export default function QuickInboxTab() {
  const [loading, setLoading] = useState(false);

  const [chats, setChats] = useState<Chat[]>([
    {
      id: 1,
      name: "109220-Naturalization",
      group: true,
      support: false,
      participants: 3,
      messages: [
        {
          id: 1,
          userId: 1,
          from: "Cameron Phillips",
          text: "Please check this out!",
          time: "2021-01-01T12:00:00.000Z",
          read: false,
          me: false,
        },
      ],
    },
    {
      id: 2,
      name: "Jeannette Moraima Guaman Chamba (Hutto I-589) [Hutto Follow Up - Brief Service]",
      group: true,
      support: false,
      participants: 3,
      messages: [
        {
          id: 1,
          userId: 2,
          from: "Ellen",
          text: "Hey, please read.",
          time: "2021-02-06T03:45:00.000Z",
          me: false,
          read: true,
        },
      ],
    },
    {
      id: 3,
      name: "8405-Diana SALAZAR MUNGUIA",
      group: true,
      support: false,
      participants: 3,
      messages: [
        {
          id: 1,
          userId: 1,
          from: "Cameron Phillips",
          text: "I understand your initial concerns and thats very valid, Elizabeth. But you are",
          time: "2021-01-06T05:19:00.000Z",
          me: false,
          read: true,
        },
      ],
    },
    {
      id: 4,
      name: "FastVisa Support",
      group: false,
      support: true,
      messages: [
        {
          id: 1,
          userId: 3,
          from: "FastVisa Support",
          text: "Hey there! Welcome to your inbox! Contact us for more information and help about anything! We'll send you a response as soon as possible.",
          time: "2021-01-06T12:32:00.000Z",
          me: false,
          read: true,
        },
        {
          id: 2,
          userId: 5,
          from: "You",
          text: "Hi, I need help with something can you help me ?",
          time: "2021-01-06T12:32:00.000Z",
          me: true,
          read: true,
        },
      ],
    },
    {
      id: 5,
      name: "I-589-AMARKHIL, Obaidullah [Affirmative Filing with ZHN]",
      group: true,
      support: false,
      participants: 3,
      messages: [
        {
          id: 1,
          userId: 4,
          from: "Mary Hilda",
          text: "Just Fill me in for his updates yea?",
          time: "2021-06-08T12:32:00.000Z",
          me: false,
          read: true,
        },
        {
          id: 2,
          userId: 5,
          from: "You",
          text: "No worries. It will be completed ASAP. I've asked him yesterday.",
          time: "2021-06-08T12:32:00.000Z",
          me: true,
          read: true,
        },
        {
          id: 3,
          userId: 4,
          from: "Mary Hilda",
          text: "Hello Obaidullah, I will be your case advisor for case#029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks.",
          time: "2021-06-09T12:32:00.000Z",
          me: false,
          read: true,
        },
        {
          id: 4,
          userId: 5,
          from: "You",
          text: "Please contact Mary for questions regarding the case bcs she will be managing your forms from now on! Thanks Mary.",
          time: "2021-06-09T12:32:00.000Z",
          me: true,
          read: true,
        },
        {
          id: 5,
          userId: 4,
          from: "Mary Hilda",
          text: "Sure thing, Claren",
          time: "2021-06-09T12:32:00.000Z",
          me: false,
          read: true,
        },
        {
          id: 6,
          userId: 6,
          from: "Obaidullah Amarkhil",
          text: "Morning. I'll try to do them. Thanks",
          time: "2021-06-09T12:32:00.000Z",
          me: false,
          read: false,
        },
      ],
    },
  ]);

  const [chat, setChat] = useState<Chat>();

  const selectChat = (id: number) => {
    const chat = chats.find((chat) => chat.id === id);
    setChat(chat);
  };

  return (
    <>
      {chat ? (
        <div className="flex h-full flex-col overflow-auto">
          <MessageBar chat={chat} />
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
          {loading && <Loading message="Loading Chats" />}
          {!loading && <ChatList chats={chats} selectChat={selectChat} />}
        </div>
      )}
    </>
  );
}
