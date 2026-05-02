import { useState } from "react";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate, useSearchParams } from "react-router-dom";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import heroImg from "@/assets/hero-adfilm.webp";

const leadSchema = z.object({
  full_name: z.string().trim().min(1, "Name is required").max(200, "Name is too long"),
  email: z.string().trim().email("Invalid email address").max(255, "Email is too long"),
  phone: z.string().trim().min(6, "Phone is required").max(30, "Phone number is too long"),
  project_type: z.string().trim().min(1, "Project type is required").max(100),
  brand: z.string().trim().max(200).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

const projectTypes = [
  "AI Video Production",
  "Ad Film / TVC",
  "UGC / Creator Content",
  "Product Shoot",
  "Brand / Lifestyle Shoot",
  "Scriptwriting & Storyboarding",
  "Not sure — need guidance",
];

interface ContactFormProps {
  defaultProjectType?: string;
}

const ContactForm = ({ defaultProjectType }: ContactFormProps) => {
  const [searchParams] = useSearchParams();
  const initialType = defaultProjectType || searchParams.get("service") || "";

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [projectType, setProjectType] = useState(initialType);
  const [brand, setBrand] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const result = leadSchema.safeParse({
      full_name: fullName,
      email,
      phone,
      project_type: projectType,
      brand,
      message,
    });

    if (!result.success) {
      toast({ title: "Validation Error", description: result.error.errors[0]?.message || "Invalid input", variant: "destructive" });
      setSubmitting(false);
      return;
    }

    const v = result.data;
    // Reuse existing leads table columns
    const { error } = await supabase.from("leads").insert({
      full_name: v.full_name,
      email: v.email,
      phone: v.phone,
      preferred_location: v.project_type,
      nature_of_business: v.brand || null,
      planned_timeline: v.message ? v.message.slice(0, 50) : null,
    });

    setSubmitting(false);

    if (error) {
      toast({ title: "Something went wrong", description: "Please try again.", variant: "destructive" });
      return;
    }

    navigate("/thank-you");
  };

  const inputClass =
    "w-full px-4 py-3.5 rounded-xl border border-white/20 bg-white/10 text-primary-foreground text-base placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 backdrop-blur-sm transition-all";
  const labelClass = "block text-sm font-medium text-primary-foreground/90 mb-1.5";

  return (
    <section id="contact-form" className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/85" />
      </div>

      <div className="max-w-xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-snug mb-4 text-primary-foreground">
            <span className="italic">Start</span> Your Content Project
          </h2>
          <p className="text-primary-foreground/70 text-base sm:text-lg max-w-md mx-auto">
            Tell us about your brand and what you want to create — we'll come back with a plan within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl shadow-black/20"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className={labelClass}>Full Name</label>
              <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Your name" required className={inputClass} />
            </div>

            <div>
              <label className={labelClass}>Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@brand.com" required className={inputClass} />
            </div>

            <div>
              <label className={labelClass}>Phone / WhatsApp</label>
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 98765 43210" required className={inputClass} />
            </div>

            <div>
              <label className={labelClass}>What do you want to create?</label>
              <div className="relative">
                <select value={projectType} onChange={(e) => setProjectType(e.target.value)} required className={`${inputClass} appearance-none cursor-pointer`}>
                  <option value="" disabled className="text-foreground bg-card">Select project type</option>
                  {projectTypes.map((opt) => (
                    <option key={opt} value={opt} className="text-foreground bg-card">{opt}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className="text-primary-foreground/50">
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label className={labelClass}>Brand / Company (optional)</label>
              <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} placeholder="Brand name & industry" className={inputClass} />
            </div>

            <div>
              <label className={labelClass}>Tell us about your project (optional)</label>
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Goals, references, timeline, budget…" rows={4} className={inputClass} />
            </div>

            <div className="pt-3">
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-accent text-accent-foreground font-semibold text-base py-4 rounded-full hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-lg shadow-black/10 disabled:opacity-60"
              >
                {submitting ? (
                  <span className="inline-flex items-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending…
                  </span>
                ) : (
                  "Start My Project"
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
