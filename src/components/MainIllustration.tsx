"use client";

import React, { useEffect, useState } from "react";

import useDarkMode from "@/hooks/useDarkMode";

import Image from "next/image";

export default function MainIllustration() {
  const [isMounted, setIsMounted] = useState<boolean>();
  const { enabled } = useDarkMode();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Image
      src={
        isMounted && enabled
          ? "/images/renato_during_the_night.svg"
          : "/images/renato_during_the_day.svg"
      }
      alt="Renato during the night"
      width={487}
      height={350}
      className="max-md:pt-10 max-md:h-68 max-md:w-80 max-md:opacity-75 max-md:ml-auto transition-all"
    />
  );
}
