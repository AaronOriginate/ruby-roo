"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  /** Additional padding override */
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  /** Max width constraint */
  maxWidth?: "sm" | "md" | "lg" | "xl" | "full";
  /** HTML id for scroll targeting */
  id?: string;
  /** Background variant */
  bg?: "primary" | "secondary" | "tertiary";
  /** Whether to apply fade-in animation */
  animate?: boolean;
}

const paddingMap = {
  none: "",
  sm: "py-12 md:py-16",
  md: "py-16 md:py-24",
  lg: "py-24 md:py-32",
  xl: "py-32 md:py-40",
};

const maxWidthMap = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-7xl",
  xl: "max-w-[1280px]",
  full: "max-w-none",
};

const bgMap = {
  primary: "bg-bg-primary",
  secondary: "bg-bg-secondary",
  tertiary: "bg-bg-tertiary",
};

export function SectionWrapper({
  children,
  className,
  padding = "lg",
  maxWidth = "xl",
  id,
  bg = "primary",
  animate = true,
}: SectionWrapperProps) {
  const content = (
    <div
      className={cn(
        maxWidthMap[maxWidth],
        "mx-auto w-full px-5 md:px-10 lg:px-20"
      )}
    >
      {children}
    </div>
  );

  if (animate) {
    return (
      <motion.section
        id={id}
        className={cn(bgMap[bg], paddingMap[padding], className)}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {content}
      </motion.section>
    );
  }

  return (
    <section id={id} className={cn(bgMap[bg], paddingMap[padding], className)}>
      {content}
    </section>
  );
}
