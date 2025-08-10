import { motion } from "motion/react";
import React from "react";

function Marquee() {
  return (
    <div data-scroll data-scroll-speed='.2' className="h-[50vh] w-full bg-[#264E42] py-[5vw] rounded-t-3xl flex ">
      <motion.div
        initial={{ x: 0 }}
        animate={{
          x: "-100%",
          transition: { repeat: Infinity, duration: 5, ease: "linear" },
        }}
        className="textStructure  text-[15vw] font-[FoundersGrotesk] uppercase  border-y-[1px]  whitespace-nowrap  font-semibold -tracking-tight leading-none pr-10 "
      >
        <div>We are ochi</div>
      </motion.div>
      <motion.div
        initial={{ x: 0 }}
        animate={{
          x: "-100%",
          transition: { repeat: Infinity, duration: 5, ease: "linear" },
        }}
        className="textStructure  text-[15vw] font-[FoundersGrotesk] uppercase  border-y-[1px]  whitespace-nowrap  font-semibold -tracking-tight leading-none pr-10"
      >
        <div>We are ochi</div>
      </motion.div>
      <motion.div
        initial={{ x: 0 }}
        animate={{
          x: "-100%",
          transition: { repeat: Infinity, duration: 5, ease: "linear" },
        }}
        className="textStructure  text-[15vw] font-[FoundersGrotesk] uppercase  border-y-[1px]  whitespace-nowrap  font-semibold -tracking-tight leading-none pr-10"
      >
        <div>We are ochi</div>
      </motion.div>
    </div>
  );
}

export default Marquee;
