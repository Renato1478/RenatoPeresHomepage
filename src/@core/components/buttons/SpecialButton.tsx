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
      target="_blank"
      className="w-40  text-center relative items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium rounded-lg shadow-2xl group"
    >
      <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-300 bg-violet-400 rounded-full blur-md ease"></span>
      <span className="absolute inset-0 w-full h-full transition duration-300 group-hover:rotate-180 ease">
        <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-red-400 rounded-full blur-md"></span>
        <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-purple-500 rounded-full blur-md"></span>
      </span>
      <span className="relative text-white">
        {svgIcon}
        {children}
      </span>
    </a>
  );
}
