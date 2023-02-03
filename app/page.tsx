import Quicks from "@/components/Quicks";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen bg-gray-1">
      <div className="h-full w-[285px] border-r border-gray-6"></div>
      <div className="h-full w-full">
        <div className="flex h-[58px] w-full bg-gray-2">
          <Image
            className="ml-[26px] mt-[19px] mb-[23px]"
            width={16}
            height={16}
            src="/search.svg"
            alt="search icon"
          />
        </div>

        <Quicks />
      </div>
    </main>
  );
}
