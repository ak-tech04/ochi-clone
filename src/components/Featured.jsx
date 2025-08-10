import React from "react";
import FeaturedProject from "./FeaturedProject";

function Featured() {
  return (
    <div data-scroll data-scroll-speed='.4'>
      <h2 className="text-[3vw] pt-20 pb-10 px-20 border-b-[1px] border-zinc-600">
        Featured projects
      </h2>
      <div className="card-container flex flex-wrap gap-[1.6%] px-20 pt-20">
        <FeaturedProject
          imgURL={"src/assets/Salience_Website_cover-663x551.png"}
          title={"Salience labs"}
          tags={["brand identity", "pitch deck"]}
        />
        <FeaturedProject
          imgURL={"src/assets/Soma_Website_0-1.png"}
          title={"soma"}
          tags={["brand identity", "pitch deck", "strategy"]}
        ></FeaturedProject>
        <FeaturedProject
          imgURL={"src/assets/Frame-481692-1-663x551.png"}
          title={"ah2 & matt horn"}
          tags={["pitch deck"]}
        ></FeaturedProject>
        <FeaturedProject
          imgURL={"src/assets/Frame-3898-1-663x551.jpg"}
          title={"vise"}
          tags={["pitch deck"]}
        ></FeaturedProject>
        <FeaturedProject
          imgURL={"src/assets/Fyde_Front-1-663x551.png"}
          title={"softstart"}
          tags={["pitch deck"]}
        ></FeaturedProject>
        <FeaturedProject
          imgURL={"src/assets/ATG_Website_1-663x551.png"}
          title={"fyde"}
          tags={["pitch deck"]}
        ></FeaturedProject>
      </div>
    </div>
  );
}

export default Featured;
