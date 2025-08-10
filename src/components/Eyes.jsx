import React, { use, useRef, useState } from "react";

function Eyes() {
  let [getRotate, setRotate] = useState(0);
  window.addEventListener("mousemove", (e) => {
    const posX = window.screen.width / 2;
    const posY = window.screen.height / 2;

    let deltaX = e.clientX - posX;
    let deltaY = e.clientY - posY;

    let angle = Math.atan2(deltaY, deltaX);
    let angleDegree = angle * (180 / Math.PI);

    setRotate(angleDegree - 180 + "deg");
  });

  return (
    <div className="h-screen bg-[url(/src/assets/top-bg.jpg)] bg-center bg-cover flex items-center justify-center">
      <div className="flex items-center justify-center bg-amber-50 h-[15vw] w-[15vw] rounded-[100%] ">
        
        <div className="flex items-center relative h-[60%] w-[60%] bg-zinc-900 rounded-[100%]">
          <div className="z-10 absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] uppercase">PLAY</div>
          <div
            style={{ rotate: getRotate }}
            className={` w-full bg-transparent `}
          >
            <div className="h-[25px] w-[25px] bg-white rounded-[100%]">
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-amber-50 h-[15vw] w-[15vw] rounded-[100%] ">
        <div className="flex items-center relative h-[60%] w-[60%] bg-zinc-900 rounded-[100%]"> 
          <div className="z-10 absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] uppercase">PLAY</div>
          <div
            style={{ rotate: getRotate }}
            className={` w-full bg-transparent `}
          >
            <div className="h-[25px] w-[25px] bg-white rounded-[100%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
