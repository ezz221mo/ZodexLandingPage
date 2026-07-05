import HeroSection from '@components/HeroSection';
import ServicesSection from '@components/ServicesSection';
import FounderSection from '@components/FounderSection';
import PortfolioSection from '@components/PortfolioSection';
import ContactSection from '@components/ContactSection';
import type { Project } from '@types/index';
import type { ServiceItem } from '@types/index';

interface LandingPageProps {
  projects: Project[];
  isLoading: boolean;
  services: ServiceItem[];
}

export default function LandingPage({ projects, isLoading, services }: LandingPageProps) {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection services={services} />
      <FounderSection />
      <PortfolioSection projects={projects} isLoading={isLoading} />
      <ContactSection />
    </main>
  );
}
