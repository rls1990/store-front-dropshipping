"use client";

import { useEffect, useState } from "react";

interface TextSliderProps {
  items: ItemSlider[];
  interval?: number;
  className?: string;
}

interface ItemSlider {
  message: string;
  icon: string;
}

const TextSlider: React.FC<TextSliderProps> = ({
  items,
  interval = 3000,
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [direction, setDirection] = useState<"left" | "right">("left");

  useEffect(() => {
    if (items.length <= 1) return;

    const timer = setInterval(() => {
      // Iniciar animación de salida
      setIsAnimating(true);
      setDirection("left");

      // Después de la animación, cambiar al siguiente texto
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
        setIsAnimating(false);
      }, 1000); // Medio segundo para la animación
    }, interval);

    return () => clearInterval(timer);
  }, [items.length, interval]);

  if (!items || items.length === 0) return null;

  // Si solo hay un texto, no necesitamos animación
  if (items.length === 1) {
    return (
      <div className={`relative h-[23px] min-w-[50%] ${className}`}>
        <div className="w-full text-left absolute top-1">
          {items[0].message}
        </div>
      </div>
    );
  }

  return (
    <div className={`relative min-w-[50%] h-[23px] ${className}`}>
      <div
        className={`absolute top-1 transition-all duration-500 ease-in-out ${
          isAnimating
            ? direction === "left"
              ? "-translate-x-full opacity-0"
              : "translate-x-full opacity-0"
            : "translate-x-0 opacity-100"
        }`}
      >
        {items[currentIndex].message}
      </div>
    </div>
  );
};

export default TextSlider;
