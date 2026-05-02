import { ArrowUpRight, Sparkles } from "lucide-react";
import AppLink from "@/components/AppLink";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import ContactForm from "@/components/ContactForm";
import AnimatedSection from "@/components/AnimatedSection";
import SeoAnswerSummary from "@/components/SeoAnswerSummary";
import SEOHead from "@/components/SEOHead";
import { serviceList, toolsWeUse } from "@/data/serviceDetails";
import { assetSrc, type ImageAsset } from "@/lib/assets";
import imgAiVideo from "@/assets/svc-ai-video.webp";
import imgProduct from "@/assets/svc-product-shoot.webp";
import imgUgc from "@/assets/svc-ugc.webp";
import imgAdfilm from "@/assets/svc-adfilm.webp";
import imgBrand from "@/assets/svc-brand-shoot.webp";
import imgScript from "@/assets/svc-script.webp";
import imgPerformance from "@/assets/svc-performance.webp";
import imgMotion from "@/assets/svc-motion.webp";
import imgPodcast from "@/assets/svc-podcast.webp";
import imgAvatar from "@/assets/svc-avatar.webp";
import imgEcom from "@/assets/svc-ecom-video.webp";
import imgSocial from "@/assets/svc-social.webp";
import heroImg from "@/assets/hero-adfilm.webp";

const slugImage: Record<string, ImageAsset> = {
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

const variantClass = (v: string) =>
  v === "lime"
    ? "bg-lime text-foreground shadow-md"
    : v === "orange"
    ? "bg-accent text-accent-foreground shadow-md"
    : "bg-card border border-border shadow-md";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="AI Video, Ad Film & Content Production Services | Looplic"
        description="Explore Looplic's full suite of AI video, ad film, UGC, product, brand, motion graphics, podcast and performance creative services for D2C, SaaS and modern brands."
        canonical="/services"
        keywords="AI video production services, ad film production company, UGC agency India, performance creative agency, motion graphics studio, AI avatar agency, ecommerce video production, podcast production Bangalore, social media content agency"
      />
      <Navbar />

      {/* Hero - same style as homepage */}
      <section className="relative">
        <div className="bg-secondary pt-10 sm:pt-16 pb-24 sm:pb-32 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="hex-services" width="56" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                  <path d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66Z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-foreground" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hex-services)" />
            </svg>
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <p className="text-accent font-semibold text-xs sm:text-sm tracking-widest uppercase mb-4">All Services</p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] sm:leading-tight text-foreground">
              <span className="italic font-normal text-accent">Every</span> kind of content
              <br className="hidden sm:block" /> your brand needs.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl">
              From cinematic AI video and ad films to UGC, product shoots, motion graphics, podcasts and performance creative — Looplic is the AI media partner that ships everything, in one studio.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 -mt-16 sm:-mt-20 relative z-20">
          <div className="rounded-lg sm:rounded-2xl overflow-hidden shadow-2xl">
            <img src={assetSrc(heroImg)} alt="Looplic AI media studio behind the scenes" width={1920} height={1080} className="w-full h-[200px] sm:h-[300px] md:h-[500px] object-cover" />
          </div>
          <div className="mt-6 sm:mt-8">
            <AppLink
              to="/contact"
              className="flex items-center justify-between bg-accent text-accent-foreground font-semibold text-base sm:text-lg py-3 sm:py-4 pl-6 sm:pl-8 pr-3 sm:pr-4 rounded-full hover:opacity-90 transition-opacity"
            >
              <span>Start Your Project</span>
              <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-accent-foreground/30 flex items-center justify-center ml-4">
                <ArrowUpRight size={20} />
              </span>
            </AppLink>
          </div>
        </div>
      </section>

      <SeoAnswerSummary
        eyebrow="Service Summary"
        title="Looplic covers the full content production stack."
        answer="Brands hire Looplic when they need one team for strategy, scripting, AI video generation, live shoots, creator-style UGC, editing, animation, performance variants and final delivery across every social and ad format."
        points={[
          "AI video, avatars and synthetic media",
          "Ad films, product shoots and brand campaigns",
          "Performance creative, UGC and monthly social content",
        ]}
      />

      {/* All services grid - same card style as homepage */}
      <AnimatedSection>
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row items-start justify-between mb-8 md:mb-12 gap-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif max-w-2xl">
                <span className="font-bold">12+</span> AI-Powered Production Services
              </h2>
              <AppLink
                to="/contact"
                className="hidden md:flex w-12 h-12 rounded-full border-2 border-foreground items-center justify-center hover:bg-foreground hover:text-primary-foreground transition-colors shrink-0"
              >
                <ArrowUpRight size={20} />
              </AppLink>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {serviceList.map((s) => (
                <AppLink
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className={`rounded-2xl p-5 sm:p-7 flex flex-col justify-between min-h-[300px] sm:min-h-[340px] group transition-transform hover:-translate-y-1 ${variantClass(s.variant)}`}
                >
                  <div className="w-full h-32 sm:h-40 rounded-xl overflow-hidden mb-5 sm:mb-6">
                    <img src={assetSrc(slugImage[s.slug])} alt={s.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-sans mb-2">{s.title}</h3>
                    <p className="text-sm opacity-70 leading-relaxed mb-4 line-clamp-3">{s.shortDesc}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold border border-current rounded-full px-4 py-1.5">
                      Explore <ArrowUpRight size={14} />
                    </span>
                  </div>
                </AppLink>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Tools we use */}
      <AnimatedSection>
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-12 bg-card">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 md:mb-12">
              <span className="inline-flex items-center gap-2 text-accent font-semibold text-xs uppercase tracking-wider">
                <Sparkles size={14} /> Our AI + Production Stack
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mt-2 max-w-3xl">
                The tools we use to build content <span className="italic text-accent">10x faster</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base mt-4 max-w-2xl">
                We pair the best AI video, image and voice models with industry-standard cinema cameras and post-production tools — giving you Hollywood polish at startup speed.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {toolsWeUse.map((tool) => (
                <div key={tool.name} className="bg-background border border-border rounded-2xl p-5 hover:border-accent/40 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-base sm:text-lg">{tool.name}</h3>
                    <span className="text-[10px] uppercase tracking-wider text-accent font-semibold">{tool.category}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{tool.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <ContactForm />
      <FooterSection />
    </div>
  );
};

export default ServicesPage;
