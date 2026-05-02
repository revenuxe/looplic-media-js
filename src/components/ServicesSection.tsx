"use client";

import { useState } from "react";
import AppLink from "@/components/AppLink";
import { useIsMobile } from "@/hooks/use-mobile";
import { assetSrc } from "@/lib/assets";
import { ArrowUpRight, CheckCircle2, X, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { serviceDetails, serviceSlugMap } from "@/data/serviceDetails";
import imgAiVideo from "@/assets/svc-ai-video.webp";
import imgProduct from "@/assets/svc-product-shoot.webp";
import imgUgc from "@/assets/svc-ugc.webp";
import imgAdfilm from "@/assets/svc-adfilm.webp";
import imgBrand from "@/assets/svc-brand-shoot.webp";
import imgScript from "@/assets/svc-script.webp";

const services = [
  { image: imgAiVideo, title: "Cinematic AI Video Production", desc: "AI-generated cinematic ads, brand films & social cuts — broadcast-ready, in days not months.", variant: "default" as const },
  { image: imgProduct, title: "Product Photography & Shoots", desc: "Studio + lifestyle product photography that lifts CTR and conversions for D2C and ecommerce.", variant: "default" as const },
  { image: imgUgc, title: "UGC & Creator-Style Content", desc: "High-volume creator-led UGC built for Meta, TikTok and Reels — built to perform.", variant: "orange" as const },
  { image: imgAdfilm, title: "Ad Film Production", desc: "End-to-end ad film production — concept, direction, shoot and post for brand and performance.", variant: "default" as const },
  { image: imgBrand, title: "Brand & Lifestyle Shoots", desc: "Fashion, F&B, real estate and lifestyle brand shoots that build iconic visual identities.", variant: "lime" as const },
  { image: imgScript, title: "AI Scriptwriting & Storyboarding", desc: "AI-assisted scripts, hooks and storyboards so every frame is built to convert.", variant: "default" as const },
];

const variantClasses = {
  default: "bg-card border border-border shadow-md",
  lime: "bg-lime text-foreground shadow-md",
  orange: "bg-accent text-accent-foreground shadow-md",
};

const ServiceCard = ({
  service,
  isExpanded,
  onToggle,
}: {
  service: (typeof services)[0];
  isExpanded: boolean;
  onToggle: () => void;
}) => (
  <motion.div
    layout
    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    className={`rounded-2xl p-5 sm:p-7 flex flex-col justify-between min-h-[260px] sm:min-h-[300px] cursor-pointer group ${variantClasses[service.variant]} ${isExpanded ? "ring-2 ring-accent" : ""}`}
    onClick={onToggle}
  >
    <div className="w-full h-32 sm:h-36 rounded-xl overflow-hidden mb-5 sm:mb-6">
      <img src={assetSrc(service.image)} alt={service.title} loading="lazy" className="w-full h-full object-cover" />
    </div>
    <div>
      <h3 className="text-lg sm:text-xl font-bold font-sans mb-2">{service.title}</h3>
      <p className="text-sm opacity-70 leading-relaxed mb-4 sm:mb-5">{service.desc}</p>
      <button
        onClick={(e) => { e.stopPropagation(); onToggle(); }}
        className={`flex items-center gap-1.5 text-sm font-medium border rounded-full px-5 py-2 transition-colors ${
          service.variant === "orange"
            ? "border-accent-foreground hover:bg-accent-foreground hover:text-accent"
            : "border-current hover:bg-foreground hover:text-primary-foreground"
        }`}
      >
        <Plus size={16} className={`transition-transform duration-300 ${isExpanded ? "rotate-45" : ""}`} />
        {isExpanded ? "Close" : "Learn More"}
      </button>
    </div>
  </motion.div>
);

const ExpandedPanel = ({
  service,
  onClose,
}: {
  service: (typeof services)[0];
  onClose: () => void;
}) => {
  const slug = serviceSlugMap[service.title];
  const detail = slug ? serviceDetails[slug] : null;
  if (!detail) return null;

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden col-span-full"
    >
      <div className="bg-card border border-border rounded-2xl shadow-lg p-6 sm:p-8 md:p-10">
        <div className="flex items-start justify-between mb-6 md:mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-accent/30 shrink-0">
              <img src={assetSrc(service.image)} alt={service.title} className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="text-accent font-semibold text-xs uppercase tracking-wider">Service</span>
              <h4 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold mt-0.5">{detail.title}</h4>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors shrink-0"
          >
            <X size={16} />
          </button>
        </div>

        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8 md:mb-10 max-w-3xl">
          {detail.longDesc}
        </p>

        {/* Steps */}
        <div className="mb-8 md:mb-10">
          <h5 className="text-sm font-semibold text-accent uppercase tracking-wider mb-6">How We Work</h5>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {detail.steps.map((step, si) => (
              <motion.div
                key={si}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + si * 0.08 }}
              >
                <div className="w-11 h-11 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm font-serif mb-3">
                  {step.number}
                </div>
                <h6 className="text-sm sm:text-base font-bold font-sans mb-1.5">{step.title}</h6>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Deliverables + use cases */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 pt-6 md:pt-8 border-t border-border">
          <div>
            <span className="text-accent font-semibold text-xs uppercase tracking-wider">What You Get</span>
            <h4 className="text-lg sm:text-xl font-serif font-bold mt-1 mb-4">Key Deliverables</h4>
            <div className="grid grid-cols-1 gap-2.5">
              {detail.deliverables.map((item, di) => (
                <div key={di} className="flex items-center gap-3 bg-muted rounded-xl p-3 sm:p-4">
                  <CheckCircle2 size={18} className="text-accent shrink-0" />
                  <p className="text-foreground text-sm font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <span className="text-accent font-semibold text-xs uppercase tracking-wider">Perfect For</span>
            <h4 className="text-lg sm:text-xl font-serif font-bold mt-1 mb-4">Use Cases</h4>
            <div className="flex flex-wrap gap-2">
              {detail.useCases.map((u, i) => (
                <span key={i} className="px-3 py-1.5 rounded-full bg-muted text-foreground text-xs font-medium border border-border">
                  {u}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-border">
          <AppLink
            to={`/services/${detail.slug}`}
            className="flex items-center justify-between bg-accent text-accent-foreground font-semibold text-sm py-3 pl-5 pr-3 rounded-full hover:opacity-90 transition-opacity sm:w-fit gap-4"
          >
            <span>View Full Service Page</span>
            <span className="w-8 h-8 rounded-full border-2 border-accent-foreground/30 flex items-center justify-center"><ArrowUpRight size={14} /></span>
          </AppLink>
          <AppLink
            to="/contact"
            className="flex items-center justify-between bg-primary-foreground text-primary font-semibold text-sm py-3 pl-5 pr-3 rounded-full hover:opacity-90 transition-opacity sm:w-fit gap-4"
          >
            <span>Start Your Project</span>
            <span className="w-8 h-8 rounded-full border-2 border-primary/30 flex items-center justify-center"><ArrowUpRight size={14} /></span>
          </AppLink>
        </div>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const isMobile = useIsMobile();

  const handleToggle = (i: number) => setExpandedIndex((prev) => (prev === i ? null : i));

  const rows: number[][] = [];
  for (let i = 0; i < services.length; i += 3) {
    rows.push(services.slice(i, i + 3).map((_, j) => i + j));
  }

  return (
    <section id="service" className="py-12 md:py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start justify-between mb-8 md:mb-12 gap-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif max-w-2xl">
            <span className="font-bold">AI-Powered</span> Video, Ad Film & Content Production Services
          </h2>
          <AppLink
            to="/contact"
            className="hidden md:flex w-12 h-12 rounded-full border-2 border-foreground items-center justify-center hover:bg-foreground hover:text-primary-foreground transition-colors shrink-0"
          >
            <ArrowUpRight size={20} />
          </AppLink>
        </div>

        {isMobile ? (
          <div className="space-y-4">
            {services.map((service, i) => (
              <div key={i}>
                <ServiceCard service={service} isExpanded={expandedIndex === i} onToggle={() => handleToggle(i)} />
                <AnimatePresence mode="wait" initial={false}>
                  {expandedIndex === i && (
                    <div className="mt-4">
                      <ExpandedPanel service={services[i]} onClose={() => setExpandedIndex(null)} />
                    </div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-5">
            {rows.map((row, rowIdx) => (
              <div key={rowIdx}>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                  {row.map((i) => (
                    <ServiceCard key={i} service={services[i]} isExpanded={expandedIndex === i} onToggle={() => handleToggle(i)} />
                  ))}
                </div>
                <AnimatePresence mode="wait" initial={false}>
                  {expandedIndex !== null && row.includes(expandedIndex) && (
                    <div className="mt-5">
                      <ExpandedPanel service={services[expandedIndex]} onClose={() => setExpandedIndex(null)} />
                    </div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        )}

        {/* Show All Services CTA */}
        <div className="mt-10 md:mt-14 flex justify-center">
          <AppLink
            to="/services"
            className="group inline-flex items-center gap-3 bg-accent text-accent-foreground font-semibold text-sm sm:text-base py-3 sm:py-4 pl-6 sm:pl-8 pr-3 sm:pr-4 rounded-full hover:opacity-90 transition-opacity shadow-lg"
          >
            <span>Show All Services</span>
            <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-accent-foreground/30 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
              <ArrowUpRight size={16} />
            </span>
          </AppLink>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
