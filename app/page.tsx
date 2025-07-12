import Footer from "@/components/Footer";
import InterestedOn from "@/components/InterestedOn";
import SectionHero from "@/components/SectionHero";
import SectionLetsConnect from "@/components/SectionLetsConnect";
import SectionQuote from "@/components/SectionQuote";
import TimelineComponent from "@/components/TimelineComponent";


export default function Home() {
  return (
    <main className="safe-layout" role="main">
      <SectionHero />
      <TimelineComponent />
      <InterestedOn />
      <SectionLetsConnect />
      <SectionQuote />
      <Footer />
    </main>
  )
}
