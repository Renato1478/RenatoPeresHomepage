import React from "react";
import SectionTitle from "../@core/components/SectionTitle";

export default function AboutMe() {
  return (
    <div className="wrapper pt-12">
      <SectionTitle text="About me" />
      <div className="pt-8">
        My name is Renato, I'm 23 years old. I like running, hiking, gaming and, of course... <span className="text-red-400 font-bold">CODING!</span> I've been working in web development for over 3 years and have collaborated on
        projects that impacted more than 15000+ users across Brazil,
        ranging from promising startups to large companies.{" "}
        <span className="text-purple-600 font-semibold">
          I design and code simple things, and I love it.
        </span>
      </div>
    </div>
  );
}
