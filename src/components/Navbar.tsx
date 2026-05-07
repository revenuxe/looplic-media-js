"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import AppLink from "@/components/AppLink";
import { assetSrc } from "@/lib/assets";
import logo from "@/assets/media-x-logo.webp";

const navLinks = [
  { label: "Home", href: "/", isRoute: true },
  { label: "Services", href: "/services", isRoute: true },
  { label: "Blog", href: "/blog", isRoute: true },
  { label: "About Us", href: "/about", isRoute: true },
  { label: "Contact Us", href: "/contact", isRoute: true },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full bg-primary py-4 pl-0 pr-4 lg:pl-2 lg:pr-8 relative z-50">
      <div className="flex items-center justify-between w-full">
        <AppLink to="/" className="flex items-center gap-2">
          <img src={assetSrc(logo)} alt="media.x logo" className="h-10 w-auto" />
        </AppLink>

        <nav className="hidden lg:flex items-center bg-primary-foreground/10 backdrop-blur-sm rounded-full px-2 py-1 border border-primary-foreground/20">
          {navLinks.map((link) =>
            link.isRoute ? (
              <AppLink
                key={link.label}
                to={link.href}
                className="px-5 py-2 rounded-full text-sm font-medium transition-colors text-primary-foreground/80 hover:text-primary-foreground"
              >
                {link.label}
              </AppLink>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="px-5 py-2 rounded-full text-sm font-medium transition-colors text-primary-foreground/80 hover:text-primary-foreground"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        <a
          href="/contact"
          className="hidden lg:flex w-11 h-11 rounded-full bg-accent items-center justify-center text-accent-foreground hover:scale-105 transition-transform"
        >
          <ArrowUpRight size={20} />
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-primary-foreground"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="lg:hidden mt-4 flex flex-col gap-2 bg-primary rounded-xl p-4">
          {navLinks.map((link) =>
            link.isRoute ? (
              <AppLink
                key={link.label}
                to={link.href}
                className="text-primary-foreground/80 hover:text-primary-foreground py-2 px-4 rounded-lg text-sm font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </AppLink>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-primary-foreground/80 hover:text-primary-foreground py-2 px-4 rounded-lg text-sm font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            )
          )}
          <AppLink
            to="/contact"
            className="flex items-center justify-center gap-2 bg-accent text-accent-foreground font-semibold py-3 px-6 rounded-full mt-2 hover:scale-105 transition-transform text-sm"
            onClick={() => setMobileOpen(false)}
          >
            <span>Start Your Project</span>
            <ArrowUpRight size={16} />
          </AppLink>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
