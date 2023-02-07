"use client";

import { ChangeEventHandler, useState } from "react";

type MessageBoxProps = {
  send: (text: string) => Promise<void>;
  disabled: boolean;
};

export default function MessageBox({ send, disabled }: MessageBoxProps) {
  const [text, setText] = useState("");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setText(event.target.value);
  };

  const sendMessage = async () => {
    await send(text);
    setText("");
  };

  return (
    <div className="flex space-x-3 p-4">
      <input
        value={text}
        className="flex-grow rounded-md border border-gray-3 px-4 py-1.5 placeholder:text-gray-1 disabled:text-gray-3"
        type="text"
        placeholder="Type a new message"
        disabled={disabled}
        onChange={handleChange}
      />
      <button
        className="rounded-md bg-blue-1 py-1.5 px-5 text-white disabled:bg-gray-3"
        disabled={disabled}
        onClick={sendMessage}
      >
        Send
      </button>
    </div>
  );
}
