"use client";

import { useState } from "react";
import Loading from "./Loading";
import TaskBar from "./TaskBar";

export type Category = {
  id: string;
  name: string;
};

export default function QuickTaskTab() {
  const [category, setCategory] = useState<Category>();

  return (
    <div className="flex h-full flex-col px-6 py-4">
      <TaskBar
        category={category}
        selectCategory={(category) => setCategory(category)}
      />
      <Loading message="Loading Task List" />
    </div>
  );
}
