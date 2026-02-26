"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { ComponentProps } from "react";

const ctaButtonVariants = cva(
  [
    "relative overflow-hidden inline-flex items-center justify-center gap-2",
    "font-body font-semibold text-base",
    "rounded-full",
    "transition-all duration-200 ease-out",
    "focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "cursor-pointer",
    /* Swipe fill pseudo-element */
    "before:absolute before:inset-0 before:origin-left before:scale-x-0",
    "before:transition-transform before:duration-300 before:ease-out",
    "hover:before:scale-x-100",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-accent text-white",
          "before:bg-accent-hover",
          "active:scale-[0.98]",
          "px-8 py-4",
        ],
        ghost: [
          "bg-transparent text-text-primary",
          "border border-border",
          "before:bg-accent",
          "hover:border-accent hover:text-white",
          "active:scale-[0.98]",
          "px-8 py-4",
        ],
      },
      size: {
        default: "px-8 py-4",
        sm: "px-6 py-3 text-sm",
        lg: "px-10 py-5 text-lg",
        full: "px-8 py-4 w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

type CTAButtonProps = ComponentProps<"button"> &
  VariantProps<typeof ctaButtonVariants> & {
    href?: string;
  };

export function CTAButton({
  className,
  variant,
  size,
  children,
  href,
  ...props
}: CTAButtonProps) {
  const classes = cn(ctaButtonVariants({ variant, size, className }));

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileTap={{ scale: 0.98 }}
      >
        <span className="relative z-10">{children}</span>
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      whileTap={{ scale: 0.98 }}
      {...(props as ComponentProps<typeof motion.button>)}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}

export { ctaButtonVariants };
