import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowUpRight, CheckCircle2, ChevronDown } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
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
import heroImg from "@/assets/hero-adfilm.jpg";

const slugImage: Record<string, string> = {
  "ai-video-production": imgAiVideo,
  "product-photography": imgProduct,
  "ugc-content": imgUgc,
  "ad-film-production": imgAdfilm,
  "brand-shoots": imgBrand,
  "scripts-storyboards": imgScript,
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

      {/* Hero */}
      <section className="relative bg-secondary pt-10 sm:pt-16 pb-24 sm:pb-32 px-4 sm:px-6 lg:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/#service" className="text-accent text-sm font-medium uppercase tracking-wider">← Services</Link>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-7xl font-serif leading-[1.1] text-foreground">
            <span className="italic font-normal text-accent">{detail.title.split(" ")[0]}</span>{" "}
            {detail.title.split(" ").slice(1).join(" ")}
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl">{detail.shortDesc}</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 -mt-16 sm:-mt-20 relative z-20">
        <div className="rounded-lg sm:rounded-2xl overflow-hidden shadow-2xl">
          <img src={image} alt={detail.title} width={1600} height={900} className="w-full h-[220px] sm:h-[360px] md:h-[500px] object-cover" />
        </div>
      </div>

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

      {/* Related services - same card style as homepage */}
      <AnimatedSection>
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-10">Explore More Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {related.map((s) => {
                const variantClass =
                  s.variant === "lime"
                    ? "bg-lime text-foreground shadow-md"
                    : s.variant === "orange"
                    ? "bg-accent text-accent-foreground shadow-md"
                    : "bg-card border border-border shadow-md";
                return (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className={`rounded-2xl p-5 sm:p-7 flex flex-col justify-between min-h-[260px] sm:min-h-[300px] group ${variantClass}`}
                  >
                    <div className="w-full h-32 sm:h-36 rounded-xl overflow-hidden mb-5 sm:mb-6">
                      <img src={slugImage[s.slug]} alt={s.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold font-sans mb-2">{s.title}</h3>
                      <p className="text-sm opacity-70 leading-relaxed mb-4">{s.shortDesc}</p>
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium">
                        Learn more <ArrowUpRight size={16} />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <ContactForm defaultProjectType={detail.title} />
      <FooterSection />
    </div>
  );
};

export default ServiceDetailPage;
