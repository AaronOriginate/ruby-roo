"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { LogoWordmark } from "@/components/brand/logo-wordmark";
import { LogoIcon } from "@/components/brand/logo-icon";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { CTAButton } from "@/components/ui/cta-button";

const navItems = [
  { label: "Education", href: "#education" },
  { label: "Strategy", href: "#strategy" },
  { label: "How We Work", href: "#how-we-work" },
  { label: "About", href: "#about" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40",
          "transition-all duration-300",
          scrolled
            ? "bg-bg-primary/80 backdrop-blur-xl border-b border-border shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto max-w-[1280px] px-5 md:px-10 lg:px-20">
          <div className="flex h-16 md:h-20 items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex-shrink-0 text-text-primary" aria-label="Ruby Roo home">
              {/* Desktop wordmark */}
              <LogoWordmark className="hidden md:block w-40" />
              {/* Mobile icon */}
              <LogoIcon className="block md:hidden w-10" />
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "relative text-sm font-medium text-text-secondary",
                    "hover:text-accent transition-colors duration-200",
                    "group"
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-[2px] w-0 bg-accent",
                      "transition-all duration-200 group-hover:w-full"
                    )}
                  />
                </a>
              ))}
            </nav>

            {/* Right side controls */}
            <div className="flex items-center gap-3">
              <ThemeToggle />

              {/* Desktop CTA */}
              <CTAButton
                variant="primary"
                size="sm"
                href="#contact"
                className="hidden md:inline-flex"
              >
                Book a Call
              </CTAButton>

              {/* Mobile hamburger */}
              <button
                className={cn(
                  "lg:hidden flex flex-col items-center justify-center",
                  "w-9 h-9 gap-1.5",
                  "text-text-primary"
                )}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
              >
                <motion.span
                  className="block h-0.5 w-6 bg-current origin-center"
                  animate={
                    mobileOpen
                      ? { rotate: 45, y: 4 }
                      : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="block h-0.5 w-6 bg-current"
                  animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="block h-0.5 w-6 bg-current origin-center"
                  animate={
                    mobileOpen
                      ? { rotate: -45, y: -4 }
                      : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.2 }}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "fixed inset-0 z-30 bg-bg-primary",
              "flex flex-col items-center justify-center",
              "lg:hidden"
            )}
          >
            <nav className="flex flex-col items-center gap-8" aria-label="Mobile navigation">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                  className={cn(
                    "font-display text-3xl font-semibold",
                    "text-text-primary hover:text-accent",
                    "transition-colors duration-200"
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="mt-4"
              >
                <CTAButton
                  variant="primary"
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                >
                  Book a Call
                </CTAButton>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
