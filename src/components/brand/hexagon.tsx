import { cn } from "@/lib/utils";

/**
 * Decorative hexagon motif from the Ruby Roo brand.
 * Can be used as bullet points, dividers, or ornamental accents.
 */
export function Hexagon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 184 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-4 h-4", className)}
      aria-hidden="true"
    >
      <polygon
        fill="var(--rr-accent, #EA1C33)"
        points="138 0 46 0 0 79.69 46 159.37 138 159.37 184 79.69 138 0"
      />
    </svg>
  );
}

/**
 * Three stacked hexagons, the signature Ruby Roo brand motif.
 */
export function HexagonStack({ className }: { className?: string }) {
  return (
    <svg
      viewBox="620 220 200 640"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-6 h-auto", className)}
      aria-hidden="true"
    >
      <polygon
        fill="var(--rr-accent, #EA1C33)"
        points="764.8 228.15 672.78 228.15 626.78 307.84 672.78 387.52 764.8 387.52 810.8 307.84 764.8 228.15"
      />
      <polygon
        fill="var(--rr-accent, #EA1C33)"
        points="764.8 460.02 672.78 460.02 626.78 539.71 672.78 619.39 764.8 619.39 810.8 539.71 764.8 460.02"
      />
      <polygon
        fill="var(--rr-accent, #EA1C33)"
        points="764.8 691.89 672.78 691.89 626.78 771.58 672.78 851.26 764.8 851.26 810.8 771.58 764.8 691.89"
      />
    </svg>
  );
}
