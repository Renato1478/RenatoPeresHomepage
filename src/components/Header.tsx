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
    <nav className="w-full fixed backdrop-blur-md bg-white bg-opacity-75 dark:bg-opacity-5 z-50 dark:bg-zinc-400">
      <div className="wrapper flex justify-between py-4 m-auto">
        {/* <div className="text-2xl">
          Renato{" "}
          <span className="text-purple-600 dark:text-purple-500 font-semibold">
            Peres
          </span>
        </div> */}
        <span className="flex text-purple-600 dark:text-purple-500 font-semibold">
          <svg
            width={"26"}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 286.21 353.87"
          >
            <g data-name="Layer 2">
              <g data-name="Layer 1">
                <path
                  className="dark:fill-white fill-zinc-950"
                  d="M143.4 61.67q19.2 0 33.11 6.32A48.76 48.76 0 0 1 198 86.19q7.58 11.88 7.58 28.56T198 143.32a46.8 46.8 0 0 1-9.58 10.81l31.94 56.61q28.47-14.09 43.86-39.12 15.66-25.51 15.67-58.89 0-33.86-15.67-59.14t-45-39.44Q189.91 0 148 0h-46.56l34.8 61.67Z"
                />
                <path
                  className="fill-purple-600 dark:fill-purple-500"
                  d="m286.21 353.87-80.76-143.13-31.95-56.61-52.17-92.46L86.53 0H14.24l88.47 167.83 30.38 57.63 67.69 128.41h85.43z"
                />
                <path
                  className="dark:fill-white fill-zinc-950"
                  d="M0 0v353.87h72.28V137.13L0 0z"
                />
              </g>
            </g>
          </svg>
        </span>
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
            className="absolute w-4 h-1.5 rounded-full bg-purple-400 transition-all"
            style={{ left: activeSessionIndicatorXPosition }}
          />
        </div>
      </div>
    </nav>
  );
}
