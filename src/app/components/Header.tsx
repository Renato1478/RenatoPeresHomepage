"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [activeSessionIndicatorXPosition, setActiveSessionIndicatorXPosition] =
    useState<number>(14.5);

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
    <nav className="w-full fixed backdrop-blur-md bg-white bg-opacity-75 z-50">
      <div className="wrapper flex justify-between py-4 m-auto">
        <div className="text-2xl">
          Renato <span className="text-purple-600 font-semibold">Peres</span>
        </div>
        <div className="relative">
          <ul className="flex gap-x-8 items-center">
            {sectionLinks.map((sectionLink) => (
              <li key={sectionLink.id}>
                <Link
                  id={sectionLink.id}
                  href={sectionLink.href}
                  onClick={onClickSectionLink}
                >
                  {sectionLink.title}
                </Link>
              </li>
            ))}
            <li>
              <button className="rounded-md p-2 bg-gradient-to-b bg-purple-600 hover:from-purple-600 hover:to-red-400 transition ease-in-out duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 27 28"
                  fill="none"
                  style={{ marginTop: "-2px" }}
                >
                  <path
                    d="M23.6458 15.1332C23.4699 17.0364 22.7557 18.8501 21.5866 20.3621C20.4175 21.8742 18.842 23.022 17.0445 23.6713C15.2469 24.3206 13.3015 24.4445 11.4361 24.0286C9.5706 23.6126 7.86219 22.674 6.51072 21.3225C5.15925 19.9711 4.22062 18.2626 3.80467 16.3972C3.38871 14.5317 3.51264 12.5864 4.16194 10.7888C4.81125 8.99121 5.95907 7.4157 7.47111 6.24665C8.98315 5.0776 10.7969 4.36335 12.7 4.18747C11.5858 5.69491 11.0496 7.5522 11.189 9.42155C11.3284 11.2909 12.1341 13.0481 13.4596 14.3736C14.7851 15.6991 16.5424 16.5048 18.4117 16.6442C20.2811 16.7837 22.1383 16.2475 23.6458 15.1332Z"
                    fill="white"
                  />
                </svg>
              </button>
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
