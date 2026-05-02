import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import AnimatedSection from "@/components/AnimatedSection";
import SEOHead from "@/components/SEOHead";

const lastUpdated = "January 15, 2025";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Terms & Conditions | Looplic AI Studio — Service Agreement"
        description="Terms & conditions for engaging Looplic for AI video production, ad films, UGC, product shoots and content services. Scope, payment, IP, deliverables and revisions."
        canonical="/terms-and-conditions"
        keywords="Looplic terms and conditions, AI video production agreement, ad film service agreement, content production terms, IP ownership video, payment terms studio India"
      />
      <Navbar />
      <AnimatedSection>
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-12 bg-primary text-primary-foreground">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4">Legal · Est. 2025</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight mb-4">Terms & Conditions</h1>
            <p className="text-primary-foreground/70 text-sm">Last updated: {lastUpdated}</p>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <section className="py-14 md:py-20 px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl mx-auto prose-sm sm:prose text-foreground">

            <h2 className="text-xl sm:text-2xl font-serif mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              By accessing the Looplic website (looplic.com) or engaging us for any service, you agree to be bound by these Terms & Conditions ("Terms"). If you do not agree, please do not use our services. Looplic is an AI media and content production studio, founded in 2025 and headquartered in Bangalore, India.
            </p>

            <h2 className="text-xl sm:text-2xl font-serif mb-4">2. Our Services</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-2">Looplic provides creative production services including:</p>
            <ul className="list-disc pl-5 text-muted-foreground text-sm leading-relaxed mb-6 space-y-1">
              <li>Cinematic AI video production using Sora, Veo, Runway, Kling, Luma, Pika, Seedance and other generative models</li>
              <li>Ad film production, TVCs and brand films</li>
              <li>UGC and creator-led content for Meta, TikTok, YouTube Shorts</li>
              <li>Product photography, e-commerce video and brand/lifestyle shoots</li>
              <li>Motion graphics, 2D/3D animation and explainer videos</li>
              <li>Podcast production, performance creative, AI avatars and AI scriptwriting/storyboarding</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-serif mb-4">3. Engagement & Scope</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Each project is governed by a written proposal, statement of work or quotation that defines scope, deliverables, timelines and pricing. These Terms apply alongside that document. In case of conflict, the project SOW prevails for project-specific matters.
            </p>

            <h2 className="text-xl sm:text-2xl font-serif mb-4">4. Client Responsibilities</h2>
            <ul className="list-disc pl-5 text-muted-foreground text-sm leading-relaxed mb-6 space-y-1">
              <li>Provide accurate briefs, brand guidelines, references and assets in a timely manner</li>
              <li>Ensure all submitted assets (logos, music, talent likenesses, brand IP) are owned or licensed by you</li>
              <li>Approve milestones (script, storyboard, rough cut) within agreed review windows</li>
              <li>Pay invoices per the agreed schedule</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-serif mb-4">5. AI-Generated Content Disclosure</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Many of our deliverables incorporate generative AI (video, image, voice, music). You acknowledge that AI outputs can occasionally show artefacts, model bias or unintended likenesses. We test, curate and refine all AI output before delivery, but final on-air, broadcast or commercial use disclosure (where required by law or platform policy) is the client's responsibility. We will never knowingly produce deepfakes of real persons without verifiable consent.
            </p>

            <h2 className="text-xl sm:text-2xl font-serif mb-4">6. Pricing & Payment Terms</h2>
            <h3 className="text-lg font-serif mb-2">6.1 Quotations</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              All quotations are valid for 30 days. Pricing is project-based, retainer-based or per-deliverable as defined in the SOW. GST is charged additionally per Indian tax law.
            </p>
            <h3 className="text-lg font-serif mb-2">6.2 Standard Payment Schedule</h3>
            <ul className="list-disc pl-5 text-muted-foreground text-sm leading-relaxed mb-4 space-y-1">
              <li><strong>50% advance</strong> on project sign-off (kicks off pre-production)</li>
              <li><strong>40%</strong> on first deliverable / rough cut approval</li>
              <li><strong>10%</strong> on final delivery</li>
            </ul>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              For monthly retainers (UGC, performance creative, social content) the full retainer is invoiced at the start of each month.
            </p>
            <h3 className="text-lg font-serif mb-2">6.3 Accepted Payment Methods</h3>
            <ul className="list-disc pl-5 text-muted-foreground text-sm leading-relaxed mb-4 space-y-1">
              <li>Bank transfer (NEFT/RTGS/IMPS) to our designated business account</li>
              <li>UPI (Google Pay, PhonePe, Paytm, etc.)</li>
              <li>Online payment links (credit/debit card, net banking)</li>
              <li>International wire transfer (USD, EUR, GBP, AED) for overseas clients</li>
              <li>Cheque / demand draft in favour of Looplic</li>
            </ul>
            <h3 className="text-lg font-serif mb-2">6.4 Late Payments</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Invoices are due within 7 business days. Late payments may incur 2% interest per month and pause active production until cleared.
            </p>

            <h2 className="text-xl sm:text-2xl font-serif mb-4">7. Revisions</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Each project includes the number of revision rounds defined in the SOW (typically 2 rounds at script, 2 at edit). Additional revisions or scope changes are billed at our standard hourly/day rate or per a change-order quote.
            </p>

            <h2 className="text-xl sm:text-xl sm:text-2xl font-serif mb-4">8. Intellectual Property</h2>
            <h3 className="text-lg font-serif mb-2">8.1 Your IP</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              All brand assets, scripts and inputs you provide remain your property.
            </p>
            <h3 className="text-lg font-serif mb-2">8.2 Final Deliverables</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              On full payment, all final deliverables produced for you transfer to your ownership for the agreed usage rights (typically global, paid-media, in perpetuity, unless otherwise scoped).
            </p>
            <h3 className="text-lg font-serif mb-2">8.3 Looplic IP</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Our internal templates, prompt libraries, AI workflows, source project files (.aep, .prproj, .blend) and unused/raw outputs remain Looplic property unless explicitly purchased.
            </p>
            <h3 className="text-lg font-serif mb-2">8.4 Portfolio Rights</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Unless restricted by NDA, Looplic reserves the right to display delivered work in our portfolio, case studies, social media and award submissions.
            </p>

            <h2 className="text-xl sm:text-2xl font-serif mb-4">9. Talent, Music & Third-Party Licenses</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Stock footage, music, fonts, talent appearances and AI vendor outputs may carry usage restrictions defined by their original licensors. Looplic will procure licenses appropriate to the agreed scope. Expanded usage (TV, OOH, broadcast, multi-year) may incur additional licensing fees.
            </p>

            <h2 className="text-xl sm:text-2xl font-serif mb-4">10. Cancellation & Refunds</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              If you cancel after kick-off, fees for work completed up to cancellation are non-refundable. Pre-production cancellations after creative locking are billed at 50% of the project value. Shoot cancellations within 72 hours of shoot day are billed at 100% (crew, equipment and location commitments are non-refundable).
            </p>

            <h2 className="text-xl sm:text-2xl font-serif mb-4">11. Confidentiality</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Both parties agree to keep confidential all non-public information shared during engagement, including strategies, unreleased products, financials and creative concepts. This obligation survives termination.
            </p>

            <h2 className="text-xl sm:text-2xl font-serif mb-4">12. Limitation of Liability</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Looplic's total liability for any claim shall not exceed the fees paid for the specific deliverable giving rise to the claim. We are not liable for indirect, incidental, consequential or business-interruption damages, including loss of revenue or campaign performance.
            </p>

            <h2 className="text-xl sm:text-2xl font-serif mb-4">13. Indemnification</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              You agree to indemnify Looplic against claims arising from inaccurate briefs, unlicensed assets you provided, or misuse of delivered content beyond the agreed usage rights.
            </p>

            <h2 className="text-xl sm:text-2xl font-serif mb-4">14. Force Majeure</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Neither party is liable for delays caused by events beyond reasonable control — natural disasters, pandemics, government restrictions, AI vendor outages, infrastructure failures or geopolitical events.
            </p>

            <h2 className="text-xl sm:text-2xl font-serif mb-4">15. Governing Law</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              These Terms are governed by the laws of India. Disputes will be resolved in the courts of Bangalore, Karnataka. Both parties agree to attempt good-faith resolution before initiating legal proceedings.
            </p>

            <h2 className="text-xl sm:text-2xl font-serif mb-4">16. Updates</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              We may update these Terms periodically. The "Last updated" date will reflect changes. Continued use of our services constitutes acceptance.
            </p>

            <h2 className="text-xl sm:text-2xl font-serif mb-4">17. Contact</h2>
            <div className="bg-secondary rounded-xl p-5 text-sm text-muted-foreground space-y-1">
              <p><strong className="text-foreground">Looplic</strong></p>
              <p>Bangalore, India</p>
              <p>Email: hello@looplic.com</p>
              <p>Phone: +91 98862 85028</p>
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

export default TermsConditions;
