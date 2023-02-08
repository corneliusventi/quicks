"use client";

import { Quick } from "./Quick";
import QuickInboxTab from "./QuickInboxTab";
import QuickTaskTab from "./QuickTaskTab";

type QuickTabsProps = {
  quick: Quick;
  unselectQuick: () => void;
};

export default function QuickTabs({ quick, unselectQuick }: QuickTabsProps) {
  return (
    <div className="absolute bottom-[110px] right-[34px] h-3/4 w-5/12 rounded-md  border border-[#BDBDBD] bg-white ">
      {quick === "inbox" ? (
        <QuickInboxTab unselectQuick={unselectQuick} />
      ) : quick === "task" ? (
        <QuickTaskTab />
      ) : null}
    </div>
  );
}
