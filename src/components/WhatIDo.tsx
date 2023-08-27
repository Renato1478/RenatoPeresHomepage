import React from "react";
import SectionTitle from "../@core/components/SectionTitle";
import { Backend, DesignIcon, FrontendIcon } from "../@core/components/icons";

export default function WhatIDo() {
  return (
    <div id="s-whatido" className="section wrapper pt-32">
      <SectionTitle text="What I do?" position="center" />
      {/* Card List */}
      <div className="flex pt-12 justify-center gap-x-12">
        {/* Design */}
        <div className="mt-8 h-60 flex flex-col w-1/3 p-6 border-solid border-2 border-zinc-300 hover:border-purple-400 dark:border-zinc-800 dark:hover:border-purple-400 transition ease-in-out duration-300">
          <div className="flex gap-x-2 align-middle">
            <div className="text-purple-600">
              <DesignIcon />
            </div>
            <h1 className="text-2xl font-semibold dark:text-white">Design</h1>
          </div>
          <div className="pt-4">
            <h2 className="text-zinc-700 dark:text-white">
              Things I enjoy designing:
            </h2>
            <ul className="space-y-1 text-zinc-500 dark:text-zinc-500 list-disc list-inside">
              <li>Apps</li>
              <li>Websites</li>
              <li>Logos</li>
              <li>3D Models</li>
            </ul>
          </div>
        </div>
        {/* Frontend */}
        <div className="flex h-60 flex-col w-1/3 p-6 border-solid border-2 transition ease-in-out border-zinc-300 hover:border-violet-400 dark:border-zinc-800 dark:hover:border-violet-400 duration-300">
          <div className="flex gap-x-2 align-middle">
            <div className="text-violet-600">
              <FrontendIcon />
            </div>
            <h1 className="text-2xl font-semibold">Frontend</h1>
          </div>
          <div className="pt-4">
            <h2 className="text-zinc-700 dark:text-white">
              Frameworks I usually work with:
            </h2>
            <ul className="space-y-1 text-zinc-500 dark:text-zinc-500 list-disc list-inside">
              <li>Next.js</li>
              <li>Three.js / WebGL</li>
              <li>React Native</li>
              <li>Tailwindcss</li>
            </ul>
          </div>
        </div>
        {/* Backend */}
        <div className="mt-8 h-60 flex flex-col w-1/3 p-6 border-solid border-2 transition ease-in-out border-zinc-300 hover:border-red-400 dark:border-zinc-800 dark:hover:border-red-400 duration-300">
          <div className="flex gap-x-2 align-middle">
            <div className="text-red-400">
              <Backend />
            </div>
            <h1 className="text-2xl font-semibold">Backend</h1>
          </div>
          <div className="pt-4">
            <h2 className="text-zinc-700 dark:text-white">
              Some tools I'm used to:
            </h2>
            <ul className="space-y-1 text-zinc-500 dark:text-zinc-500 list-disc list-inside">
              <li>NodeJS</li>
              <li>Laravel</li>
              <li>PostgresSQL</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
