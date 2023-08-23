import React from "react";
import MyTitle from "../@core/components/MyTitle";

export default function AboutMe() {
  return (
    <div className="wrapper pt-12">
      <MyTitle text="About me" />
      <div className="pt-6">
        Working in web development for over 3 years, I have collaborated on
        projects that have impacted more than 15000+ users across Brazil,
        ranging from promising startups to large companies.{" "}
        <span className="text-purple-600 font-semibold">
          I design and code simple things, and I love it.
        </span>
      </div>
    </div>
  );
}
