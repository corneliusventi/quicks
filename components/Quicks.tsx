"use client";

import Image from "next/image";
import { useState } from "react";
import { Quick } from "./Quick";

type QuicksProps = {
  quick: Quick;
  selectQuick: (quick: Quick) => void;
  unselectQuick: () => void;
};

export default function Quicks({
  quick,
  selectQuick,
  unselectQuick,
}: QuicksProps) {
  const [isExpend, setIsExpend] = useState(false);

  const toggleIsExpend = () => {
    setIsExpend((isExpend) => !isExpend);
  };

  return (
    <div className="absolute bottom-[27px] right-[34px] flex items-center space-x-[26px]">
      {isExpend && quick !== "task" && (
        <button
          className="relative flex h-[60px] w-[60px] items-center justify-center rounded-full bg-gray-6"
          onClick={() => selectQuick("task")}
        >
          {quick === "default" && (
            <div className="absolute -top-8 text-sm font-bold text-gray-6">
              Task
            </div>
          )}
          <Image width={27} height={27} src="/task.svg" alt="task icon" />
        </button>
      )}

      {isExpend && quick !== "inbox" && (
        <button
          className="relative flex h-[60px] w-[60px] items-center justify-center rounded-full bg-gray-6"
          onClick={() => selectQuick("inbox")}
        >
          {quick === "default" && (
            <div className="absolute -top-8 text-sm font-bold text-gray-6">
              Inbox
            </div>
          )}
          <Image width={27} height={27} src="/inbox.svg" alt="inbox icon" />
        </button>
      )}

      {quick === "default" ? (
        <button
          className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-blue-1"
          onClick={toggleIsExpend}
        >
          <Image width={56} height={56} src="/quick.svg" alt="quick icon" />
        </button>
      ) : quick === "inbox" ? (
        <div className="relative">
          <button
            className="absolute -left-3 z-0 h-[68px] w-[68px] rounded-full bg-gray-2"
            onClick={unselectQuick}
          />
          <button className="relative z-10 flex h-[68px] w-[68px] items-center justify-center rounded-full bg-[#8785FF]">
            <Image
              width={30}
              height={30}
              src="/inbox-white.svg"
              alt="inbox icon"
            />
          </button>
        </div>
      ) : quick === "task" ? (
        <div className="relative">
          <button
            className="absolute -left-3 z-0 h-[68px] w-[68px] rounded-full bg-gray-2"
            onClick={unselectQuick}
          />
          <button className="relative z-10 flex h-[68px] w-[68px] items-center justify-center rounded-full bg-[#F8B76B]">
            <Image
              width={30}
              height={30}
              src="/task-white.svg"
              alt="task icon"
            />
          </button>
        </div>
      ) : null}
    </div>
  );
}
