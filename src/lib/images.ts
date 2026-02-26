/**
 * Image asset manifest for Ruby Roo homepage.
 *
 * All images are in /public/images/ and sourced from:
 * - Brand assets: Logo SVGs and PNGs from discovery/assets/
 * - Stock photography: Unsplash images from discovery/assets/unsplash/
 *
 * Usage: import { images } from "@/lib/images"
 *        <Image src={images.hero.abstractWavy} ... />
 */

export const images = {
  /** Brand logos (also available as React components in @/components/brand/) */
  brand: {
    combinedSvg: "/images/RubyRoo_Combined_Black HI-RES.svg",
    combinedPng: "/images/RubyRoo_Combined_Black HI-RES.png",
    iconSvg: "/images/RubyRoo_Icon_tri.svg",
    iconPng: "/images/RubyRoo_Icon_tri.png",
  },

  /** Hero section background options */
  hero: {
    /** Abstract black wavy texture -- dramatic, editorial feel */
    abstractWavy: "/images/hero-abstract-black-wavy.jpg",
    /** Geometric architecture -- clean lines, structured */
    geometricArchitecture: "/images/hero-geometric-architecture.jpg",
    /** Dark stone texture -- subtle, grounded */
    darkStoneTexture: "/images/hero-dark-stone-texture.jpg",
  },

  /** Section background textures */
  textures: {
    /** UK building with geometric patterns -- echoes hexagonal brand motif */
    geometricBuilding: "/images/texture-geometric-building-uk.jpg",
  },
} as const;
