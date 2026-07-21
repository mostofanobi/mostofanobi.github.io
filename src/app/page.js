import AboutMe from "@/components/about-me/index";
import CareerJourney from "@/components/career-journey";
import HighlightedWork from "@/components/highlighted-work";
import SideProjects from "@/components/side-projects";
import ScrollablePortfolio from "@/components/scrollable-portfolio";

export default function Home() {
  return (
    <ScrollablePortfolio>
      <AboutMe />
      <CareerJourney />
      <HighlightedWork />
      <SideProjects />
      <div
        className="w-[0.5px] shrink-0"
        data-aria-hidden="true"
        aria-hidden="true"
      />
    </ScrollablePortfolio>
  );
}
