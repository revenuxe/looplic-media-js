import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import AnimatedSection from "@/components/AnimatedSection";
import SeoAnswerSummary from "@/components/SeoAnswerSummary";
import SEOHead from "@/components/SEOHead";
import { ArrowUpRight, Building2, Quote, Sparkles, Film, Camera, Wand2, Heart, Rocket } from "lucide-react";

const quotes = [
  {
    text: "The best content doesn't shout — it stops the scroll, then earns the click.",
    author: "Looplic Team",
  },
  {
    text: "AI doesn't replace creativity. It removes the friction between an idea and the final cut.",
    author: "On AI + Production",
  },
  {
    text: "Brands win when they ship more, test more, and let great visuals do the heavy lifting.",
    author: "Modern Marketing",
  },
];

const pillars = [
  {
    icon: Sparkles,
    title: "AI Video & Visuals",
    desc: "We use the latest generative AI models to produce videos, images and motion content tailored to your brand voice and platform.",
  },
  {
    icon: Camera,
    title: "Product & Brand Shoots",
    desc: "Studio-grade product photography, lifestyle shoots, fashion, real estate and F&B — built for catalogs, ads and storefronts.",
  },
  {
    icon: Film,
    title: "Ad Films & UGC",
    desc: "From performance-first ad films to creator-led UGC, we craft content designed to convert across Meta, YouTube, TikTok and more.",
  },
  {
    icon: Wand2,
    title: "Scripts & Storyboards",
    desc: "AI-assisted scriptwriting, shot planning and storyboarding so every frame is intentional — and every shoot day runs tight.",
  },
];

