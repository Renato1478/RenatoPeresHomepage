"use client";

import React, { useState } from "react";
import SectionTitle from "../@core/components/SectionTitle";
import PaginationButton from "../@core/components/buttons/PaginationButton";

import CustomLink from "../@core/components/CustomLink";
import { ArrowTopRightIcon } from "../@core/components/icons";

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
    <div id="s-collaborations" className="section wrapper pt-32">
      <SectionTitle text="Collaborations" />
      <div className="pt-16">
        {/* Details */}
        <div className="h-60 flex">
          <img
            src={collaborationToShow.image}
            alt={collaborationToShow.title}
            className="h-full box-content border-2 border-zinc-400 dark:border-zinc-800"
          />
          <div className="pl-8">
            <div className="flex align-middle justify-between">
              <h2 className="text-2xl">{collaborationToShow.title}</h2>
              <div className="flex align-middle gap-x-8">
                <CustomLink
                  href={collaborationToShow.company.website}
                  target="_blank"
                >
                  <ArrowTopRightIcon />
                  {collaborationToShow.company.name}
                </CustomLink>
                <CustomLink href={collaborationToShow.website} target="_blank">
                  <ArrowTopRightIcon />
                  Visit website
                </CustomLink>
              </div>
            </div>
            <div className="pt-6">
              <span className="text-zinc-500">
                {collaborationToShow.description}
              </span>
              <div className="pt-4">
                <span>My collaboration:</span>{" "}
                <span className="text-zinc-500">
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
                key={collaboration.id}
                onClick={() => {
                  setCollaborationToShow(collaboration);
                }}
                isActive={collaboration.id === collaborationToShow.id}
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
