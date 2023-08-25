"use client";

import React, { useState } from "react";
import SectionTitle from "../@core/components/SectionTitle";
import Link from "next/link";
import { ArrowTopRightIcon, BookOpenIcon, BriefCaseIcon, MapMarkerIcon } from "../@core/components/icons";
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
    <div className="wrapper pt-32">
      <SectionTitle text="Experiences" />
      <div className="flex pt-16 h-fit">
        {/* Nav */}
        <div className="w-64 min-w-64 border-0 bg-gray-100">
          <div className="flex gap-x-2 p-2 px-3 text-gray-500 bg-gradient-to-r from-gray-200 from-80% to-purple-200">
            <BriefCaseIcon width={20} /> Work
          </div>
          {experiences
            .filter((exp) => !exp.education)
            .map((experience, i) => (
              <div
                className={`px-4 py-4 cursor-pointer duration-300 ease-in-out border-l-4 ${
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
          <div className="flex gap-x-2 p-2 px-3 text-gray-500 bg-gradient-to-r from-gray-200 from-80% to-red-200">
            <BookOpenIcon width={20} />
            Education
          </div>
          {experiences
            .filter((exp) => exp.education)
            .map((experience, i) => (
              <div
                className={`px-4 py-4 cursor-pointer transition duration-300 ease-in-out border-l-4 ${
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
        <div className="pl-8 w-full">
          <div className="flex align-middle justify-between">
            <h2 className="text-2xl font-semibold">{experienceToShow.title}</h2>
            <div className="flex items-center text-gray-500">
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
              <span className="flex items-center gap-x-1 text-gray-600">
                <MapMarkerIcon />
                {experienceToShow.company.place}
              </span>
            </div>
            <div className="pt-6">
              <span className="text-gray-500">
                {experienceToShow.description}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
