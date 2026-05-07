import { ArrowUpRight } from "lucide-react";
import AppLink from "@/components/AppLink";
import { assetSrc } from "@/lib/assets";
import heroImg from "@/assets/hero-adfilm.webp";


const HeroSection = () => {
  return (
    <section id="home" className="relative">
      {/* Hero area */}
      <div className="bg-secondary pt-10 sm:pt-16 pb-24 sm:pb-32 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
        {/* Hexagonal pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hex" width="56" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                <path d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66Z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-foreground" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hex)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] sm:leading-tight text-foreground">
            AI Video, Ad Films <span className="italic font-normal text-accent">&amp;</span>
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>Content That Converts
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl">
            media.x by Revenuxe is an AI media &amp; ad film production company building cinematic AI videos, UGC ads, product shoots and brand films for D2C, SaaS and modern brands — 10x faster, at a fraction of the cost.
          </p>
        </div>
      </div>

      {/* Hero image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 -mt-16 sm:-mt-20 relative z-20">
        <div className="rounded-lg sm:rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={assetSrc(heroImg)}
            alt="Behind the scenes of a cinematic ad film production shoot with professional cinema camera"
            width={1920}
            height={1080}
            className="w-full h-[200px] sm:h-[300px] md:h-[500px] object-cover"
          />
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
  );
};

export default HeroSection;
