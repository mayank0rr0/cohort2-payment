"use client"

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      className="px-5 py-2 text-xl border-2 border-gray-500 rounded-xl shadow "
      onClick={onClick} >
      {children}
    </button>
  );
};
