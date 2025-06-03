"use client";

import { FC, ReactNode, useEffect, useRef, useState } from "react";
import LeftArrow from "./icons/LeftArrow";
import RightArrow from "./icons/RightArrow";
import { ItemSlider } from "@/services/get-slider-hero-items";
import Image from "next/image";
import Link from "next/link";
import ProductIcon from "./icons/ProductIcon";

interface SliderHeroProps {
  items: ItemSlider[];
  interval?: number;
  className?: string;
}

const SliderHero: FC<SliderHeroProps> = ({ items, interval = 10000 }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const images = useRef<ReactNode[] | null>(null);

  useEffect(() => {
    let imgs: ReactNode[] = [];
    items.forEach((item) => {
      imgs.push(
        <Image
          src={item.image}
          width={400}
          height={400}
          className="h-[270px] md:h-[300px] lg:h-[350px] w-auto mask-x-from-95% mask-y-from-95% slide-right-zoom"
          alt={items[currentIndex].title}
        />
      );
    });
    images.current = imgs;
  }, [items]);

  const nextIndex = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevIndex = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(
      () => {
        setTimeout(() => {
          setCurrentIndex((prevIndex) =>
            prevIndex === items.length - 1 ? 0 : prevIndex + 1
          );
        }, 1000);
      },
      interval,
      images
    );

    return () => clearInterval(timer);
  }, [items.length]);

  if (!items || items.length === 0) return null;

  return (
    <div className="h-[80vh] relative bg-gray-50">
      {/* left right buttons */}
      <button
        className="cursor-pointer transition-all active:scale-90 m-3 rounded-2xl absolute right-0 -rotate-90 top-[55%] sm:right-auto sm:top-[40%] sm:rotate-0 opacity-70 z-40"
        onClick={prevIndex}
      >
        <LeftArrow className="size-12 sm:w-15 sm:h-27" />
      </button>
      <button
        className="cursor-pointer transition-all   active:scale-90 m-3 rounded-2xl absolute right-0 -rotate-90 top-[40%] sm:right-0 sm:top-[40%] sm:rotate-0 opacity-70 hover:opacity-90 z-40"
        onClick={nextIndex}
      >
        <RightArrow className="size-12 sm:w-15 sm:h-27" />
      </button>

      {/*Progress Indicators */}
      <span className="absolute bottom-4 w-full flex items-center justify-center gap-3 z-40">
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

      {images && images.current && images.current?.length > 0 ? (
        <div className="w-full h-full flex items-center justify-center">
          <div
            key={Date.now()}
            className="fade-in w-full grid grid-cols-1 justify-items-center lg:grid-cols-2 overflow-x-hidden"
          >
            <div className="lg:flex lg:justify-end lg:w-full overflow-hidden mask-x-from-95% mask-y-from-95%">
              {images && images.current && images.current[currentIndex]}
            </div>

            <div className="flex flex-col items-center justify-center lg:items-baseline lg:w-full lg:pl-12 slide-left">
              <h1 className="text-2xl lg:text-3xl font-semibold text-gray-700 ">
                {items[currentIndex].title}
              </h1>

              <p className="text-sm text-gray-900 text-center w-[40ch] lg:w-[50ch] lg:text-left">
                {items[currentIndex].subtitle}
              </p>

              <Link
                className="p-2 mt-3 bg-primary hover:bg-primary-light active:shadow-md active:scale-95 transition-all text-gray-50 rounded-lg w-auto px-10 text-center shadow-lg"
                href={items[currentIndex].route}
              >
                <span className="inline-flex items-center justify-center gap-2 pt-1">
                  <ProductIcon />
                  <span className="pt-1">Ver Producto</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <div className="bg-gray-500 w-[50%] h-[50%] rounded-lg animate-pulse"></div>
        </div>
      )}
    </div>
  );
};

export default SliderHero;
