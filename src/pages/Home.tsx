import Hero from "../components/Hero";
import Features from "../components/Features";
import CaseStudies from "../components/CaseStudies";
import Services from "../homepages/ServicesHome";
import ClientsSection from "../homepages/ClientsSection";
import StatsSection from "../homepages/StatsSection";
import Team from "../homepages/Team";


function Home() {
  return (
    <>
      <Hero />
      <Features />
      <StatsSection />
      <Services />
      <ClientsSection />
      <Team />
      <CaseStudies />
    </>
  );
}

export default Home;
