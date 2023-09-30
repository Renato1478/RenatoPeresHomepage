import React from "react";
import SectionTitle from "../@core/components/SectionTitle";
import { Backend, DesignIcon, FrontendIcon } from "../@core/components/icons";

export default function WhatIDo() {
  return (
    <div id="s-whatido" className="section wrapper pt-32 max-md:pt-24">
      <SectionTitle text="What I do?" position="center" />
      {/* Card List */}
      <div className="flex max-md:flex-col pt-12 justify-center gap-x-12">
        {/* Design */}
        <div className="mt-8 max-md:mt-0 h-60 flex flex-col w-1/3 max-md:w-full p-6 rounded-md bg-slate-50 dark:bg-opacity-5">
          <div className="flex gap-x-2 align-middle">
            <div className="text-purple-600">
              <DesignIcon />
            </div>
            <h1 className="text-2xl font-semibold dark:text-white">Design</h1>
          </div>
          <div className="pt-4">
            <h2 className="text-slate-400 dark:text-slate-400">
              Things I enjoy designing:
            </h2>
            <ul className="space-y-1 pt-3 text-slate-600 dark:text-white list-disc list-inside">
              <li>Apps</li>
              <li>Websites</li>
              <li>Logos</li>
              <li>3D Models</li>
            </ul>
          </div>
        </div>
        {/* Frontend */}
        <div className="flex h-60 max-md:mt-4 flex-col w-1/3 max-md:w-full p-6 rounded-md bg-slate-50 dark:bg-opacity-5">
          <div className="flex gap-x-2 align-middle">
            <div className="text-violet-600">
              <FrontendIcon />
            </div>
            <h1 className="text-2xl font-semibold">Frontend</h1>
          </div>
          <div className="pt-4">
            <h2 className="text-slate-400 dark:text-slate-400">
              Frameworks I usually work with:
            </h2>
            <ul className="space-y-1 pt-3 text-slate-600 dark:text-white list-disc list-inside">
              <li>Next.js</li>
              <li>Three.js / WebGL</li>
              <li>React Native</li>
              <li>Tailwindcss</li>
            </ul>
          </div>
        </div>
        {/* Backend */}
        <div className="mt-8 max-md:mt-4 h-60 flex flex-col w-1/3 max-md:w-full p-6 rounded-md bg-slate-50 dark:bg-opacity-5">
          <div className="flex gap-x-2 align-middle">
            <div className="text-red-400">
              <Backend />
            </div>
            <h1 className="text-2xl font-semibold">Backend</h1>
          </div>
          <div className="pt-4">
            <h2 className="text-slate-400 dark:text-slate-400">
              Some tools I&apos;m used to:
            </h2>
            <ul className="space-y-1 pt-3 text-slate-600 dark:text-white list-disc list-inside">
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
