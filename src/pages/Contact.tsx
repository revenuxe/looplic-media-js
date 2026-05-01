import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import FooterSection from "@/components/FooterSection";
import AnimatedSection from "@/components/AnimatedSection";
import SEOHead from "@/components/SEOHead";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Contact Looplic – Start Your AI Video, Ad Film or Brand Shoot Project"
        description="Get in touch with Looplic for AI video generation, ad films, UGC, product shoots, brand shoots, scriptwriting and storyboarding. We respond within 24 hours."
        canonical="/contact"
        keywords="contact Looplic, AI video agency, ad film production, UGC agency, product shoot Bangalore, brand shoot, AI media company contact"
      />
      <Navbar />
      <AnimatedSection>
        <ContactForm />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <FooterSection />
      </AnimatedSection>
    </div>
  );
};

export default Contact;
