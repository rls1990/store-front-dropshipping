"use client";

import { FC, useState } from "react";

interface ColorSelectProps {
  listcolors: ("rojo" | "azul" | "verde" | "amarillo" | "negro" | "blanco")[];
}

const ColorSelect: FC<ColorSelectProps> = ({ listcolors }) => {
  const [colorIndex, setColorIndex] = useState(-1);

  return (
    <div>
      <label className="block text-xs font-medium text-gray-600 mb-1">
        Color
      </label>
      <div className="flex flex-wrap gap-2 [&_button]:cursor-pointer">
        {listcolors.findIndex((value) => value == "rojo") !== -1 && (
          <button
            onClick={() => setColorIndex(1)}
            className={
              "h-6 w-6 rounded-full border border-gray-300 bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-red-400 transition-all" +
              `${colorIndex == 1 && " ring-2 ring-offset-1 ring-red-400"}`
            }
          ></button>
        )}
        {listcolors.findIndex((value) => value == "azul") !== -1 && (
          <button
            onClick={() => setColorIndex(2)}
            className={
              "h-6 w-6 rounded-full border border-gray-300 bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-400 transition-all" +
              `${colorIndex == 2 && " ring-2 ring-offset-1 ring-blue-400"}`
            }
          ></button>
        )}

        {listcolors.findIndex((value) => value == "verde") !== -1 && (
          <button
            onClick={() => setColorIndex(3)}
            className={
              "h-6 w-6 rounded-full border border-gray-300 bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-green-400 transition-all" +
              `${colorIndex == 3 && " ring-2 ring-offset-1 ring-green-500"}`
            }
          ></button>
        )}

        {listcolors.findIndex((value) => value == "amarillo") !== -1 && (
          <button
            onClick={() => setColorIndex(4)}
            className={
              "h-6 w-6 rounded-full border border-gray-300 bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-yellow-300 transition-all" +
              `${colorIndex == 4 && " ring-2 ring-offset-1 ring-yellow-400"}`
            }
          ></button>
        )}

        {listcolors.findIndex((value) => value == "negro") !== -1 && (
          <button
            onClick={() => setColorIndex(5)}
            className={
              "h-6 w-6 rounded-full border border-gray-300 bg-black focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-500 transition-all" +
              `${colorIndex == 5 && " ring-2 ring-offset-1 ring-black"}`
            }
          ></button>
        )}

        {listcolors.findIndex((value) => value == "blanco") !== -1 && (
          <button
            onClick={() => setColorIndex(6)}
            className={
              "h-6 w-6 rounded-full border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-300 transition-all" +
              `${colorIndex == 6 && " ring-2 ring-offset-1 ring-gray-300"}`
            }
          ></button>
        )}
      </div>
    </div>
  );
};

export default ColorSelect;
