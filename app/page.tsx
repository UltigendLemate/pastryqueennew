import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Story from "@/components/Story";
import Challenge from "@/components/Challenge";
import Recap from "@/components/Recap";
import Gallery from "@/components/Gallery";
import Participants from "@/components/Participants";
import Details from "@/components/Details";
import Apply from "@/components/Apply";
import Organisers from "@/components/Organisers";
import Sponsors from "@/components/Sponsors";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Story />
      <Challenge />
      <Recap />
      <Gallery />
      <Participants />
      <Details />
      <Apply />
      <Organisers />
      <Sponsors />
      <Contact />
    </>
  );
}
