"use client";

import { FC, useState } from "react";
import LeftArrow from "./icons/LeftArrow";
import RightArrow from "./icons/RightArrow";

interface SliderHeroProps {
  items: string[];
  interval?: number;
  className?: string;
}

const SliderHero: FC<SliderHeroProps> = ({ items, className }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextIndex = () => {
    if (currentIndex + 1 == items.length) setCurrentIndex(0);
    else setCurrentIndex(currentIndex + 1);
  };

  const prevIndex = () => {
    if (currentIndex == 0) setCurrentIndex(items.length - 1);
    else setCurrentIndex(currentIndex - 1);
  };

  return (
    <div className="h-[70vh] relative bg-gray-100">
      {/* left right buttons */}
      <button
        className="cursor-pointer transition-all active:scale-90 m-3 rounded-2xl absolute right-0 -rotate-90 top-[55%] sm:right-auto sm:top-[40%] sm:rotate-0 opacity-70 hover:opacity-90"
        onClick={prevIndex}
      >
        <LeftArrow className="size-12 sm:w-15 sm:h-27" />
      </button>
      <button
        className="cursor-pointer transition-all   active:scale-90 m-3 rounded-2xl absolute right-0 -rotate-90 top-[40%] sm:right-0 sm:top-[40%] sm:rotate-0 opacity-70 hover:opacity-90"
        onClick={nextIndex}
      >
        <RightArrow className="size-12 sm:w-15 sm:h-27" />
      </button>

      {/*Progress Indicators */}
      <span className="absolute bottom-4 w-full flex items-center justify-center gap-3">
        {items.map((_item, index) => (
          <button
            key={index + "progi"}
            className={
              index == currentIndex
                ? "p-1 scale-200 bg-gray-400 rounded-full border-gray-200 border-2 hover:bg-gray-400 cursor-pointer transition-all"
                : "p-1 bg-gray-300 rounded-full border-gray-200 border-2 hover:bg-gray-400 hover:scale-150 cursor-pointer transition-all"
            }
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </span>

      <div className="w-full h-full flex items-center justify-center">
        <div key={Date.now()} className="fade-in">
          {items[currentIndex]}
        </div>
      </div>
    </div>
  );
};

export default SliderHero;
