type SeoAnswerSummaryProps = {
  eyebrow?: string;
  title: string;
  answer: string;
  points: string[];
};

const SeoAnswerSummary = ({ eyebrow = "Quick Answer", title, answer, points }: SeoAnswerSummaryProps) => (
  <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-12 bg-background">
    <div className="max-w-5xl mx-auto">
      <p className="text-accent font-semibold text-xs uppercase tracking-wider">{eyebrow}</p>
      <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground">
        {title}
      </h2>
      <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
        {answer}
      </p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
        {points.map((point) => (
          <div key={point} className="rounded-lg border border-border bg-card p-4 text-sm font-medium text-foreground">
            {point}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SeoAnswerSummary;
