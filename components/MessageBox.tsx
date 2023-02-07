"use client";

import {
  ChangeEventHandler,
  KeyboardEventHandler,
  useEffect,
  useState,
} from "react";
import { Message } from "./MessageItem";

type MessageBoxProps = {
  editMessage?: Message;
  send: (text: string) => void;
  update: (text: string, message: Message) => void;
};

export default function MessageBox({
  editMessage,
  send,
  update,
}: MessageBoxProps) {
  const [text, setText] = useState("");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setText(event.target.value);
  };

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === "Enter") {
      submit();
    }
  };

  const submit = () => {
    if (text) {
      if (editMessage) {
        update(text, editMessage);
      } else {
        send(text);
      }
      setText("");
    }
  };

  useEffect(() => {
    if (editMessage) {
      setText(editMessage.text);
    }
  }, [editMessage, setText]);

  return (
    <div className="flex space-x-3 p-4">
      <input
        value={text}
        className="flex-grow rounded-md border border-gray-3 px-4 py-1.5 text-gray-1 placeholder:text-gray-1"
        type="text"
        placeholder="Type a new message"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button
        className="rounded-md bg-blue-1 py-1.5 px-5 text-white"
        onClick={submit}
      >
        {editMessage ? "Update" : "Send"}
      </button>
    </div>
  );
}
