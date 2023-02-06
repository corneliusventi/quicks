import Image from "next/image";

type PersonalChatIconProps = {
  name: string;
};

export default function PersonalChatIcon({ name }: PersonalChatIconProps) {
  return (
    <div className="flex w-14 justify-center">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-1 font-bold text-white">
        {name[0]}
      </div>
    </div>
  );
}
