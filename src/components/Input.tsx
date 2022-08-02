import React, { useEffect, useRef } from "react";

interface InputProps {
  type: string;
  name?: string;
  value?: string;
  className?: string;
  autoComplete?: string;
  required?: boolean;
  isFocused?: boolean;
  id?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  type = "text",
  name,
  value,
  className = "border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",
  autoComplete,
  required,
  isFocused,
  id,
  handleChange,
}: InputProps) {
  const input = useRef<any>();

  useEffect(() => {
    if (isFocused) {
      input.current?.focus();
    }
  }, []);

  return (
    <div className="flex flex-col items-start">
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        className={className}
        ref={input}
        autoComplete={autoComplete}
        required={required}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}
