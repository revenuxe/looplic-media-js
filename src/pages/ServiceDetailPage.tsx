import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowUpRight, CheckCircle2, ChevronDown } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import ServicesSection from "@/components/ServicesSection";
import ContactForm from "@/components/ContactForm";
import AnimatedSection from "@/components/AnimatedSection";
import SEOHead from "@/components/SEOHead";
import { serviceDetails, serviceList } from "@/data/serviceDetails";
import imgAiVideo from "@/assets/svc-ai-video.jpg";
import imgProduct from "@/assets/svc-product-shoot.jpg";
import imgUgc from "@/assets/svc-ugc.jpg";
import imgAdfilm from "@/assets/svc-adfilm.jpg";
import imgBrand from "@/assets/svc-brand-shoot.jpg";
import imgScript from "@/assets/svc-script.jpg";
import imgPerformance from "@/assets/svc-performance.jpg";
import imgMotion from "@/assets/svc-motion.jpg";
import imgPodcast from "@/assets/svc-podcast.jpg";
import imgAvatar from "@/assets/svc-avatar.jpg";
import imgEcom from "@/assets/svc-ecom-video.jpg";
import imgSocial from "@/assets/svc-social.jpg";
import heroImg from "@/assets/hero-adfilm.jpg";

const slugImage: Record<string, string> = {
  "ai-video-production": imgAiVideo,
  "product-photography": imgProduct,
  "ugc-content": imgUgc,
  "ad-film-production": imgAdfilm,
  "brand-shoots": imgBrand,
  "scripts-storyboards": imgScript,
  "performance-creative": imgPerformance,
  "motion-graphics": imgMotion,
  "podcast-video": imgPodcast,
  "ai-avatars": imgAvatar,
  "ecommerce-video": imgEcom,
  "social-content": imgSocial,
};

const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const detail = slug ? serviceDetails[slug] : null;
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!detail) return <Navigate to="/" replace />;

  const image = slugImage[detail.slug] || heroImg;
  const related = serviceList.filter((s) => s.slug !== detail.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${detail.title} | Looplic AI Media`}
        description={detail.shortDesc}
        canonical={`/services/${detail.slug}`}
        keywords={detail.keywords}
      />
      <Navbar />

      {/* Hero — same structure as homepage HeroSection */}
      <section className="relative">
        <div className="bg-secondary pt-10 sm:pt-16 pb-24 sm:pb-32 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
          {/* Hexagonal pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id={`hex-${detail.slug}`} width="56" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                  <path d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66Z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-foreground" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#hex-${detail.slug})`} />
            </svg>
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <Link to="/#service" className="text-accent text-sm font-medium uppercase tracking-wider">← Services</Link>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] sm:leading-tight text-foreground">
              <span className="italic font-normal text-accent">{detail.title.split(" ")[0]}</span>{" "}
              {detail.title.split(" ").slice(1).join(" ")}
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl">{detail.shortDesc}</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 -mt-16 sm:-mt-20 relative z-20">
          <div className="rounded-lg sm:rounded-2xl overflow-hidden shadow-2xl">
            <img src={image} alt={detail.title} width={1920} height={1080} className="w-full h-[200px] sm:h-[300px] md:h-[500px] object-cover" />
          </div>
          <div className="mt-6 sm:mt-8">
            <Link
              to="/contact"
              className="flex items-center justify-between bg-accent text-accent-foreground font-semibold text-base sm:text-lg py-3 sm:py-4 pl-6 sm:pl-8 pr-3 sm:pr-4 rounded-full hover:opacity-90 transition-opacity"
            >
              <span>Start Your {detail.title} Project</span>
              <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-accent-foreground/30 flex items-center justify-center ml-4">
                <ArrowUpRight size={20} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Long description */}
      <AnimatedSection>
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <span className="text-accent font-semibold text-xs uppercase tracking-wider">Overview</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mt-2 mb-6">
              Why brands choose Looplic for {detail.title}
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">{detail.longDesc}</p>
          </div>
        </section>
      </AnimatedSection>

      {/* Process */}
      <AnimatedSection>
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-12 bg-card">
          <div className="max-w-7xl mx-auto">
            <span className="text-accent font-semibold text-xs uppercase tracking-wider">How We Work</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mt-2 mb-10">Our 4-step process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
              {detail.steps.map((step, i) => (
                <div key={i} className="bg-background border border-border rounded-2xl p-6">
                  <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold font-serif mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold font-sans mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Deliverables + Use cases */}
      <AnimatedSection>
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <span className="text-accent font-semibold text-xs uppercase tracking-wider">What You Get</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mt-2 mb-6">Key Deliverables</h2>
              <div className="space-y-3">
                {detail.deliverables.map((d, i) => (
                  <div key={i} className="flex items-center gap-3 bg-card border border-border rounded-xl p-4">
                    <CheckCircle2 className="text-accent shrink-0" size={20} />
                    <p className="text-foreground font-medium">{d}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="text-accent font-semibold text-xs uppercase tracking-wider">Perfect For</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mt-2 mb-6">Use Cases</h2>
              <div className="flex flex-wrap gap-2.5">
                {detail.useCases.map((u, i) => (
                  <span key={i} className="px-4 py-2 rounded-full bg-card text-foreground text-sm font-medium border border-border">
                    {u}
                  </span>
                ))}
              </div>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center justify-between gap-4 bg-accent text-accent-foreground font-semibold text-sm py-3 pl-5 pr-3 rounded-full hover:opacity-90 transition-opacity"
              >
                <span>Get a Custom Quote</span>
                <span className="w-8 h-8 rounded-full border-2 border-accent-foreground/30 flex items-center justify-center"><ArrowUpRight size={14} /></span>
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* FAQs */}
      <AnimatedSection>
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-12 bg-card">
          <div className="max-w-3xl mx-auto">
            <span className="text-accent font-semibold text-xs uppercase tracking-wider">Questions</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mt-2 mb-8">Frequently Asked</h2>
            <div className="space-y-3">
              {detail.faqs.map((f, i) => (
                <div key={i} className="bg-background border border-border rounded-xl">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="font-semibold text-foreground">{f.q}</span>
                    <ChevronDown size={18} className={`text-accent transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">{f.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Related services - same expandable section as homepage */}
      <AnimatedSection>
        <ServicesSection />
      </AnimatedSection>

      <ContactForm defaultProjectType={detail.title} />
      <FooterSection />
    </div>
  );
};

export default ServiceDetailPage;
