import Image from "next/image";
import React from "react";

type LoadingProps = {
  message?: string;
};

export default function Loading({ message = "Loading" }: LoadingProps) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <Image
        className="animate-spin"
        height={85}
        width={85}
        src="/loading.svg"
        alt="loading icon"
      />
      <div className="relative">
        {message}
        <div className="absolute inset-y-0 -right-3 ">...</div>
      </div>
    </div>
  );
}
