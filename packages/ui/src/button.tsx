"use client"

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      className="min-w-30 h-15 px-5 py-2 text-xl rounded-xl shadow bg-pink-700 font-semibold hover:text-pink-700 text-white hover:border-2 hover:border-pink-700 hover:bg-white hover:cursor-pointer "
      onClick={onClick} >
      {children}
    </button>
  );
};
