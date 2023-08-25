import React from "react";

interface Props {
  text: string;
  position?: "start" | "center";
}

export default function MyTitle({ text, position = "start" }: Props) {
  return (
    <div
      className={`flex flex-col w-fit ${
        position === "center" ? "mx-auto" : null
      }`}
    >
      <h1 className={"text-3xl font-semibold"}>{text}</h1>
      <hr
        className={`${
          position === "center" ? "ml-auto" : null
        } w-4 border-t-4 border-t-purple-400`}
      />
    </div>
  );
}
