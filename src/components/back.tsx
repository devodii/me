"use client";

import { useRouter } from "next/navigation";
import { IoMdArrowBack } from "react-icons/io";

export const Back = () => {
  const { back } = useRouter();

  return (
    <div
      className="rounded-full p-2 bg-gray-800 text text-xl flex items-center justify-center cursor-pointer"
      onClick={back}
    >
      <IoMdArrowBack size={20} />
    </div>
  );
};
