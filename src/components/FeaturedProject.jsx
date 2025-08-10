import React from "react";
import { GoDotFill } from "react-icons/go";

function FeaturedProject({ imgURL, title, tags }) {
  console.log(tags);
  let myTagArray = tags;
  return (
    <div className="h-[80vh] w-1/2 rounded-4xl box-border grow shrink-0 basis-[45%] flex flex-col mt-10">
      <div className="uppercase pb-10 flex items-center gap-2">
        <GoDotFill className="text-[25px]"></GoDotFill>
        {title}
      </div>
      <div className="overflow-hidden rounded-3xl ">
        <img className="w-full h-full" src={imgURL} alt="" />
      </div>
      <div className="outline-tags flex gap-8 mt-8">
        {myTagArray.map((item, index) => {
          return (
            <div className="py-2 px-4 border-1 rounded-4xl uppercase hover:bg-white hover:text-black ">
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FeaturedProject;
