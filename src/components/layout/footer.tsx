"use client";

import { cn } from "@/lib/utils";
import { LogoWordmark } from "@/components/brand/logo-wordmark";
import { Hexagon } from "@/components/brand/hexagon";

const quickLinks = [
  { label: "Education", href: "#education" },
  { label: "Strategy", href: "#strategy" },
  { label: "How We Work", href: "#how-we-work" },
  { label: "About", href: "#about" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-secondary border-t border-border">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10 lg:px-20 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand column */}
          <div>
            <LogoWordmark className="w-36 text-text-primary mb-6" />
            <p className="font-display text-lg font-medium text-text-secondary italic">
              Ask the hard questions.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-text-tertiary mb-4">
              Quick Links
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={cn(
                        "inline-flex items-center gap-2 text-sm text-text-secondary",
                        "hover:text-accent transition-colors duration-200"
                      )}
                    >
                      <Hexagon className="w-2 h-2 opacity-50" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-text-tertiary mb-4">
              Get in Touch
            </h3>
            <a
              href="mailto:kim@rubyroo.uk"
              className="text-sm text-text-secondary hover:text-accent transition-colors duration-200"
            >
              kim@rubyroo.uk
            </a>
            <div className="mt-6">
              <a
                href="#contact"
                className={cn(
                  "inline-flex items-center gap-2 px-6 py-3 rounded-full",
                  "bg-accent text-white text-sm font-semibold",
                  "hover:bg-accent-hover transition-colors duration-200"
                )}
              >
                Book a Call
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-tertiary">
            &copy; {currentYear} Ruby Roo Ltd. All rights reserved.
          </p>
          <p className="text-xs text-text-tertiary">
            Strategy &middot; Marketing &middot; Education
          </p>
        </div>
      </div>
    </footer>
  );
}
