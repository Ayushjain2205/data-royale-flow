import React from "react";
import LandingCard from "../components/Cards/LandingCard";

const Home = () => {
  return (
    <div className="flex flex-row gap-[100px] justify-center align-center mt-[150px]">
      <LandingCard type="create" />
      <LandingCard type="explore" />
    </div>
  );
};

export default Home;
