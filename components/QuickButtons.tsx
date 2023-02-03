"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function QuickButtons() {
  const [isExpend, setIsExpend] = useState(false);

  const toggleIsExpend = () => setIsExpend((isExpend) => !isExpend);

  return (
    <>
      {isExpend && (
        <>
          <button className="relative flex h-[60px] w-[60px] items-center justify-center rounded-full bg-gray-6">
            <div className="absolute -top-8 text-sm font-bold text-gray-6">
              Task
            </div>
            <Image
              width={27}
              height={27}
              src="/chrome-reader-mode.svg"
              alt="quick icon"
            />
          </button>
          <button className="relative flex h-[60px] w-[60px] items-center justify-center rounded-full bg-gray-6">
            <div className="absolute -top-8 text-sm font-bold text-gray-6">
              Inbox
            </div>
            <Image
              width={27}
              height={27}
              src="/question-answer.svg"
              alt="quick icon"
            />
          </button>
        </>
      )}

      <button
        className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-blue-1"
        onClick={toggleIsExpend}
      >
        <Image
          width={56}
          height={56}
          src="/cloud-lightning.svg"
          alt="quick icon"
        />
      </button>
    </>
  );
}
