const stats = [
  { number: "500+", label: "Pieces of Content Delivered" },
  { number: "10x", label: "Faster Production with AI" },
  { number: "60%", label: "Lower Cost vs Traditional" },
  { number: "< 48 hrs", label: "Avg. Turnaround Time" },
];

const StatsSection = () => {
  return (
    <section id="insight" className="py-12 md:py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 mb-10 md:mb-16">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold font-sans mb-3">
              From AI video to product shoots — we build content that actually performs
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Whether you need a scroll-stopping ad film, UGC-style creator content, or a polished brand shoot — Looplic blends AI tools with real production craft to ship faster, smarter content.
            </p>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif leading-snug">
              <span className="font-bold">We Make Brands</span> Stand Out With AI-Driven Storytelling.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center md:text-left">
              <p className={`text-2xl sm:text-3xl md:text-4xl font-bold font-serif ${i >= 2 ? "text-accent" : "text-foreground"}`}>
                {stat.number}
              </p>
              <p className="text-muted-foreground text-xs sm:text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
