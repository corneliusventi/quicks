"use client";

import { ChangeEventHandler, KeyboardEventHandler, useState } from "react";

type MessageBoxProps = {
  send: (text: string) => Promise<void>;
};

export default function MessageBox({ send }: MessageBoxProps) {
  const [text, setText] = useState("");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setText(event.target.value);
  };

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  const sendMessage = () => {
    if (text) {
      send(text);
      setText("");
    }
  };

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
        onClick={sendMessage}
      >
        Send
      </button>
    </div>
  );
}
