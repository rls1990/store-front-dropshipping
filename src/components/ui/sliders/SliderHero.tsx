"use client";

import LeftArrow from "./icons/LeftArrow";
import RightArrow from "./icons/RightArrow";

const SliderHero = () => {
  return (
    <div className="h-[70vh] relative bg-gray-200">
      <button className="cursor-pointer transition-all shadow-2xl active:shadow-md active:scale-97 m-3 rounded-2xl bg-white/70 absolute right-0 rotate-90 top-[30%] sm:right-auto sm:top-[40%] sm:rotate-0 opacity-70 hover:opacity-90">
        <LeftArrow className="size-12 sm:w-15 sm:h-27" />
      </button>
      <button className="cursor-pointer transition-all shadow-2xl active:shadow-md active:scale-97 m-3 rounded-2xl bg-white/70 absolute right-0 rotate-90 top-[50%] sm:right-0 sm:top-[40%] sm:rotate-0 opacity-70 hover:opacity-90">
        <RightArrow className="size-12 sm:w-15 sm:h-27" />
      </button>
    </div>
  );
};

export default SliderHero;
