import React from "react";

function Marquee() {
  return (
    <div className="h-[50vh] w-full bg-[#264E42] py-[5vw] rounded-t-3xl ">
      <div className="textStructure flex gap-[1vw] text-[20vw] font-[FoundersGrotesk] uppercase border-y-[1px]  whitespace-nowrap  overflow-hidden font-semibold -tracking-tight leading-none ">
        <div>We are ochi</div>
        <div>We are ochi</div>
        <div>We are ochi</div>
      </div>
    </div>
  );
}

export default Marquee;
