import React from "react";
import "./App.css";
import Header from "./components/header";
import { HeroSection } from "./components/herosection";
import RecentWork from "./components/recentwork";
import HowItWork from "./components/howitwork";
import Quote from "./components/quote";
import Pricing from "./components/pricing";
import FAQ from "./components/faq";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <RecentWork />
      <HowItWork />
      <Quote />
      <Pricing />
      <FAQ />
    </>
  );
}

export default App;
