"use client";

import { format, isToday, parse } from "date-fns";
import _ from "lodash";
import Image from "next/image";
import { useMemo, useState } from "react";
import { Message } from "./ChatItem";
import MessageItem from "./MessageItem";

type MessageListProps = {
  messages: Message[];
};

export type Color = {
  light: string;
  dark: string;
  userId?: number;
};

export default function MessageList({ messages }: MessageListProps) {
  const [colors, setColors] = useState<Color[]>([
    { light: "bg-green-2", dark: "text-green-1" },
    { light: "bg-yellow-2", dark: "text-yellow-1" },
  ]);

  const readMessages = useMemo(() => {
    return messages.filter((message) => message.read);
  }, [messages]);

  const groupedMessages = useMemo(() => {
    return _.groupBy(readMessages, (message) => {
      return format(new Date(message.time), "dd/MM/yyyy");
    });
  }, [messages]);

  const unreadMessages = useMemo(() => {
    return messages.filter((message) => !message.read);
  }, [messages]);

  const findColor = (message: Message) => {
    if (!message.me) {
      let color = colors.find((color) => color.userId === message.userId);

      if (!color) {
        const colorIndex = colors.findIndex((color) => !color.userId);

        if (colorIndex !== -1) {
          setColors((colors) => {
            colors[colorIndex] = {
              ...colors[colorIndex],
              userId: message.userId,
            };

            return colors;
          });

          return colors[colorIndex];
        }
      } else {
        return color;
      }
    }
  };

  const formatDate = (date: string) => {
    const parsedDate = parse(date, "dd/MM/yyyy", new Date());

    if (isToday(parsedDate)) {
      return `Today ${format(parsedDate, "MMMM dd, yyyy")}`;
    } else {
      return format(parsedDate, "MMMM dd, yyyy");
    }
  };

  return (
    <div className="mr-2 flex-grow space-y-4 overflow-y-auto bg-scroll pl-6 pr-3 scrollbar-thin scrollbar-track-white scrollbar-thumb-gray-4 scrollbar-thumb-rounded-full">
      {Object.entries(groupedMessages).map(([date, messages]) => (
        <>
          <div className="flex items-center space-x-8" key={date}>
            <div className="h-px flex-grow bg-gray-2"></div>
            <div className="font-bold text-gray-2">{formatDate(date)}</div>
            <div className="h-px flex-grow bg-gray-2"></div>
          </div>
          {messages.map((message) => (
            <MessageItem
              message={message}
              key={message.id}
              color={findColor(message)}
            />
          ))}
        </>
      ))}

      {unreadMessages.length >= 1 && (
        <>
          <div className="flex items-center space-x-2">
            <div className="h-px flex-grow bg-red-1"></div>
            <div className="font-bold text-red-1">New Message</div>
            <Image
              height={10}
              width={10}
              src="/arrow-down.svg"
              alt="arrow down icon"
            />
            <div className="h-px flex-grow bg-red-1"></div>
          </div>
          {unreadMessages.map((message) => (
            <MessageItem
              message={message}
              key={message.id}
              color={findColor(message)}
            />
          ))}
        </>
      )}
    </div>
  );
}
