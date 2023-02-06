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
          time: "January 1, 2021 19:00",
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
          time: "02/06/2021 10:45",
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
          time: "01/06/2021 12:19",
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
          time: "01/06/2021 12:19",
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
