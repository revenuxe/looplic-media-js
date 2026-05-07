import { Star } from "lucide-react";
import { assetSrc } from "@/lib/assets";
import testimonialBg from "@/assets/testimonial-bg.webp";

const TestimonialSection = () => {
  return (
    <section id="testimonial" className="py-12 md:py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-center mb-8 md:mb-12">
          <span className="italic font-bold">Brands</span> That Ship Faster
          <br />
          and Look Sharper with media.x by Revenuxe
        </h2>

        <div className="relative rounded-none overflow-hidden min-h-[300px] sm:min-h-[400px]">
          <img
            src={assetSrc(testimonialBg)}
            alt="Team collaboration"
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="relative z-10 flex items-center justify-center min-h-[300px] sm:min-h-[400px] p-4 sm:p-8">
            <div className="bg-card rounded-none p-6 sm:p-8 max-w-md shadow-xl w-full sm:w-auto">
              <div className="flex items-center justify-between mb-4">
                <span className="text-accent text-3xl font-serif">"</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-foreground text-sm sm:text-base leading-relaxed mb-6">
                "media.x by Revenuxe delivered a full month of ad creatives and UGC-style videos in under two weeks. The AI workflow is wild — and the output actually performs on Meta and YouTube."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-sm">
                  RK
                </div>
                <div>
                  <p className="font-bold text-sm text-foreground">Rahul Krishnan</p>
                  <p className="text-muted-foreground text-xs">Head of Growth, D2C Brand</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
