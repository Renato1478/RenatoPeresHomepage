import AboutMe from "./components/AboutMe";
import Collaborations from "./components/Collaborations";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import WhatIDo from "./components/WhatIDo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center my-0 mx-auto">
      <Header />
      <Hero />
      <div className="wrapper">
        <div className="my-0 mx-auto py-1" style={{ width: "87%" }}>
          <div className="flex flex-col">
            <div
              className="flex flex-col self-end items-center"
              style={{ marginRight: "-5px" }}
            >
              <span className="bg-purple-400 rounded-full w-3 h-3" />
              <div className="w-0.5 h-16 bg-purple-400" />
            </div>
            <hr className="border-purple-400 border-t-2" />
            <div
              className="flex flex-col self-start items-center"
              style={{ marginLeft: "-5px" }}
            >
              <div className="w-0.5 h-16 bg-purple-400" />
              <span className="bg-purple-400 rounded-full w-3 h-3" />
            </div>
          </div>
        </div>
      </div>
      <Profile />
      <AboutMe />
      <WhatIDo />
      <Collaborations />
      <Footer />
    </main>
  );
}
