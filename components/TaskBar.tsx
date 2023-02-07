import Image from "next/image";

export default function TaskBar() {
  return (
    <div className="flex justify-between">
      <div className="mx-24 flex items-center rounded-md border border-gray-3 px-4 py-2 font-bold text-gray-2">
        <div>My Tasks</div>
        <Image
          height={20}
          width={20}
          src="/expand-more.svg"
          alt="expand more icon"
        />
      </div>
      <div className="rounded-md bg-blue-1 px-4 py-2 font-bold text-white">
        New Task
      </div>
    </div>
  );
}