const workflowTips = [
  "Start with the hook — the first 1.5 seconds decide everything.",
  "Shoot once, edit ten ways. Modular content beats one big spot.",
  "Mix AI-generated B-roll with real footage for cinematic depth.",
  "Use UGC creators for trust, polished ads for scale — both, never one.",
  "Storyboard before you shoot. Save days of post-production rework.",
  "Always design for sound-off first, then layer in audio that pops.",
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="About Looplic – AI Media Company Building Content That Performs"
        description="Looplic is an AI media company combining generative AI with real production craft to ship ad films, UGC, product shoots and brand content faster."
        canonical="/about"
        keywords="about Looplic, AI media agency, AI video studio, content production India, ad film studio, UGC agency, AI creative agency"
      />
      <Navbar />

      {/* Hero */}
      <AnimatedSection>
        <section className="py-16 md:py-28 px-4 sm:px-6 lg:px-12 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4">AI Media Company · Est. 2025</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight mb-6">
              We're <span className="italic text-accent">Looplic</span> — AI-Powered
              <br className="hidden sm:block" /> Content for Modern Brands
            </h1>
            <p className="text-primary-foreground/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Founded in 2025, Looplic blends generative AI with real production craft to build videos, ad films, UGC and brand shoots that look great, ship fast, and actually perform.
            </p>
          </div>
        </section>
      </AnimatedSection>

      <SeoAnswerSummary
        eyebrow="About Looplic"
        title="Looplic blends AI speed with production taste."
        answer="Looplic is a Bangalore-based AI media company founded for brands that need cinematic content, faster iteration and a repeatable creative pipeline across video, photography, UGC, motion and paid social."
        points={[
          "AI-native creative and production workflows",
          "Real directors, editors, photographers and motion artists",
          "Content designed for launches, ads and ongoing brand growth",
        ]}
      />

      {/* Our Story */}
      <AnimatedSection delay={0.1}>
        <section className="py-14 md:py-20 px-4 sm:px-6 lg:px-12">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif mb-5">
                Our <span className="italic">Story</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                Brands today need more content than ever — across more platforms, in more formats, with shrinking timelines and budgets. Traditional production wasn't built for that.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                We started Looplic in <strong>2025</strong>, right as generative AI video tipped from "interesting demo" to genuinely production-grade. We combine AI video, AI scripting and shot planning with a real crew of directors, DOPs and editors — so you get the speed of AI and the soul of great filmmaking.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Today we partner with D2C brands, agencies and startups to ship monthly content systems that compound into growth — across ad films, UGC, product shoots and AI video.
              </p>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif mb-5">
                Our <span className="italic">Mission</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                To make world-class content production effortless — so every brand can show up, stand out and scale.
              </p>
              <div className="bg-card border border-border rounded-xl p-6 mt-6">
                <div className="flex items-start gap-3">
                  <Heart size={24} className="text-accent shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-sm mb-1">Our Core Value</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Story over spectacle. Tools change every month — what makes content land is craft, clarity and a sharp idea.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 mt-4">
                <div className="flex items-start gap-3">
                  <Rocket size={24} className="text-accent shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-sm mb-1">Our Vision</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      To become the AI-native media partner brands trust to ship their next 1,000 pieces of content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Platform */}
      <AnimatedSection delay={0.1}>
        <section className="py-14 md:py-20 px-4 sm:px-6 lg:px-12 bg-secondary">
          <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <div>
              <p className="text-accent font-semibold text-xs tracking-widest uppercase mb-3">
                Platform
              </p>
              <h2 className="text-2xl sm:text-3xl font-serif leading-tight">
                Looplic, a Platform by <span className="italic text-accent">Revenuxe</span>
              </h2>
            </div>
            <div className="border border-border bg-card p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <Building2 size={28} className="text-accent shrink-0 mt-1" />
                <div>
                  <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                    Looplic is built as a focused media and content platform by Revenuxe, bringing together AI-native production, brand storytelling and performance-led creative systems for modern businesses.
                  </p>
                  <a
                    href="https://revenuxe.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90 transition-opacity"
                  >
                    Visit Revenuxe <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Quotes */}
      <AnimatedSection delay={0.1}>
        <section className="py-14 md:py-20 px-4 sm:px-6 lg:px-12 bg-dark-green">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-serif text-primary-foreground text-center mb-10 md:mb-14">
              Words We <span className="italic">Create</span> By
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {quotes.map((q, i) => (
                <div key={i} className="bg-dark-green-card rounded-xl p-6 sm:p-8 flex flex-col justify-between">
                  <Quote size={28} className="text-accent mb-4" />
                  <p className="text-primary-foreground/90 text-sm sm:text-base leading-relaxed mb-6 italic">
                    "{q.text}"
                  </p>
                  <p className="text-accent text-xs font-semibold tracking-wide uppercase">— {q.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* What We Do */}
      <AnimatedSection delay={0.1}>
        <section className="py-14 md:py-20 px-4 sm:px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-serif text-center mb-10 md:mb-14">
              What <span className="italic">Drives</span> Us
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {pillars.map((p, i) => (
                <div key={i} className="border border-border rounded-xl p-6 sm:p-8 hover:shadow-lg hover:border-accent/40 transition-all">
                  <p.icon size={32} className="text-accent mb-4" />
                  <h3 className="font-serif text-lg font-bold mb-2">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Workflow Tips */}
      <AnimatedSection delay={0.1}>
        <section className="py-14 md:py-20 px-4 sm:px-6 lg:px-12 bg-secondary">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-serif text-center mb-3">
              How We <span className="italic">Make Content</span> That Performs
            </h2>
            <p className="text-muted-foreground text-sm text-center mb-10 max-w-xl mx-auto">
              A few of the principles we follow on every project — from AI videos to full ad film shoots.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {workflowTips.map((tip, i) => (
                <div key={i} className="flex items-start gap-3 bg-card border border-border rounded-xl p-5">
                  <span className="text-accent font-bold font-serif text-lg shrink-0">0{i + 1}</span>
                  <p className="text-sm text-muted-foreground leading-relaxed">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <FooterSection />
      </AnimatedSection>
    </div>
  );
};

export default AboutUs;
