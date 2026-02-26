"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TestimonialBlockProps {
  /** The testimonial text */
  quote: string;
  /** Who said it */
  attribution?: string;
  /** Their role/company */
  role?: string;
  className?: string;
}

export function TestimonialBlock({
  quote,
  attribution,
  role,
  className,
}: TestimonialBlockProps) {
  return (
    <motion.blockquote
      className={cn("relative", className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Oversized quotation mark */}
      <span
        className={cn(
          "absolute -top-8 -left-4 font-display",
          "text-[8rem] leading-none",
          "text-accent opacity-30",
          "pointer-events-none select-none"
        )}
        aria-hidden="true"
      >
        {"\u201C"}
      </span>

      {/* Quote text */}
      <p
        className={cn(
          "relative z-10 font-body italic",
          "text-[clamp(1.25rem,2.5vw,1.75rem)]",
          "leading-relaxed text-text-primary"
        )}
      >
        {quote}
      </p>

      {/* Attribution */}
      {(attribution || role) && (
        <footer className="mt-6 relative z-10">
          {attribution && (
            <cite className="not-italic font-semibold text-sm text-text-secondary">
              {attribution}
            </cite>
          )}
          {role && (
            <span className="block text-sm text-text-tertiary mt-1">
              {role}
            </span>
          )}
        </footer>
      )}
    </motion.blockquote>
  );
}
