import React from "react";
import "./App.css";
import Header from "./components/header";
import { HeroSection } from "./components/herosection";
import RecentWork from "./components/recentwork";
import HowItWork from "./components/howitwork";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <RecentWork />
      <HowItWork />
    </>
  );
}

export default App;
