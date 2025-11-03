"use client"

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      className="h-15 px-5 py-2 text-xl rounded-xl shadow bg-black text-white hover:text-black hover:border-2 hover:border-gray-500 hover:bg-white hover:cursor-pointer "
      onClick={onClick} >
      {children}
    </button>
  );
};
