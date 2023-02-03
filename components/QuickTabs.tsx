"use client";

import { Quick } from "./Quick";
import QuickInboxTab from "./QuickInboxTab";
import QuickTaskTab from "./QuickTaskTab";

type QuickTabsProps = {
  quick: Quick;
};

export default function QuickTabs({ quick }: QuickTabsProps) {
  return (
    <div className="absolute bottom-[110px] right-[34px] h-[734px] w-[734px] rounded-md border border-[#BDBDBD] bg-white">
      {quick === "inbox" ? (
        <QuickInboxTab />
      ) : quick === "task" ? (
        <QuickTaskTab />
      ) : null}
    </div>
  );
}
