import { Inter } from "next/font/google";
import Footer from "../components/Footer";
import SectionHero from "./SectionHero";
import SectionLetsConnect from "./SectionLetsConnect";
import SectionMyLatestProject from "./SectionMyLatestProject";
import SectionQuote from "./SectionQuote";
import SectionTechnologyStack from "./SectionTechnologyStack";
import InterestedOn from "./InterestedOn";

export default function Home() {
  return (
    <div className="safe-layout">
      <SectionHero />
      <SectionTechnologyStack />
      <InterestedOn />
      {/* <SectionMyLatestProject /> */}
      <SectionLetsConnect />
      <SectionQuote />
      <Footer />
    </div>
  )
}
