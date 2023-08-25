import React from "react";

import Image from "next/image";
import {
  BehanceIcon,
  DiscordIcon,
  GitHubIcon,
  LinkedInIcon,
} from "../@core/components/icons";
import SocialMediaButton from "../@core/components/buttons/SocialMediaButton";

export default function Profile() {
  return (
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
  );
}
