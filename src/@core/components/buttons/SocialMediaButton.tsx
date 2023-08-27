import React from "react";

export default function SocialMediaButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button className="px-3 py-2 border-solid border-2 rounded-md text-gray-600 hover:border-purple-400 hover:text-purple-400 transition ease-in-out duration-300">
      {children}
    </button>
  );
}