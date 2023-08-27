"use client";

import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isActive: boolean;
}

export default function PaginationButton({ isActive, ...props }: Props) {
  return (
    <button
      {...props}
      className={`px-3 py-1 border-solid border-2 ${
        isActive ? "border-purple-400" : "border-gray-300"
      } hover:border-purple-400 transition ease-in-out duration-300`}
    >
      {props.children}
    </button>
  );
}
