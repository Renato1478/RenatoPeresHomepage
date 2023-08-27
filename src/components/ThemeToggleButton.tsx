"use client";

import React, { useEffect, useState } from "react";
import useDarkMode from "@/hooks/useDarkMode";
import { MoonIcon, SunIcon } from "@/@core/components/icons";

export default function ThemeToggleButton() {
  const [isMounted, setIsMounted] = useState<boolean>();
  const { enabled, setEnabled } = useDarkMode();

  const handleToggleTheme = () => setEnabled(!enabled);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <button
      className="rounded-md p-2 text-white bg-purple-600 hover:bg-purple-800 dark:bg-red-400 dark:hover:bg-red-600 transition ease-in-out duration-300"
      onClick={handleToggleTheme}
    >
      {isMounted && enabled ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
