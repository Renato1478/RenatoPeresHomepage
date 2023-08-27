"use client";

import React, { useState } from "react";
import SectionTitle from "../@core/components/SectionTitle";
import {
  ArrowTopRightIcon,
  BookOpenIcon,
  BriefCaseIcon,
  MapMarkerIcon,
} from "../@core/components/icons";
import CustomLink from "../@core/components/CustomLink";

type ExperienceProps = {
  id: number;
  title: string;
  description: string;
  beginning: string;
  end?: string;
  education?: boolean;
  company: {
    name: string;
    website: string;
    place: string;
  };
};

const clickAtivo = {
  name: "Clickativo",
  website: "https://clickativo.com.br/",
  place: "Vila Velha - ES",
};

const hiparc = {
  name: "Hiparc Geotecnologia",
  website: "http://www.hiparc.com.br/",
  place: "Vitória - ES",
};

const ifes = {
  name: "IFES",
  website: "https://www.serra.ifes.edu.br/",
  place: "Serra - ES",
};

const experiences: ExperienceProps[] = [
  {
    id: 1,
    title: "Fullstack Developer",
    description: `Operating in an agile development methodology, I have developed various client
      applications across different sectors and sizes. Some applications consist of a course marketplace,
      a vehicle dealership management system, and many others...`,
    beginning: "Jan 2021",
    company: clickAtivo,
  },
  {
    id: 2,
    title: "Web Development Intern",
    description: `As my first job experience, I collaborated in a land management system for the municipality of Serra.
      With that, learned the basics about docker, laravel (PHP), design patterns such as MVC, and much more.`,
    beginning: "Dec 2019",
    end: "Dec 2020",
    company: hiparc,
  },
  {
    id: 3,
    title: "Bachelor of Information Systems",
    description: `During the course, I got to learn the theoretical basics of the entire software development process.
      From discussing requirements with clients to writing actual lines of code. We also explored exciting topics like
      Machine Learning and Business Intelligence, expanding our knowledge beyond the usual.`,
    beginning: "Jan 2019",
    company: ifes,
    education: true,
  },
];

export default function Experiences() {
  const [experienceToShow, setExperienceToShow] = useState<ExperienceProps>(
    experiences[1]
  );

  return (
    <div id="s-experiences" className="section wrapper pt-32 max-md:pt-24">
      <SectionTitle text="Experiences" />
      <div className="flex pt-16 max-md:pt-12 max-md:flex-col h-fit">
        {/* Nav */}
        <div className="w-64 max-md:w-full min-w-64 border-0 bg-zinc-100">
          <div className="flex gap-x-2 p-2 px-3 text-zinc-500 bg-gradient-to-r from-zinc-200 from-80% to-purple-200 dark:from-[#1F1435] dark:to-purple-950">
            <BriefCaseIcon width={20} /> Work
          </div>
          {experiences
            .filter((exp) => !exp.education)
            .map((experience, i) => (
              <div
                key={experience.id}
                className={`px-4 py-4 cursor-pointer duration-300 ease-in-out border-l-4 dark:bg-[#150e24] ${
                  experienceToShow.id === experience.id
                    ? "border-purple-400"
                    : "border-transparent"
                }`}
                onClick={() => {
                  setExperienceToShow(experience);
                }}
              >
                {experience.company.name}
              </div>
            ))}
          <div className="flex gap-x-2 p-2 px-3 text-zinc-500 bg-gradient-to-r from-zinc-200 from-60% to-red-200 dark:from-[#1F1435] dark:to-red-950">
            <BookOpenIcon width={20} />
            Education
          </div>
          {experiences
            .filter((exp) => exp.education)
            .map((experience, i) => (
              <div
                key={experience.id}
                className={`px-4 py-4 cursor-pointer duration-300 ease-in-out border-l-4 dark:bg-[#150e24] ${
                  experienceToShow.id === experience.id
                    ? "border-purple-400"
                    : "border-transparent"
                }`}
                onClick={() => {
                  setExperienceToShow(experience);
                }}
              >
                {experience.company.name}
              </div>
            ))}
        </div>
        {/* Container */}
        <div className="pl-8 max-md:pl-0 max-md:pt-6 w-full">
          {/* Header */}
          <div className="flex max-md:flex-col max-md:gap-y-4 align-middle justify-between">
            <h2 className="text-2xl">{experienceToShow.title}</h2>
            <div className="flex items-center text-zinc-500">
              {experienceToShow.beginning} - {experienceToShow.end || "Present"}
            </div>
          </div>
          {/* Content */}
          <div className="pt-6">
            <div className="flex gap-x-4">
              <CustomLink
                href={experienceToShow.company.website}
                target="_blank"
              >
                <ArrowTopRightIcon />
                {experienceToShow.company.name}
              </CustomLink>
              <span className="flex items-center gap-x-1 text-zinc-600">
                <MapMarkerIcon />
                {experienceToShow.company.place}
              </span>
            </div>
            <div className="pt-6">
              <span className="text-zinc-500">
                {experienceToShow.description}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
