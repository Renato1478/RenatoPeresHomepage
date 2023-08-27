"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import ThemeToggleButton from "./ThemeToggleButton";

export default function Header() {
  const [activeSessionIndicatorXPosition, setActiveSessionIndicatorXPosition] =
    useState<number>(14.5);
  const [activeSessionId, setActiveSessionId] = useState("s-hero");

  const updateActiveSessionIndicator = (sessionId: string) => {
    const navLink = window.document.getElementById(`link-${sessionId}`);
    if (navLink) {
      const newXPosition = navLink.offsetLeft + navLink.offsetWidth / 2 - 8; // 8 = 16/2 (16 is the width of the active indicator);
      setActiveSessionIndicatorXPosition(newXPosition);
    }
  };

  useEffect(() => {
    const sections = window.document.querySelectorAll(".section");

    window.onscroll = () => {
      sections.forEach((sec: any) => {
        const scrollY = window.scrollY;
        const sectionY = sec.offsetTop;
        const sectionHeight = sec.offsetHeight;
        const id = sec.getAttribute("id");

        if (
          scrollY >= sectionY - sectionHeight / 1.5 - 100 &&
          scrollY < scrollY + sectionHeight
        ) {
          if (id) {
            updateActiveSessionIndicator(id);
            setActiveSessionId(id);
          }
        }
      });
    };
  }, []);

  const onClickSectionLink = (e: any) => {
    e.preventDefault();

    const sectionToScroll = window.document.getElementById(
      e.target.getAttribute("href").split("#")[1]
    );

    if (sectionToScroll) {
      let targetYPosition = sectionToScroll.offsetTop - 50;

      if (sectionToScroll.getAttribute("id") === "s-aboutme")
        targetYPosition -= 200;

      window.scrollTo({ top: targetYPosition, behavior: "smooth" });
    }
  };

  const sectionLinks = [
    {
      id: "link-s-hero",
      title: "Home",
      href: "#s-hero",
    },
    {
      id: "link-s-aboutme",
      title: "About",
      href: "#s-aboutme",
    },
    {
      id: "link-s-whatido",
      title: "Skills",
      href: "#s-whatido",
    },
    {
      id: "link-s-collaborations",
      title: "Work",
      href: "#s-collaborations",
    },
    {
      id: "link-s-experiences",
      title: "Experience",
      href: "#s-experiences",
    },
  ];

  return (
    <nav className="w-full fixed backdrop-blur-md bg-white bg-opacity-75 dark:bg-opacity-5 z-50">
      <div className="wrapper flex justify-between py-4 m-auto">
        <div className="text-2xl">
          Renato{" "}
          <span className="text-purple-600 dark:text-purple-500 font-semibold">
            Peres
          </span>
        </div>
        <div className="relative">
          <ul className="flex gap-x-8 items-center">
            {sectionLinks.map((sectionLink) => {
              return (
                <li key={sectionLink.id}>
                  <Link
                    id={sectionLink.id}
                    href={sectionLink.href}
                    onClick={onClickSectionLink}
                    className={`text-zinc-400 ${
                      activeSessionId === sectionLink.href.split("#")[1]
                        ? "text-zinc-950 dark:text-white"
                        : ""
                    }`}
                  >
                    {sectionLink.title}
                  </Link>
                </li>
              );
            })}
            <li>
              <ThemeToggleButton />
            </li>
          </ul>
          <div
            className="absolute w-4 h-1/6 rounded-full bg-purple-400 transition-all"
            style={{ left: activeSessionIndicatorXPosition }}
          />
        </div>
      </div>
    </nav>
  );
}
