import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import GoalsSection from "@/components/GoalsSection";
import TestimonialSection from "@/components/TestimonialSection";
import ContactForm from "@/components/ContactForm";
import FooterSection from "@/components/FooterSection";
import AnimatedSection from "@/components/AnimatedSection";
import SeoAnswerSummary from "@/components/SeoAnswerSummary";

import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="media.x by revenuxe – AI Media Company | AI Video, Ad Films, UGC & Product Shoots"
        description="media.x by revenuxe is an AI media company building AI videos, ad films, UGC-style content, product & brand shoots, scriptwriting and storyboarding for modern brands."
        canonical="/"
        keywords="AI media company, AI video generation, ad film production, UGC content, product photography, brand shoots, AI scriptwriting, storyboarding, content production agency"
      />
      <Navbar />
      <AnimatedSection>
        <HeroSection />
      </AnimatedSection>
      <SeoAnswerSummary
        title="media.x by revenuxe is an AI media studio for brands that need more high-performing content."
        answer="media.x by revenuxe helps D2C, SaaS, creator-led and enterprise brands produce AI videos, ad films, UGC ads, product photography, brand shoots, motion graphics and performance creative from one Bangalore-based production partner."
        points={[
          "Best for AI video, ad films, UGC and product content",
          "Combines generative AI speed with real production craft",
          "Built for paid ads, social content, launches and brand campaigns",
        ]}
      />
      <AnimatedSection delay={0.1}>
        <StatsSection />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <ServicesSection />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <GoalsSection />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <TestimonialSection />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <ContactForm />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <FooterSection />
      </AnimatedSection>
    </div>
  );
};

export default Index;
