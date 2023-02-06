"use client";

import { useState } from "react";
import { Chat } from "./ChatItem";
import ChatList from "./ChatList";
import Loading from "./Loading";
import SearchBox from "./SearchBox";

export default function QuickInboxTab() {
  const [loading, setLoading] = useState(false);

  const [chats, setChats] = useState<Chat[]>([
    {
      id: 1,
      name: "109220-Naturalization",
      group: true,
      messages: [
        {
          id: 1,
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
      messages: [
        {
          id: 1,
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
      messages: [
        {
          id: 1,
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
      messages: [
        {
          id: 1,
          from: "FastVisa Support",
          text: "Hey there! Welcome to your inbox.",
          time: "2021-01-06T05:19:00.000Z",
          me: false,
          read: true,
        },
      ],
    },
  ]);

  return (
    <div className="flex h-full flex-col px-8 py-4">
      <SearchBox />
      {loading && <Loading message="Loading Chats" />}
      {!loading && <ChatList chats={chats} />}
    </div>
  );
}
