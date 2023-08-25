"use client";

import React, { useState } from "react";
import MyTitle from "../@core/components/MyTitle";
import PaginationButton from "../@core/components/buttons/PaginationButton";
import Link from "next/link";

type CollaborationType = {
  id: number;
  title: string;
  description: string;
  website: string;
  role_description: string;
  image: string;
  company: {
    name: string;
    website: string;
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

const collaborations: CollaborationType[] = [
  {
    id: 1,
    title: "Nicatto Pós-Vendas",
    description:
      "A system for handling data in a dealership, recording information and generating reports from vehicle entry to departure.",
    website: "https://nicatto.com.br/",
    image: "/images/collaborations/collaboration-nicatto.jpg",
    role_description:
      "I held the responsibility of conceptualizing and crafting numerous features, providing user support through bug resolution, and actively gathering feedback from stakeholders.",
    company: {
      name: "Clickativo",
      website: "https://clickativo.com.br/",
    },
  },
  {
    id: 2,
    title: "HiparcSIG",
    description: "A land management system for the municipality of Serra.",
    website: "http://serra.hiparc.com/login",
    image: "/images/collaborations/collaboration-hiparcsig.jpg",
    role_description:
      "Within this project, I harnessed the power of OpenStreetMap's API, leveraging it to create an array of dynamic features seamlessly integrated into an interactive map interface. My contributions encompassed the development of multiple functionalities, enhancing the overall user experience and enabling efficient land management for the municipality.",
    company: {
      name: "Hiparc",
      website: "http://www.hiparc.com.br/",
    },
  },
  {
    id: 3,
    title: "Jurispesca",
    description:
      "A system that enables fishermen affected by disasters to participate in collective actions and digitally sign the related documents.",
    website: "https://jurispesca.com.br/auth/login",
    image: "/images/collaborations/collaboration-jurispesca.jpg",
    role_description:
      "My responsibility involved spearheading the complete development of the application in collaboration with the team, while also engaging with the customer to comprehensively grasp the required features for implementation.",
    company: {
      name: "Clickativo",
      website: "https://clickativo.com.br/",
    },
  },
  {
    id: 4,
    title: "Sala de Cursos",
    description:
      "An online course marketplace that provides an extensive selection of courses across diverse fields.",
    website: "https://saladecursos.com.br/",
    image: "/images/collaborations/collaboration-saladecursos.jpg",
    role_description:
      "My pivotal role encompassed seamless integration of sophisticated payment systems, enabling users to access an immersive learning environment. Additionally, I facilitated the setup for users to effortlessly engage with lessons uploaded by educators on Vimeo, ensuring a streamlined and enriched educational experience.",
    company: {
      name: "Clickativo",
      website: "https://clickativo.com.br/",
    },
  },
];

export default function Collaborations() {
  const [collaborationToShow, setCollaborationToShow] =
    useState<CollaborationType>(collaborations[0]);

  // setInterval(() => {
  //   const currentIndex = collaborations.findIndex(
  //     (c) => c.id === collaborationToShow.id
  //   );
  //   const nextCollaboration = collaborations[currentIndex + 1];
  //   if (nextCollaboration) setCollaborationToShow(nextCollaboration);
  //   else setCollaborationToShow(collaborations[0]);
  // }, 6000);

  return (
    <div className="wrapper pt-32">
      <MyTitle text="Collaborations" />
      <div className="pt-16">
        {/* Details */}
        <div className="h-60 flex">
          <img
            src={collaborationToShow.image}
            alt={collaborationToShow.title}
            className="h-full"
          />
          <div className="pl-8">
            <div className="flex align-middle justify-between">
              <h2 className="text-2xl font-semibold">
                {collaborationToShow.title}
              </h2>
              <div className="flex align-middle gap-x-8">
                <Link
                  href={collaborationToShow.company.website}
                  target="_blank"
                  className="flex align-middle gap-x-1 text-purple-600 hover:text-purple-400 transition-all"
                >
                  <ArrowTopRightIcon />
                  {collaborationToShow.company.name}
                </Link>
                <Link
                  href={collaborationToShow.website}
                  target="_blank"
                  className="flex align-middle gap-x-1 text-purple-600 hover:text-purple-400 transition-all"
                >
                  <ArrowTopRightIcon />
                  Visit website
                </Link>
              </div>
            </div>
            <div className="pt-6">
              <span className="text-gray-500">
                {collaborationToShow.description}
              </span>
              <div className="pt-4">
                <span className="font-semibold">My collaboration:</span>{" "}
                <span className="text-gray-500">
                  {collaborationToShow.role_description}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Pagination */}
        <div className="flex gap-x-2 pt-6">
          {collaborations.map((collaboration, i) => {
            return (
              <PaginationButton
                onClick={() => {
                  setCollaborationToShow(collaboration);
                }}
                active={collaboration.id === collaborationToShow.id}
              >
                {i + 1}
              </PaginationButton>
            );
          })}
        </div>
      </div>
    </div>
  );
}
