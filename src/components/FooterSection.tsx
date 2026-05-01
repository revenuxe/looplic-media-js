import { Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

type FooterLink = { label?: string; href?: string; isRoute?: boolean };

const footerLinks: Record<string, FooterLink[]> = {
  "Quick Links": [
    { label: "Home", href: "/", isRoute: true },
    { label: "All Services", href: "/services", isRoute: true },
    { label: "About Us", href: "/about", isRoute: true },
    { label: "Contact Us", href: "/contact", isRoute: true },
  ],
  Services: [
    { label: "AI Video Production", href: "/services/ai-video-production", isRoute: true },
    { label: "Ad Film Production", href: "/services/ad-film-production", isRoute: true },
    { label: "UGC & Creator Content", href: "/services/ugc-content", isRoute: true },
    { label: "Performance Creative", href: "/services/performance-creative", isRoute: true },
    { label: "E-commerce Video Ads", href: "/services/ecommerce-video", isRoute: true },
    { label: "Motion Graphics", href: "/services/motion-graphics", isRoute: true },
  ],
  More: [
    { label: "Product Photography", href: "/services/product-photography", isRoute: true },
    { label: "Brand & Lifestyle Shoots", href: "/services/brand-shoots", isRoute: true },
    { label: "Podcast Production", href: "/services/podcast-video", isRoute: true },
    { label: "AI Avatars", href: "/services/ai-avatars", isRoute: true },
    { label: "Social Media Reels", href: "/services/social-content", isRoute: true },
    { label: "AI Scripts & Storyboards", href: "/services/scripts-storyboards", isRoute: true },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy-policy", isRoute: true },
    { label: "Terms & Conditions", href: "/terms-and-conditions", isRoute: true },
  ],
};

const FooterSection = () => {
  return (
    <footer id="contact" className="bg-secondary">
      {/* CTA area */}
      <div className="py-10 md:py-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8 md:gap-12">
          <div className="max-w-lg">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif leading-snug mb-6 md:mb-8 text-foreground">
              <span className="italic">Let's</span> build content that moves your brand. Talk to us today.
            </h2>
            <a
              href="/contact"
              className="inline-block bg-accent text-accent-foreground font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:scale-105 transition-transform text-sm"
            >
              Start Your Project
            </a>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-sm mb-1">Studio</h4>
              <p className="text-sm text-muted-foreground">
                Looplic Media<br />
                Bangalore, India
              </p>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-1">Phone</h4>
              <p className="text-sm text-muted-foreground">+91 98862 85028</p>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-1">Email</h4>
              <p className="text-sm text-muted-foreground">hello@looplic.media</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer links */}
      <div className="border-t border-border py-8 md:py-12 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-8">
          <div className="col-span-2">
            <p className="text-sm text-muted-foreground max-w-xs mb-6">
              Looplic is an AI media company producing AI video, ad films, UGC-style content, and brand &amp; product shoots for modern brands.
            </p>
            <p className="text-xs text-muted-foreground mb-2">Visit us on:</p>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/company/looplic" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-foreground flex items-center justify-center hover:bg-accent hover:border-accent hover:text-accent-foreground transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="https://www.instagram.com/looplic.media/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-foreground flex items-center justify-center hover:bg-accent hover:border-accent hover:text-accent-foreground transition-colors">
                <Instagram size={16} />
              </a>
            </div>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold text-sm mb-3 md:mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.isRoute ? (
                      <Link to={link.href!} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                        {link.label}
                      </Link>
                    ) : (
                      <a href={link.href} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-primary py-4 px-4 sm:px-6 text-center border-t border-border">
        <p className="text-xs sm:text-sm text-primary-foreground">© 2026 Looplic Media. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default FooterSection;
