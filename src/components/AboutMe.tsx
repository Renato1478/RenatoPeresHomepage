import React from "react";

import Image from "next/image";
import {
  BehanceIcon,
  DiscordIcon,
  GitHubIcon,
  LinkedInIcon,
} from "../@core/components/icons";
import SocialMediaButton from "../@core/components/buttons/SocialMediaButton";
import SectionTitle from "../@core/components/SectionTitle";

const SocialLinksList = () => (
  <div className="flex pt-4 gap-x-2">
    <SocialMediaButton href="https://github.com/Renato1478">
      <GitHubIcon />
    </SocialMediaButton>
    <SocialMediaButton href="https://www.behance.net/renatosouza32">
      <BehanceIcon />
    </SocialMediaButton>
    <SocialMediaButton href="https://www.linkedin.com/in/renato-peres-401137179/">
      <LinkedInIcon />
    </SocialMediaButton>
    <SocialMediaButton href="https://discord.gg/USufuNnp">
      <DiscordIcon />
    </SocialMediaButton>
  </div>
);

export default function Profile() {
  return (
    <div id="s-aboutme" className="section">
      {/* Profile */}
      <div className="wrapper pt-4">
        <div className="flex align-middle gap-x-6">
          <Image
            src={"/images/renato-profile-photo.jpg"}
            alt="Renato Profile Photo"
            width={200}
            height={200}
            className="max-md:h-32 max-md:w-32 rounded-full"
          />
          <div className="flex flex-col gap-y-2">
            <div className="text-3xl">
              Renato{" "}
              <span className="text-purple-600 dark:text-purple-500 font-semibold">
                Peres
              </span>
            </div>
            <span>Cyber Magician (Designer / Developer)</span>
            <div className="max-md:hidden">
              <SocialLinksList />
            </div>
          </div>
        </div>
        <div className="hidden max-md:flex justify-center">
          <SocialLinksList />
        </div>
      </div>
      {/* Content */}
      <div className="wrapper pt-12">
        <SectionTitle text="About me" />
        <div className="pt-8 dark:text-slate-400">
          My name is Renato, I&apos;m 23 years old. I like running, hiking, gaming
          and, of course...{" "}
          <span className="text-red-400 font-bold">CODING!</span> I&apos;ve been
          working in web development for over 3 years and have collaborated on
          projects that impacted more than 15000+ users across Brazil, ranging
          from promising startups to large companies.{" "}
          <span className="text-purple-600 dark:text-purple-500 font-semibold">
            I design and code simple things, and I love it.
          </span>
        </div>
      </div>
    </div>
  );
}
