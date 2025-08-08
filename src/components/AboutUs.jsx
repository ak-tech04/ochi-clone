import React from "react";
import Button from "./Button";

function AboutUs() {
  return (
    <div className="w-full text-black py-20 bg-[#CDEA68] rounded-t-3xl ">
      <div className="text-7xl px-20 pb-20">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to&nbsp;
        <span className="underline">
          raise funds, sell <br /> prod­ucts, ex­plain com­plex ideas,{" "}
          <span className="!no-underline">and</span> hire great peo-
          <br /> ­ple.
        </span>
      </div>
      <div className="border-y-1 pt-10 px-20 flex justify-between pb-40">
        <div>What you can expect:</div>
        <div className="max-w-[18vw] ml-[20vw]">
          <div className="pb-10">
            We partner with the companies and startups who make the world go
            round — they drive the net-zero economy, revolutionize crypto
            treasury management, build photonic chips, and open Michelin-starred
            restaurants.
          </div>
          <div>
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating.
          </div>
        </div>
        <div className="self-center mr-40">
          <ul>
            <li>S:</li>
            <li>
              <a className="underline underline-offset-4" href="#">
                Instagram
              </a>
            </li>
            <li>
              <a className="underline underline-offset-4" href="#">
                Behance
              </a>
            </li>
            <li>
              <a className="underline underline-offset-4" href="#">
                Facebook
              </a>
            </li>
            <li>
              <a className="underline underline-offset-4" href="#">
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between rounded-b-2xl my-5 mx-20">
        <div>
          <h2 className=" text-[3.5vw] mb-4">Our approach:</h2>
          <Button text="read more"></Button>
        </div>
        <div className="w-[45vw] h-[30vw] ">
          <img
            className="w-full h-full object-cover rounded-2xl "
            src="/src/assets/HomepagePhoto.jpg"
            alt="hero-photo"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
