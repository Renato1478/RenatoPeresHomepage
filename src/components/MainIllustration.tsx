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

  if (isMounted && enabled)
    return enabled ? (
      <Image
        src={"/images/renato_during_night.svg"}
        alt="Renato during the night"
        width={487}
        height={350}
      />
    ) : (
      <>okok</>
    );
  else
    return (
      <Image
        src={"/images/renato_during_day.svg"}
        alt="Renato during the day"
        width={487}
        height={350}
      />
    );
}
