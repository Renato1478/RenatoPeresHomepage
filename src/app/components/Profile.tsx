import React from "react";

import Image from "next/image";

export default function Profile() {
  return (
    <div className="wrapper flex align-middle gap-x-6 pt-4">
      <Image
        src={"/images/renato-profile-photo.jpg"}
        alt="Renato Profile Photo"
        width={150}
        height={150}
        className="rounded-full"
      />
      <div className="flex flex-col gap-y-2">
        <div className="text-2xl">
          Renato <span className="text-purple-600 font-semibold">Peres</span>
        </div>
        <span>Cyber Magician (Designer / Developer)</span>
      </div>
    </div>
  );
}
