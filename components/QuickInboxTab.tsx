import Image from "next/image";
import Loading from "./Loading";
import SearchBox from "./SearchBox";

export default function QuickInboxTab() {
  return (
    <div className="flex h-full flex-col px-8 py-4">
      <SearchBox />
      <Loading message="Loading Chats" />
    </div>
  );
}
