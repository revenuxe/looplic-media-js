import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import FooterSection from "@/components/FooterSection";
import AnimatedSection from "@/components/AnimatedSection";
import SeoAnswerSummary from "@/components/SeoAnswerSummary";
import SEOHead from "@/components/SEOHead";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Contact Looplic | Hire an AI Video, Ad Film & UGC Studio in 24 Hours"
        description="Brief Looplic Media on your next AI video, ad film, UGC, product shoot, motion graphics or brand campaign. Bangalore-based AI media studio, since 2025. We respond within 24 hours."
        canonical="/contact"
        keywords="contact Looplic, hire AI video agency, ad film production company Bangalore, UGC agency India, product shoot studio, brand shoot, AI media company contact, get a quote video production"
      />
      <Navbar />
      <AnimatedSection>
        <ContactForm />
      </AnimatedSection>
      <SeoAnswerSummary
        eyebrow="Contact Summary"
        title="Brief Looplic for AI video, ad film, UGC and production work."
        answer="Use the form to share your project type, brand, timeline and goals. Looplic reviews each brief and responds with a practical next step for production, creative direction or a custom quote."
        points={[
          "Bangalore-based, serving Indian and global brands",
          "AI video, UGC, ad films, product and brand shoots",
          "Project plans built around deliverables, timelines and channels",
        ]}
      />
      <AnimatedSection delay={0.1}>
        <FooterSection />
      </AnimatedSection>
    </div>
  );
};

export default Contact;
