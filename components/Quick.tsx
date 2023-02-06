"use client";

import { useState } from "react";
import Quicks from "./Quicks";
import QuickTabs from "./QuickTabs";

export type Quick = "default" | "inbox" | "task";

export default function Quick() {
  const [quick, setQuick] = useState<Quick>("default");

  const selectQuick = (quick: Quick) => {
    setQuick(quick);
  };

  const unselectQuick = () => {
    setQuick("default");
  };
  return (
    <>
      {quick !== "default" && (
        <QuickTabs quick={quick} unselectQuick={unselectQuick} />
      )}
      <Quicks
        quick={quick}
        selectQuick={selectQuick}
        unselectQuick={unselectQuick}
      />
    </>
  );
}
