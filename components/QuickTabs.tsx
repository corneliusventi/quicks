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
    <div className="absolute bottom-[110px] right-[34px] h-[734px] w-[734px] rounded-md border border-[#BDBDBD] bg-white">
      {quick === "inbox" ? (
        <QuickInboxTab close={unselectQuick} />
      ) : quick === "task" ? (
        <QuickTaskTab />
      ) : null}
    </div>
  );
}
