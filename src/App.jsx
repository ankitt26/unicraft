import React from "react";
import "./App.css";
import Header from "./components/header";
import { HeroSection } from "./components/herosection";
import RecentWork from "./components/recentwork";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <RecentWork />
    </>
  );
}

export default App;
