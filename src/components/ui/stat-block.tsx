"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatBlockProps {
  /** The target number to count up to */
  value: number;
  /** Suffix like "+", "%", "m" */
  suffix?: string;
  /** Prefix like "$", "GBP" */
  prefix?: string;
  /** Label below the number */
  label: string;
  /** Decimal places for the number */
  decimals?: number;
  /** Duration of count-up in seconds */
  duration?: number;
  className?: string;
}

export function StatBlock({
  value,
  suffix = "",
  prefix = "",
  label,
  decimals = 0,
  duration = 1.5,
  className,
}: StatBlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const startTime = Date.now();
    const durationMs = duration * 1000;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / durationMs, 1);

      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(eased * value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  // Check for reduced motion preference
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const formattedValue = prefersReducedMotion
    ? value.toFixed(decimals)
    : displayValue.toFixed(decimals);

  return (
    <motion.div
      ref={ref}
      className={cn("text-center", className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <span
        className={cn(
          "block font-mono font-bold text-accent",
          "text-[clamp(2.5rem,5vw,4rem)]",
          "leading-none tracking-tight"
        )}
      >
        {prefix}
        {formattedValue}
        {suffix}
      </span>
      <span
        className={cn(
          "mt-2 block font-body text-sm font-normal",
          "uppercase tracking-wider text-text-secondary"
        )}
      >
        {label}
      </span>
    </motion.div>
  );
}
