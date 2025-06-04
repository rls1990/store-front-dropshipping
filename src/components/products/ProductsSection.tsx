"use client";

import { useState } from "react";
import ChevronDownIcon from "./icons/ChevronDownIcon";
import FilterIcon from "./icons/FilterIcon";

const ProductsSection = () => {
  const [openMenuFulter, setOpenMenuFulter] = useState(false);
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center gap-4">
        <div className="relative flex-grow w-full sm:w-auto">
          <input
            type="text"
            id="search-input"
            placeholder="Buscar productos por nombre..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition duration-150 ease-in-out"
          />
          <div className="absolute left-0 top-0 bottom-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 stroke-gray-50 hover:stroke-gray-100"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        <div className="relative w-full sm:w-auto">
          <button
            id="filter-toggle-button"
            type="button"
            className="w-full sm:w-auto flex items-center justify-center px-5 py-2 border border-gray-300 rounded-full bg-white text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition duration-150 ease-in-out cursor-pointer"
            onClick={() => setOpenMenuFulter(!openMenuFulter)}
          >
            <FilterIcon className="size-5 ml-1" />
            Filtros
            <ChevronDownIcon
              className={
                "size-5 mr-1" +
                ` transition-transform ${
                  openMenuFulter ? "rotate-0" : "-rotate-90"
                }`
              }
            />
          </button>

          <div
            id="filter-dropdown"
            className={
              "absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl z-40 p-4 border border-gray-200" +
              `${openMenuFulter ? " block" : " hidden"}`
            }
          >
            <h4 className="text-sm font-semibold text-gray-800 mb-3 border-b pb-2">
              Opciones de Filtro
            </h4>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Fecha de Publicación
                </label>
                <select className="w-full text-sm border-gray-300 rounded-md shadow-sm focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50">
                  <option>Más Reciente</option>
                  <option>Más Antiguo</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Color
                </label>
                <div className="flex flex-wrap gap-2">
                  <button className="h-6 w-6 rounded-full border border-gray-300 bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-red-400"></button>
                  <button className="h-6 w-6 rounded-full border border-gray-300 bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-400"></button>
                  <button className="h-6 w-6 rounded-full border border-gray-300 bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-green-400"></button>
                  <button className="h-6 w-6 rounded-full border border-gray-300 bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-yellow-300"></button>
                  <button className="h-6 w-6 rounded-full border border-gray-300 bg-black focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-500"></button>
                  <button className="h-6 w-6 rounded-full border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-300"></button>
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Rango de Precio
                </label>
                <input
                  type="range"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>$0</span>
                  <span>$1000+</span>
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Marca
                </label>
                <select className="w-full text-sm border-gray-300 rounded-md shadow-sm focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50">
                  <option>Marca A</option>
                  <option>Marca B</option>
                  <option>Marca C</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Valoración
                </label>
                <div className="flex items-center space-x-1">
                  <button className="text-gray-300 hover:text-amber-400">
                    <i className="fas fa-star"></i>
                  </button>
                  <button className="text-gray-300 hover:text-amber-400">
                    <i className="fas fa-star"></i>
                  </button>
                  <button className="text-gray-300 hover:text-amber-400">
                    <i className="fas fa-star"></i>
                  </button>
                  <button className="text-gray-300 hover:text-amber-400">
                    <i className="fas fa-star"></i>
                  </button>
                  <button className="text-gray-300 hover:text-amber-400">
                    <i className="fas fa-star"></i>
                  </button>
                  <span className="text-xs text-gray-500 ml-1">&amp; Up</span>
                </div>
              </div>
              <button className="w-full mt-4 bg-emerald-600 text-white py-1.5 rounded-md text-sm font-medium hover:bg-emerald-700 transition duration-150">
                Aplicar Filtros
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
