import React from "react";
import Button from "./Button";

function FilterButton(props) {
  return (
    <div>
      <Button 
      className="flex items-center px-4 py-2 space-x-3 text-gray-600 transition-colors duration-300 transform border rounded-lg focus:border-teal-500 focus:ring focus:ring-primary focus:ring-opacity-40 dark:text-gray-200 dark:border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
      onClick={() => props.setFilter(props.name)}
      // aria-pressed={props.isPressed}
      >
        {/* TODO: Dyanmic SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeWidth={2}
            strokeLinejoin="round"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          ></path>
        </svg>
        {""}
        <span className="hidden md:inline">{props.name}</span>
      </Button>
    </div>
  );
}

export default FilterButton;
