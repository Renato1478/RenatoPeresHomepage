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

export default function Profile() {
  return (
    <div id="s-aboutme" className="section">
      <div className="wrapper flex align-middle gap-x-6 pt-4">
        <Image
          src={"/images/renato-profile-photo.jpg"}
          alt="Renato Profile Photo"
          width={200}
          height={200}
          className="rounded-full"
        />
        <div className="flex flex-col gap-y-2">
          <div className="text-3xl">
            Renato <span className="text-purple-600 font-semibold">Peres</span>
          </div>
          <span>Cyber Magician (Designer / Developer)</span>
          <div className="flex pt-4 gap-x-2">
            <SocialMediaButton>
              <GitHubIcon />
            </SocialMediaButton>
            <SocialMediaButton>
              <BehanceIcon />
            </SocialMediaButton>
            <SocialMediaButton>
              <LinkedInIcon />
            </SocialMediaButton>
            <SocialMediaButton>
              <DiscordIcon />
            </SocialMediaButton>
          </div>
        </div>
      </div>
      <div className="wrapper pt-12">
        <SectionTitle text="About me" />
        <div className="pt-8">
          My name is Renato, I'm 23 years old. I like running, hiking, gaming
          and, of course...{" "}
          <span className="text-red-400 font-bold">CODING!</span> I've been
          working in web development for over 3 years and have collaborated on
          projects that impacted more than 15000+ users across Brazil, ranging
          from promising startups to large companies.{" "}
          <span className="text-purple-600 font-semibold">
            I design and code simple things, and I love it.
          </span>
        </div>
      </div>
    </div>
  );
}
