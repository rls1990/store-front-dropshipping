"use client";

import { FC } from "react";

interface SelectProps {
  title?: string;
  items: string[];
}

const Select: FC<SelectProps> = ({ title, items }) => {
  return (
    <div>
      <label className="block text-xs font-medium text-gray-600 mb-1">
        {title}
      </label>
      <select className="w-full text-sm p-2 border-gray-300 rounded-md shadow-sm focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50">
        {items.map((item, index) => (
          <option key={index + Date.now()}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
