import Image from "next/image";
import { ChangeEventHandler } from "react";

type SearchBoxProps = {
  search: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export default function SearchBox({ search, onChange }: SearchBoxProps) {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 right-16 flex items-center">
        <Image
          height={12}
          width={12}
          src="/search-gray-1.svg"
          alt="search icon"
        />
      </div>
      <input
        value={search}
        className="w-full rounded-md border border-gray-3 py-1 px-16 text-gray-1 placeholder:text-gray-1"
        type="text"
        placeholder="Search"
        onChange={onChange}
      />
    </div>
  );
}
