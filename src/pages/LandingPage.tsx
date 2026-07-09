import HeroSection from '@components/HeroSection';
import ServicesSection from '@components/ServicesSection';
import FounderSection from '@components/FounderSection';
import PortfolioSection from '@components/PortfolioSection';
import ContactSection from '@components/ContactSection';
import { servicesData, portfolioProject } from '@data/initialData';

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection services={servicesData} />
      <FounderSection />
      <PortfolioSection project={portfolioProject} />
      <ContactSection />
    </main>
  );
}
