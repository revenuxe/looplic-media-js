import { Sparkles, Zap, Film } from "lucide-react";

const goals = [
  {
    icon: Sparkles,
    title: "Generate AI Videos & Visuals That Look Truly On-Brand",
    color: "text-accent",
  },
  {
    icon: Zap,
    title: "Ship Ad Films, UGC & Product Shoots in Days, Not Months",
    color: "text-accent",
  },
  {
    icon: Film,
    title: "Scale Content Across Platforms Without Scaling Your Budget",
    color: "text-primary-foreground",
  },
];

const GoalsSection = () => {
  return (
    <section id="goals" className="py-12 md:py-20 px-4 sm:px-6 lg:px-12 bg-dark-green">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-primary-foreground mb-8 md:mb-12">
          <span className="italic">Why</span> Brands &amp; Agencies Choose media.x by Revenuxe
          <br />
          for AI-Powered Content
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {goals.map((goal, i) => (
            <div
              key={i}
              className="bg-dark-green-card rounded-none p-6 sm:p-8 flex flex-col items-start justify-between min-h-[180px] sm:min-h-[200px]"
            >
              <goal.icon size={36} className={goal.color} />
              <p className="text-primary-foreground text-left text-base sm:text-lg font-medium mt-auto">
                {goal.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;
