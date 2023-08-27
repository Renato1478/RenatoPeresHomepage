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
      className={`px-3 py-1 border-solid border-2 dark:text-zinc-400 ${
        isActive ? "border-purple-400 dark:text-white" : "border-zinc-300 dark:border-zinc-700 text-zinc-400"
      } hover:border-purple-400 transition ease-in-out duration-300`}
    >
      {props.children}
    </button>
  );
}
