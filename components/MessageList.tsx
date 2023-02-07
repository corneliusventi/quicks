"use client";

import { format, isToday, parse } from "date-fns";
import _ from "lodash";
import Image from "next/image";
import { useMemo } from "react";
import MessageItem, { Message } from "./MessageItem";

type MessageListProps = {
  messages: Message[];
};

export type Color = {
  light: string;
  dark: string;
  userId?: string;
};

export default function MessageList({ messages }: MessageListProps) {
  const colors = useMemo(() => {
    let colors: Color[] = [
      { light: "bg-yellow-2", dark: "text-yellow-1" },
      { light: "bg-green-2", dark: "text-green-1" },
      { light: "bg-blue-2", dark: "text-blue-1" },
    ];

    for (const message of messages) {
      if (!message.me) {
        let color = colors.find((color) => color.userId === message.userId);

        if (!color) {
          const colorIndex = colors.findIndex((color) => !color.userId);

          colors[colorIndex] = {
            ...colors[colorIndex],
            userId: message.userId,
          };
        }
      }
    }

    return colors;
  }, [messages]);

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
    return colors.find((color) => color.userId === message.userId);
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
    <>
      <div className="mr-2 flex-grow space-y-4 overflow-y-auto bg-scroll pl-6 pr-3 scrollbar-thin scrollbar-track-white scrollbar-thumb-gray-4 scrollbar-thumb-rounded-full">
        {Object.entries(groupedMessages).map(([date, messages]) => (
          <div className="space-y-4" key={date}>
            <div className="flex items-center space-x-8">
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
          </div>
        ))}

        {unreadMessages.length >= 1 && (
          <div className="space-y-4">
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
          </div>
        )}
      </div>
      {unreadMessages.length >= 1 && (
        <div className="flex justify-center">
          <button className="w-36 rounded-md bg-blue-2 py-1 px-3 text-left font-bold text-blue-1">
            New Message
          </button>
        </div>
      )}
    </>
  );
}
