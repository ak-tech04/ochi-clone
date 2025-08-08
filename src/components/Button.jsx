import React from "react";
import { GoDotFill } from "react-icons/go";
import { FaArrowUpLong } from "react-icons/fa6";

function Button({ text, linkUrl = "#" }) {
  const buttonText = text;
  const URL = linkUrl;

  return (
    <div className="w-fit hover:bg-zinc-950 uppercase bg-zinc-800 text-white rounded-4xl transition ease-in duration-150  ">
      <div className="flex items-center gap-8 pl-8 pr-24 group relative  ">
        <a className="py-5" href={URL}>
          {buttonText}
        </a>
        <span className="absolute flex right-6">
          <GoDotFill className="w-full h-full group-hover:scale-500 z-1 transition ease-out duration-150 " />
          <FaArrowUpLong className="absolute opacity-0 group-hover:opacity-100 group-hover:block z-10 text-black rotate-[45deg] transition ease-in-out duration-150 " />
        </span>
      </div>
    </div>
  );
}

export default Button;
