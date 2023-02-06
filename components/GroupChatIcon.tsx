import Image from "next/image";

export default function GroupChatIcon() {
  return (
    <div className="relative flex w-14 justify-end">
      <div className="absolute right-4 z-0 flex h-8 w-8 items-center justify-center rounded-full bg-gray-5">
        <Image height={16} width={16} src="/person.svg" alt="person 1 icon" />
      </div>
      <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-blue-1">
        <Image
          height={16}
          width={16}
          src="/person-white.svg"
          alt="person 2 icon"
        />
      </div>
    </div>
  );
}
