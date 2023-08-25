"use client";

import React, { useState } from "react";
import MyTitle from "../@core/components/MyTitle";
import Link from "next/link";
import { BookOpenIcon, BriefCaseIcon } from "../@core/components/icons";

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

const ArrowTopRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="23"
    height="24"
    viewBox="0 0 23 24"
    fill="none"
  >
    <path
      d="M6.70834 16.3745L16.2917 6.79114"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.70834 6.79114H16.2917V16.3745"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const MapMarkerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="20"
    viewBox="0 0 24 25"
    fill="none"
  >
    <g clip-path="url(#clip0_382_146)">
      <path
        d="M21 10.8252C21 17.8252 12 23.8252 12 23.8252C12 23.8252 3 17.8252 3 10.8252C3 8.43825 3.94821 6.14906 5.63604 4.46123C7.32387 2.77341 9.61305 1.8252 12 1.8252C14.3869 1.8252 16.6761 2.77341 18.364 4.46123C20.0518 6.14906 21 8.43825 21 10.8252Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 13.8252C13.6569 13.8252 15 12.482 15 10.8252C15 9.16834 13.6569 7.8252 12 7.8252C10.3431 7.8252 9 9.16834 9 10.8252C9 12.482 10.3431 13.8252 12 13.8252Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_382_146">
        <rect
          width="24"
          height="24"
          fill="white"
          transform="translate(0 0.825195)"
        />
      </clipPath>
    </defs>
  </svg>
);

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
      <MyTitle text="Experiences" />
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
              <Link
                href={experienceToShow.company.website}
                target="_blank"
                className="flex align-middle gap-x-1 text-purple-600 hover:text-purple-400 transition-all"
              >
                <ArrowTopRightIcon />
                {experienceToShow.company.name}
              </Link>
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
