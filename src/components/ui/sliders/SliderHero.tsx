"use client";

import LeftArrow from "./icons/LeftArrow";
import RightArrow from "./icons/RightArrow";

const SliderHero = () => {
  return (
    <div className="h-[70vh] relative bg-gray-100">
      {/* left right buttons */}
      <button className="cursor-pointer transition-all active:scale-90 m-3 rounded-2xl absolute right-0 rotate-90 top-[30%] sm:right-auto sm:top-[40%] sm:rotate-0 opacity-70 hover:opacity-90">
        <LeftArrow className="size-12 sm:w-15 sm:h-27" />
      </button>
      <button className="cursor-pointer transition-all   active:scale-90 m-3 rounded-2xl absolute right-0 rotate-90 top-[50%] sm:right-0 sm:top-[40%] sm:rotate-0 opacity-70 hover:opacity-90">
        <RightArrow className="size-12 sm:w-15 sm:h-27" />
      </button>

      {/* Indicators */}
      <span className="absolute bottom-0 w-full flex items-center justify-center gap-2 [&_button]:cursor-pointer [&_button]:hover:bg-gray-200">
        <button className="p-2 bg-gray-300 rounded-full border-gray-200 border-2"></button>
        <button className="p-1 bg-gray-300 rounded-full border-gray-200 border-2"></button>
        <button className="p-1 bg-gray-300 rounded-full border-gray-200 border-2"></button>
        <button className="p-1 bg-gray-300 rounded-full border-gray-200 border-2"></button>
        <button className="p-1 bg-gray-300 rounded-full border-gray-200 border-2"></button>
      </span>
    </div>
  );
};

export default SliderHero;
