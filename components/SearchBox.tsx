import Image from "next/image";

export default function SearchBox() {
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
        className="w-full rounded-md border border-gray-3 py-1 px-16 text-gray-1 placeholder:text-gray-1"
        type="text"
        placeholder="Search"
      />
    </div>
  );
}
