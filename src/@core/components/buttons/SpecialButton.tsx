import React from "react";

type Props = {
  children: React.ReactNode;
  href: string;
  svgIcon?: React.ReactNode;
};

export default function SpecialButton({ children, href, svgIcon }: Props) {
  return (
    <a
      href={href}
      className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-purple-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-purple-300 ring-offset-purple-200 hover:ring-offset-purple-300 dark:ring-purple-400 dark:ring-offset-purple-200 dark:hover:ring-offset-purple-400 ease focus:outline-none"
    >
      <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
      <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
      <span className="relative z-20 flex items-center text-sm">
        {svgIcon}
        {children}
      </span>
    </a>
  );
}
