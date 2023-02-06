import React from "react";
import { Chat } from "./ChatItem";
import GroupChatIcon from "./GroupChatIcon";
import PersonalChatIcon from "./PersonalChatIcon";

type ChatIconProps = {
  chat: Chat;
};

export default function ChatIcon({ chat }: ChatIconProps) {
  return chat.group ? <GroupChatIcon /> : <PersonalChatIcon name={chat.name} />;
}
