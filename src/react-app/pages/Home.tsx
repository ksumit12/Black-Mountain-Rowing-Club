import Navigation from '@/react-app/components/Navigation';
import Hero from '@/react-app/components/Hero';
import AboutSection from '@/react-app/components/AboutSection';
import ProjectSection from '@/react-app/components/ProjectSection';
import TimelineSection from '@/react-app/components/TimelineSection';
import SimulationResultsSection from '@/react-app/components/SimulationResultsSection';
import TeamSection from '@/react-app/components/TeamSection';
import MapSection from '@/react-app/components/MapSection';
import Footer from '@/react-app/components/Footer';
import RowingAnimation from '@/react-app/components/RowingAnimation';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <RowingAnimation />
      <Hero />
      <AboutSection />
      <ProjectSection />
      <TimelineSection />
      <SimulationResultsSection />
      <TeamSection />
      <MapSection />
      <Footer />
    </div>
  );
}
