"use client"

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      className="ui:px-5 ui:py-2 ui:text-xl ui:border-2 ui:border-gray-500 ui:rounded-xl ui:shadow "
      onClick={onClick} >
      {children}
    </button>
  );
};
