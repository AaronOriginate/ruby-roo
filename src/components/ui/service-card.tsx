"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface ServiceCardProps {
  /** Small uppercase label (e.g. "DONE FOR YOU") */
  label: string;
  /** Card title */
  title: string;
  /** Card body text */
  children: ReactNode;
  /** Visual emphasis level */
  emphasis?: "high" | "medium" | "low";
  className?: string;
}

export function ServiceCard({
  label,
  title,
  children,
  emphasis = "medium",
  className,
}: ServiceCardProps) {
  return (
    <motion.div
      className={cn(
        "group relative rounded-lg p-8",
        "bg-bg-secondary border transition-all duration-300",
        emphasis === "high" && "border-accent/30 hover:border-accent",
        emphasis === "medium" && "border-border hover:border-accent/50",
        emphasis === "low" && "border-border hover:border-border-accent",
        className
      )}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {/* Red accent line at top for high emphasis */}
      {emphasis === "high" && (
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent rounded-t-lg" />
      )}

      {/* Label */}
      <span
        className={cn(
          "block text-xs font-semibold uppercase tracking-[0.1em] mb-3",
          emphasis === "high" ? "text-accent" : "text-text-tertiary"
        )}
      >
        {label}
      </span>

      {/* Title */}
      <h3
        className={cn(
          "font-display text-xl font-semibold mb-4",
          "text-text-primary"
        )}
      >
        {title}
      </h3>

      {/* Body */}
      <div className="text-text-secondary text-base leading-relaxed">
        {children}
      </div>

      {/* Subtle hover glow */}
      <div
        className={cn(
          "absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300",
          "group-hover:opacity-100",
          "bg-accent-dim pointer-events-none"
        )}
      />
    </motion.div>
  );
}
