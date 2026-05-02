import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import AnimatedSection from "@/components/AnimatedSection";
import SEOHead from "@/components/SEOHead";

const lastUpdated = "January 15, 2025";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Privacy Policy | Looplic AI Media — How We Protect Your Data"
        description="Read Looplic Media's privacy policy. Learn how our AI video and content production studio collects, stores, and protects your personal and brand information."
        canonical="/privacy-policy"
        keywords="Looplic privacy policy, AI media data protection, video production privacy, brand data protection, GDPR, DPDP India"
      />
      <Navbar />
      <AnimatedSection>
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-12 bg-primary text-primary-foreground">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4">Legal · Est. 2025</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight mb-4">Privacy Policy</h1>
            <p className="text-primary-foreground/70 text-sm">Last updated: {lastUpdated}</p>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <section className="py-14 md:py-20 px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl mx-auto prose-sm sm:prose text-foreground">
            <h2 className="text-xl sm:text-2xl font-serif mb-4">1. Introduction</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Looplic Media ("Looplic," "we," "our," or "us"), founded in 2025, is an AI-powered media and content production studio. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal and brand information when you visit our website, submit an inquiry, or engage us for AI video, ad film, UGC, product shoot, brand shoot, motion graphics or any related production service. By using our services, you agree to this Policy.
            </p>

            <h2 className="text-xl sm:text-2xl font-serif mb-4">2. Information We Collect</h2>
            <h3 className="text-lg font-serif mb-2">2.1 Information You Provide</h3>
            <ul className="list-disc pl-5 text-muted-foreground text-sm leading-relaxed mb-4 space-y-1">
              <li>Full name, email, phone/WhatsApp number and company name submitted via our contact forms</li>
              <li>Project briefs, brand assets, scripts, references and creative direction shared during engagement</li>
              <li>Logos, product samples, photography, footage, voice samples and any creative materials provided for production</li>
              <li>Billing and tax details (GSTIN, PAN, address) required for invoicing</li>
            </ul>
            <h3 className="text-lg font-serif mb-2">2.2 Automatically Collected Information</h3>
            <ul className="list-disc pl-5 text-muted-foreground text-sm leading-relaxed mb-6 space-y-1">
              <li>IP address, browser, device, operating system and approximate location</li>
              <li>Pages visited, time on site, referral source and click patterns</li>
              <li>Cookies, pixels and analytics identifiers (see Section 7)</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-serif mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc pl-5 text-muted-foreground text-sm leading-relaxed mb-6 space-y-1">
              <li>Respond to inquiries, scope projects and send proposals</li>
              <li>Plan, produce and deliver AI video, ad films, shoots, motion graphics and other commissioned content</li>
              <li>Operate AI tools (Sora, Veo, Runway, Kling, ElevenLabs, HeyGen and similar) on your inputs to generate the deliverables you've engaged us for</li>
              <li>Issue invoices, process payments and meet tax obligations</li>
              <li>Send service updates, project status, and (with your consent) marketing communications</li>
              <li>Improve our website, services, case studies and AI workflows</li>
              <li>Detect, prevent and respond to fraud, abuse or security incidents</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-serif mb-4">4. AI Tools & Third-Party Models</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              To deliver our services we use third-party AI platforms including but not limited to OpenAI Sora, Google Veo, Runway, Kling, Luma, Pika, Seedance, Midjourney, Flux, ElevenLabs, HeyGen, Synthesia and Suno. Inputs you provide (briefs, scripts, references, brand assets, voice samples, likenesses) may be processed by these vendors strictly to generate your deliverables. We choose vendors with enterprise-grade privacy controls and, where available, opt out of model training on your data. We will never knowingly upload personally identifying information about third parties (e.g. talent likenesses) without proper consent.
            </p>

            <h2 className="text-xl sm:text-2xl font-serif mb-4">5. Information Sharing</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-2">We do <strong>not</strong> sell or rent your data. We share information only with:</p>
            <ul className="list-disc pl-5 text-muted-foreground text-sm leading-relaxed mb-6 space-y-1">
              <li><strong>Production partners:</strong> Directors, DOPs, editors, creators, models, stylists and crew strictly for project delivery, under confidentiality</li>
              <li><strong>AI / SaaS vendors:</strong> Hosting, AI generation, analytics, payments and CRM tools that power our workflow</li>
              <li><strong>Legal authorities:</strong> When required by law, court order or to protect our rights</li>
              <li><strong>Successors:</strong> In the event of a merger, acquisition or sale of assets, with continuing privacy commitments</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-serif mb-4">6. Brand Assets, Footage & Confidentiality</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              All brand assets, raw footage, scripts, voice samples and unreleased creative shared with Looplic are treated as confidential. We do not publish or repurpose your content without written consent. Final deliverables ownership is governed by your engagement agreement (typically transferred to you on full payment, with Looplic retaining rights to display the work in our portfolio unless restricted by NDA).
            </p>

            <h2 className="text-xl sm:text-2xl font-serif mb-4">7. Cookies & Analytics</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-2">We use cookies and analytics tools (such as Google Analytics, Meta Pixel) to:</p>
            <ul className="list-disc pl-5 text-muted-foreground text-sm leading-relaxed mb-4 space-y-1">
              <li>Understand site traffic and content performance</li>
              <li>Remember preferences and improve UX</li>
              <li>Measure marketing campaign effectiveness</li>
            </ul>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              You can disable cookies via your browser; some features may degrade.
            </p>

            <h2 className="text-xl sm:text-2xl font-serif mb-4">8. Data Security</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              We use SSL encryption, access controls, encrypted cloud storage, password-protected project shares and limited-access internal tooling. Despite these measures no online transmission is 100% secure; you accept this inherent risk in using digital services.
            </p>

            <h2 className="text-xl sm:text-2xl font-serif mb-4">9. Data Retention</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Project files are retained for up to 24 months post-delivery for revision/re-export needs, then archived or deleted. Inquiry data is deleted within 24 months of the last interaction unless an active engagement exists. Tax records are retained per Indian statutory requirements (typically 7 years).
            </p>

            <h2 className="text-xl sm:text-2xl font-serif mb-4">10. Your Rights</h2>
            <ul className="list-disc pl-5 text-muted-foreground text-sm leading-relaxed mb-6 space-y-1">
              <li><strong>Access</strong> the data we hold on you</li>
              <li><strong>Correct</strong> inaccurate information</li>
              <li><strong>Delete</strong> your personal data, subject to legal obligations</li>
              <li><strong>Withdraw consent</strong> for marketing or data processing at any time</li>
              <li><strong>Object</strong> to specific uses of your data</li>
            </ul>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Email <strong>hello@looplic.media</strong> to exercise any right.
            </p>

            <h2 className="text-xl sm:text-2xl font-serif mb-4">11. Children's Privacy</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Our services are not directed to children under 18. We do not knowingly collect data from minors. Where minors appear as talent in productions, we require verifiable parental/guardian consent and applicable child labour & data compliance.
            </p>

            <h2 className="text-xl sm:text-2xl font-serif mb-4">12. International Transfers</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Some AI vendors and cloud hosts process data outside India (typically the US/EU). By engaging us you consent to such transfers, with vendor-level safeguards in place.
            </p>

            <h2 className="text-xl sm:text-2xl font-serif mb-4">13. Changes to This Policy</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              We may update this Policy as our services or laws evolve. The "Last updated" date will reflect changes. Continued use of our website or services constitutes acceptance.
            </p>

            <h2 className="text-xl sm:text-2xl font-serif mb-4">14. Contact</h2>
            <div className="bg-secondary rounded-xl p-5 text-sm text-muted-foreground space-y-1">
              <p><strong className="text-foreground">Looplic Media</strong></p>
              <p>Bangalore, India</p>
              <p>Email: hello@looplic.media</p>
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

export default PrivacyPolicy;
