import React from "react";
import GetInTouch from "../components/GetInTouch";
import ComingSoon from "./ComingSoon/ComingSoon";
import HeroSection from "../components/HeroSection";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <ComingSoon></ComingSoon>
      <GetInTouch></GetInTouch>
    </div>
  );
};

export default Home;
