import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { motion } from "motion/react";
import { animate } from "motion";

function HeroPage() {
  return (
    <div  className="w-full h-screen bg-zinc-800">
      <div className="textstructure pt-20 ml-16">
        {["we create", "eye-opening", "presentations"].map((item, index) => {
          return (
            <div className="masker flex items-center  gap-4">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{
                    width: "9vw",
                    opacity: 1,
                    transition: { ease: [0.68, -0.6, 0.32, 1.6], duration: 1 },
                  }}
                  className="w-[9vw] h-[5vw] bg-amber-700 mt-[1vw] rounded-xl"
                ></motion.div>
              )}
              <h1 className=" font-[FoundersGrotesk] uppercase text-[7.7vw] leading-[6vw] text-9xl tracking-wide">
                {item}
              </h1>
            </div>
          );
        })}
      </div>
      <div className="border-t-1 border-zinc-500 mt-[12vw] flex justify-between py-6 px-10">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return <p className="">{item}</p>;
        })}
        <div className="start flex gap-4">
          <div className="uppercase border-1 px-6 py-2 rounded-4xl ">
            start the project
          </div>
          <div className="border-1 px-3 py-2 rounded-[50%] flex items-center">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroPage;
