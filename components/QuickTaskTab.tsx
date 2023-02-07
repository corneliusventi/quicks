import Loading from "./Loading";
import TaskBar from "./TaskBar";

export default function QuickTaskTab() {
  return (
    <div className="flex h-full flex-col px-6 py-4">
      <TaskBar />
      <Loading message="Loading Task List" />
    </div>
  );
}
