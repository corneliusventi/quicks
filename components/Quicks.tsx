"use client";

import Image from "next/image";
import { useState } from "react";
import { Quick } from "./Quick";
import QuickButton from "./QuickButton";
import QuickCloseButton from "./QuickCloseButton";
import QuickLabel from "./QuickLabel";

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
      {isExpend && (
        <>
          {quick !== "task" && (
            <QuickButton onClick={() => selectQuick("task")}>
              {quick === "default" && <QuickLabel label="Task" />}
              <Image width={27} height={27} src="/task.svg" alt="task icon" />
            </QuickButton>
          )}

          {quick !== "inbox" && (
            <QuickButton onClick={() => selectQuick("inbox")}>
              {quick === "default" && <QuickLabel label="Inbox" />}
              <Image width={27} height={27} src="/inbox.svg" alt="inbox icon" />
            </QuickButton>
          )}
        </>
      )}

      {quick === "default" ? (
        <QuickButton color="bg-blue-1" onClick={toggleIsExpend} large>
          <Image width={56} height={56} src="/quick.svg" alt="quick icon" />
        </QuickButton>
      ) : quick === "inbox" ? (
        <QuickCloseButton onClick={unselectQuick}>
          <QuickButton color="bg-[#8785FF]" large>
            <Image
              width={30}
              height={30}
              src="/inbox-white.svg"
              alt="inbox icon"
            />
          </QuickButton>
        </QuickCloseButton>
      ) : quick === "task" ? (
        <QuickCloseButton onClick={unselectQuick}>
          <QuickButton color="bg-[#F8B76B]" large>
            <Image
              width={30}
              height={30}
              src="/task-white.svg"
              alt="task icon"
            />
          </QuickButton>
        </QuickCloseButton>
      ) : null}
    </div>
  );
}
