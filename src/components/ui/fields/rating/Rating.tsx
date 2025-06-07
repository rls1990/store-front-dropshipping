"use client";

import { useState } from "react";
import StarIcon from "./icons/StarIcon";

interface RatingProps {
  initialRating?: number;
  onChange?: (rating: number) => void;
  maxRating?: number;
  label?: string;
}

export default function Rating({
  initialRating = 0,
  onChange,
  maxRating = 5,
  label = "Filtrar por calificación:",
}: RatingProps) {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (selectedRating: number) => {
    const newRating = rating === selectedRating ? 0 : selectedRating;
    setRating(newRating);
    onChange?.(newRating);
  };

  return (
    <div className="space-y-2">
      {label && <p className="text-sm font-medium text-gray-700">{label}</p>}
      <div className="flex items-center">
        {[...Array(maxRating)].map((_, index) => {
          const ratingValue = index + 1;
          return (
            <button
              key={index}
              type="button"
              className="focus:outline-none mr-1"
              onClick={() => handleClick(ratingValue)}
              onMouseEnter={() => setHoverRating(ratingValue)}
              onMouseLeave={() => setHoverRating(0)}
              aria-label={`${ratingValue} ${
                ratingValue === 1 ? "estrella" : "estrellas"
              }`}
            >
              <StarIcon
                className={`h-6 w-6 ${
                  ratingValue <= (hoverRating || rating)
                    ? "[&_g]:stroke-yellow-400"
                    : "[&_g]:stroke-gray-300"
                }`}
              />
            </button>
          );
        })}
        {rating > 0 && (
          <button
            type="button"
            onClick={() => {
              setRating(0);
              onChange?.(0);
            }}
            className="ml-2 text-sm text-gray-500 hover:text-gray-700"
          >
            Limpiar
          </button>
        )}
      </div>
    </div>
  );
}
