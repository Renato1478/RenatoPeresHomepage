import React from "react";

export default function MyTitle({ text }: { text: string }) {
  return (
    <div className="flex flex-col w-fit">
      <h1 className="text-3xl font-semibold">{text}</h1>
      <hr className="border-t-4 border-t-purple-400" />
    </div>
  );
}
