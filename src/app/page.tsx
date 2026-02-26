"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { CTAButton } from "@/components/ui/cta-button";
import { StatBlock } from "@/components/ui/stat-block";
import { ServiceCard } from "@/components/ui/service-card";
import { TestimonialBlock } from "@/components/ui/testimonial-block";
import { LogoIcon } from "@/components/brand";
import { Hexagon } from "@/components/brand";
import { useRef, useState, useEffect } from "react";

/* ================================================================
   STAGGER ANIMATION HELPERS
   ================================================================ */
const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ================================================================
   FULL-BLEED IMAGE BREAK — brochure style
   ================================================================ */
function ImageBreak({ src, alt, height = "h-[45vh]" }: { src: string; alt: string; height?: string }) {
  return (
    <div className={`relative w-full ${height} overflow-hidden`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-bg-primary/30" aria-hidden="true" />
    </div>
  );
}

/* ================================================================
   TYPEWRITER LINE — clip reveal with red cursor bar
   ================================================================ */
function TypewriterLine({
  text,
  delay = 0,
  duration = 1.2,
}: {
  text: string;
  delay?: number;
  duration?: number;
}) {
  const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];
  return (
    <span className="block relative">
      {/* Invisible spacer for layout */}
      <span className="invisible select-none" aria-hidden="true">{text}</span>
      {/* Revealed text */}
      <motion.span
        className="absolute inset-0"
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration, delay, ease }}
      >
        {text}
      </motion.span>
      {/* Red cursor bar leading the reveal */}
      <motion.span
        className="absolute top-[10%] bottom-[10%] w-[3px] bg-accent"
        initial={{ left: "0%", opacity: 0 }}
        animate={{ left: "100%", opacity: [0, 1, 1, 0] }}
        transition={{
          left: { duration, delay, ease },
          opacity: { duration: duration + 0.3, delay, times: [0, 0.01, 0.85, 1] },
        }}
      />
    </span>
  );
}

/* ================================================================
   CYCLING HERO — typewriter in, Ctrl+A highlight, delete, repeat
   ================================================================ */
const heroLines: [string, string][] = [
  ["You know something", "isn\u2019t working."],
  ["You\u2019ve known", "for a while."],
  ["Advice didn\u2019t", "fix it."],
  ["We don\u2019t just advise.", "We build."],
];

function CyclingHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Typing ~2s + long hold ~6s = swap every 8s
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % heroLines.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-6xl">
      {/* Descriptor — instant clarity */}
      <motion.span
        className="inline-block font-mono text-xs md:text-sm uppercase tracking-[0.2em] text-white font-medium border border-accent bg-accent/10 backdrop-blur-sm rounded-full px-6 py-2.5 mb-8 md:mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        Education &amp; Business Consultancy
      </motion.span>

      {/* Cycling headline */}
      <div
        className="font-display font-semibold text-white leading-[1.02] tracking-[-0.03em]"
        style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)" }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <TypewriterLine text={heroLines[index][0]} delay={0.3} duration={0.8} />
            <TypewriterLine text={heroLines[index][1]} delay={1.3} duration={0.6} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Static subtext + CTAs — appear once on first load */}
      <motion.p
        className="mt-8 md:mt-12 max-w-xl text-lg md:text-xl text-white/75 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2.4 }}
      >
        You need someone who&apos;ll ask the hard questions, do the actual work, and hand you a finished outcome — not a PowerPoint deck.
      </motion.p>

      <motion.div
        className="mt-10 md:mt-14 flex flex-col sm:flex-row flex-wrap gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2.8 }}
      >
        <CTAButton variant="primary" size="lg" href="#contact">
          Book a free call
        </CTAButton>
        <CTAButton variant="ghost" size="lg" href="#how-we-work">
          See how it works
        </CTAButton>
      </motion.div>
    </div>
  );
}

/* ================================================================
   HOMEPAGE
   ================================================================ */
export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <>
      {/* ===============================================================
          01 — HERO
          Full-bleed. Open. Let the image breathe.
          =============================================================== */}
      <section
        ref={heroRef}
        className="relative flex min-h-screen items-center overflow-hidden"
        id="hero"
      >
        {/* Background image — full bleed, visible */}
        <Image
          src="/images/hero-architecture.jpg"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        {/* Lighter overlay — let image show through */}
        <div className="absolute inset-0 bg-bg-primary/55" aria-hidden="true" />

        {/* Bottom fade into next section */}
        <div
          className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg-primary to-transparent"
          aria-hidden="true"
        />

        {/* Logo watermark — big, fading from transparent to red */}
        <div
          className="absolute right-[-5%] top-1/2 -translate-y-1/2 pointer-events-none select-none"
          style={{
            WebkitMaskImage: "linear-gradient(to right, transparent 10%, rgba(0,0,0,0.18) 100%)",
            maskImage: "linear-gradient(to right, transparent 10%, rgba(0,0,0,0.18) 100%)",
          }}
          aria-hidden="true"
        >
          <LogoIcon className="w-[90vw] max-w-[1500px] text-accent" />
        </div>

        {/* Content — full width, no box */}
        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="relative z-10 w-full px-8 md:px-16 lg:px-24 xl:px-32 pt-32 pb-20 md:pt-40 md:pb-32"
        >
          <CyclingHero />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent"
          />
        </motion.div>
      </section>

      {/* ===============================================================
          02 — SOCIAL PROOF BAR
          =============================================================== */}
      <SectionWrapper padding="sm" bg="secondary" id="social-proof" className="border-y border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <StatBlock value={14} suffix="+" label="Years in Education & Apprenticeships" />
          <StatBlock value={200} suffix="+" label="Programmes Designed & Delivered" />
          <StatBlock value={97} suffix="%" label="Client Retention Rate" />
          <StatBlock value={23} label="UK Cities" />
        </div>
      </SectionWrapper>

      {/* ===============================================================
          03 — EDUCATION PATHWAY
          Big image, tight copy
          =============================================================== */}
      <section id="education" className="relative overflow-hidden bg-bg-primary">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
          {/* Image side — people on laptops, online delivery */}
          <div className="relative h-[50vh] lg:h-auto">
            <Image
              src="/images/education-online-laptops.jpg"
              alt="Online education and training"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-bg-primary/20 lg:bg-gradient-to-r lg:from-transparent lg:to-bg-primary/60" aria-hidden="true" />
          </div>

          {/* Content side — high visibility */}
          <motion.div
            className="relative flex items-center px-8 md:px-16 lg:px-20 py-16 lg:py-24"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full">
              <h2
                className="font-display font-semibold text-text-primary leading-[1.05]"
                style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
              >
                Skills England is here.{" "}
                <span className="block text-accent">Your curriculum isn&apos;t ready.</span>
              </h2>

              <p className="mt-6 text-text-secondary text-lg md:text-xl leading-relaxed max-w-lg">
                IfATE is gone. The Growth and Skills Levy launches April 2026. Your programmes need redesigning — not tweaking.
              </p>

              {/* National stats — clearly labelled as the problem */}
              <div className="mt-8 p-6 rounded-xl bg-bg-secondary border border-border">
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent mb-5 font-semibold">UK National Averages — the problem we fix</p>
                <div className="grid grid-cols-3 gap-5">
                  <div>
                    <span className="font-mono text-2xl md:text-3xl font-bold text-white">60.5%</span>
                    <span className="block text-xs text-text-tertiary mt-1.5">National achievement rate</span>
                  </div>
                  <div>
                    <span className="font-mono text-2xl md:text-3xl font-bold text-white">38.1%</span>
                    <span className="block text-xs text-text-tertiary mt-1.5">National dropout rate</span>
                  </div>
                  <div>
                    <span className="font-mono text-2xl md:text-3xl font-bold text-white">&pound;800m</span>
                    <span className="block text-xs text-text-tertiary mt-1.5">Levy returned to Treasury</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <CTAButton variant="primary" size="lg" href="#contact">
                  Work with us on education
                </CTAButton>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===============================================================
          03b — WORKSHOPS CAROUSEL
          15,000 apprentices fail every year. Here's what we do about it.
          =============================================================== */}
      <section className="relative bg-bg-secondary py-20 md:py-28 overflow-hidden" id="workshops">
        {/* Header */}
        <div className="mx-auto max-w-[1280px] px-5 md:px-10 lg:px-20 mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-5xl md:text-7xl font-bold text-accent">15,000</span>
              <span className="text-text-secondary text-lg md:text-xl leading-tight max-w-xs">
                apprentices fail<br />every single year.
              </span>
            </div>
            <h2
              className="font-display font-semibold text-text-primary leading-[1.05]"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Our workshops tackle the root causes.
            </h2>
            <p className="mt-3 text-text-tertiary text-sm font-mono uppercase tracking-wider">
              Scroll &rarr;
            </p>
          </motion.div>
        </div>

        {/* Carousel — 3 big image-led cards */}
        <div
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-5 md:px-10 lg:px-20 pb-6"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {[
            {
              tag: "Design",
              title: "Apprenticeship Design",
              body: "Build programmes from scratch — or rebuild them properly. Curriculum mapped to new standards, assessment strategy designed backward from EPA, off-the-job structured to develop real skills.",
              image: "/images/education-classroom-presentation.jpg",
              points: ["Curriculum architecture", "Assessment framework design", "Off-the-job training structure", "Employer engagement model"],
              stat: "60.5%",
              statLabel: "national achievement rate — yours should be higher",
            },
            {
              tag: "Remediation",
              title: "Apprenticeship Remediation",
              body: "Your programme is failing and you know why — or worse, you don\u2019t. We diagnose the root causes, fix the delivery model, and rebuild what\u2019s broken before Ofsted does it for you.",
              image: "/images/education-workshop.jpg",
              points: ["Root cause analysis", "Dropout intervention systems", "Quality improvement planning", "Ofsted preparation"],
              stat: "38.1%",
              statLabel: "dropout rate — fixable, if you act now",
            },
            {
              tag: "Success",
              title: "Apprenticeship Success",
              body: "Get your learners across the line. EPA preparation that works, gateway reviews that catch gaps early, and progression pathways that prove the programme\u2019s value to everyone involved.",
              image: "/images/workshop-success.jpg",
              points: ["EPA readiness programme", "Gateway review process", "Evidence portfolio design", "Progression & destination tracking"],
              stat: "1 in 3",
              statLabel: "fail their EPA first time — yours won\u2019t",
            },
          ].map((workshop, i) => (
            <motion.div
              key={workshop.tag}
              className="group relative flex-none w-[85vw] md:w-[480px] lg:w-[520px] snap-center rounded-xl bg-bg-primary border border-border overflow-hidden hover:border-accent/50 transition-colors duration-300"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              {/* Image */}
              <div className="relative h-[220px] md:h-[260px] overflow-hidden">
                <Image
                  src={workshop.image}
                  alt={workshop.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 520px, (min-width: 768px) 480px, 85vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/20 to-transparent" />
                {/* Tag overlay */}
                <span className="absolute bottom-4 left-5 font-mono text-[10px] uppercase tracking-[0.15em] text-white border border-white/30 bg-bg-primary/50 backdrop-blur-sm rounded-full px-3 py-1">
                  {workshop.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-text-primary mb-3">
                    {workshop.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-5">
                    {workshop.body}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-2 mb-6">
                    {workshop.points.map((point) => (
                      <li key={point} className="flex items-center gap-2.5 text-sm text-text-secondary">
                        <Hexagon className="w-2 h-2 flex-none" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stat footer */}
                <div className="pt-5 border-t border-border">
                  <span className="font-mono text-2xl font-bold text-accent">{workshop.stat}</span>
                  <span className="block text-xs text-text-tertiary mt-1">{workshop.statLabel}</span>
                </div>
              </div>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}

          {/* Spacer for scroll padding */}
          <div className="flex-none w-5 md:w-10 lg:w-20" aria-hidden="true" />
        </div>
      </section>

      {/* --- Brochure image break --- */}
      <ImageBreak
        src="/images/atmosphere-dark-office.jpg"
        alt="Modern workspace atmosphere"
        height="h-[45vh]"
      />

      {/* ===============================================================
          04 — STRATEGY PATHWAY
          Mirrored layout. Trimmed copy.
          =============================================================== */}
      <section id="strategy" className="relative overflow-hidden bg-bg-secondary">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
          {/* Content side */}
          <motion.div
            className="relative flex items-center px-8 md:px-16 lg:px-20 py-16 lg:py-24 order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h2 className="font-display font-semibold text-text-primary">
                You built this business.{" "}
                <span className="block text-text-secondary">Now it runs you.</span>
              </h2>

              <p className="mt-6 text-text-secondary text-lg leading-relaxed max-w-lg">
                You stopped being a business owner and started being a firefighter. You haven&apos;t thought strategically in months.
              </p>

              <p className="mt-6 text-text-primary font-medium text-lg border-l-2 border-border pl-5 max-w-lg">
                Action without direction is just exhaustion with extra steps.
              </p>

              <div className="mt-8">
                <CTAButton variant="ghost" href="#contact">
                  Work with us on strategy
                </CTAButton>
              </div>
            </div>
          </motion.div>

          {/* Image side — large, dramatic */}
          <div className="relative h-[50vh] lg:h-auto order-1 lg:order-2">
            <Image
              src="/images/strategy-planning-board.jpg"
              alt="Strategic planning"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-bg-primary/15 lg:bg-gradient-to-l lg:from-transparent lg:to-bg-secondary/50" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* --- Brochure image break --- */}
      <ImageBreak
        src="/images/geometric-building.jpg"
        alt="Modern architecture"
        height="h-[40vh]"
      />

      {/* ===============================================================
          05 — HOW WE'RE DIFFERENT
          Tight headline + cards only
          =============================================================== */}
      <SectionWrapper padding="lg" id="how-we-work">
        <motion.div
          className="mb-12 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="font-display font-semibold text-text-primary leading-[1.05]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            We don&apos;t advise. We build.
          </h2>
          <p className="mt-5 text-text-secondary text-lg leading-relaxed max-w-xl">
            Fixed scope. Clear price. Defined timeline.{" "}
            <span className="text-text-primary font-medium">Finished.</span>
          </p>
        </motion.div>

        {/* Service cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={staggerItem}>
            <ServiceCard label="Done For You" title="We take it from here." emphasis="high">
              <p>We take the brief, do the work, deliver the finished product.</p>
            </ServiceCard>
          </motion.div>

          <motion.div variants={staggerItem}>
            <ServiceCard label="Done With You" title="We drive. You navigate." emphasis="medium">
              <p>We work alongside your team with the frameworks and the pace.</p>
            </ServiceCard>
          </motion.div>

          <motion.div variants={staggerItem}>
            <ServiceCard label="Done By You" title="We set you up." emphasis="low">
              <p>The right tools, templates, and thinking. Then we step back.</p>
            </ServiceCard>
          </motion.div>
        </motion.div>
      </SectionWrapper>

      {/* --- Brochure image break --- */}
      <ImageBreak
        src="/images/different-tools-building.jpg"
        alt="Hands building and creating"
        height="h-[35vh]"
      />

      {/* ===============================================================
          06 — STORY / CREDIBILITY
          Testimonial + one tight paragraph
          =============================================================== */}
      <section id="about" className="relative overflow-hidden bg-bg-secondary">
        <div className="grid grid-cols-1 lg:grid-cols-5 min-h-[70vh]">
          {/* Image side — portrait style */}
          <div className="relative h-[45vh] lg:h-auto lg:col-span-2">
            <Image
              src="/images/credibility-professional-woman.jpg"
              alt="Professional setting"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
            <div className="absolute inset-0 bg-bg-primary/10 lg:bg-gradient-to-r lg:from-transparent lg:to-bg-secondary/80" aria-hidden="true" />
          </div>

          {/* Content side */}
          <motion.div
            className="relative flex items-center px-8 md:px-16 lg:px-20 py-16 lg:py-24 lg:col-span-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-2xl">
              <TestimonialBlock
                quote="She asks the questions we're avoiding, she digs beneath the surface and gets real results rather than polishing a pig. My business is better for it."
                attribution="Client Testimonial"
                role="Business Owner"
              />

              <p className="mt-10 text-text-secondary text-lg leading-relaxed">
                Kim Watts has spent 14+ years in education and apprenticeships — designing programmes, navigating Ofsted, and working with business owners who built incredible companies but lost the plot somewhere along the way.
              </p>

              <p className="mt-4 text-text-primary font-semibold text-xl">
                We don&apos;t do thought leadership. We do the work.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Brochure image break --- */}
      <ImageBreak
        src="/images/transformation-clarity-focus.jpg"
        alt="Clarity and focus"
        height="h-[40vh]"
      />

      {/* ===============================================================
          07 — TRANSFORMATION
          Lean two-column
          =============================================================== */}
      <SectionWrapper padding="lg" id="transformation">
        <motion.h2
          className="font-display font-semibold text-text-primary text-center mb-4"
          style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What changes.
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-0 mt-12 md:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Education column */}
          <div className="p-8 md:p-10 lg:p-12 lg:border-r border-border">
            <div className="flex items-center gap-3 mb-6">
              <Hexagon className="w-3 h-3" />
              <span className="font-mono text-xs uppercase tracking-wider text-accent">For Education Providers</span>
            </div>
            <p className="text-text-secondary text-base leading-relaxed">
              Your curriculum meets the new standards — genuinely good, not just compliant. When the next reform lands, you&apos;re ready.
            </p>
          </div>

          <div className="h-px bg-border lg:hidden" aria-hidden="true" />

          {/* Business column */}
          <div className="p-8 md:p-10 lg:p-12">
            <div className="flex items-center gap-3 mb-6">
              <Hexagon className="w-3 h-3" />
              <span className="font-mono text-xs uppercase tracking-wider text-accent">For Business Owners</span>
            </div>
            <p className="text-text-secondary text-base leading-relaxed">
              You stop being the bottleneck. Your operations make sense. You remember why you started this.
            </p>
          </div>
        </motion.div>
      </SectionWrapper>

      {/* ===============================================================
          08 — FINAL CTA
          Dynamic. Dramatic. Full viewport. Animated reveals.
          =============================================================== */}
      <section id="contact" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/hero-dark-architecture.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-bg-primary/75" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/60 via-transparent to-bg-primary/80" aria-hidden="true" />

        {/* Accent glow — pulsing */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/[0.08] blur-[180px] pointer-events-none"
          animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.12, 0.08] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />

        <div className="relative z-10 w-full px-8 md:px-16 lg:px-24 py-24 md:py-32">
          <div className="max-w-6xl mx-auto">
            {/* Massive headline — word-by-word reveal */}
            <div className="overflow-hidden">
              <motion.h2
                className="font-display font-semibold text-text-primary leading-[0.95] tracking-[-0.03em]"
                style={{ fontSize: "clamp(4rem, 12vw, 10rem)" }}
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                Let&apos;s talk.
              </motion.h2>
            </div>

            {/* Animated accent line */}
            <motion.div
              className="mt-6 h-1 bg-accent origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{ width: "180px" }}
            />

            <motion.p
              className="mt-8 text-text-secondary text-xl md:text-2xl leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              25 minutes with Kim. Free. No pitch deck.{" "}
              <span className="text-text-primary font-medium">Just honesty.</span>
            </motion.p>

            {/* Three steps — dramatic numbers */}
            <motion.div
              className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 max-w-4xl"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {[
                { num: "01", text: "Tell us what\u2019s really going on." },
                { num: "02", text: "Kim asks the hard questions." },
                { num: "03", text: "We tell you honestly if we can help." },
              ].map((step) => (
                <motion.div
                  key={step.num}
                  variants={staggerItem}
                  className="relative"
                >
                  <span className="font-mono text-7xl md:text-8xl font-bold text-accent/10 block mb-3 leading-none">
                    {step.num}
                  </span>
                  <p className="text-text-secondary text-lg leading-relaxed">
                    {step.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA — large, glowing */}
            <motion.div
              className="mt-16 md:mt-24"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <CTAButton variant="primary" size="lg">
                Book your free call
              </CTAButton>
              <p className="mt-5 text-text-tertiary text-sm">
                or email{" "}
                <a
                  href="mailto:kim@rubyroo.uk"
                  className="text-accent hover:text-accent-hover transition-colors"
                >
                  kim@rubyroo.uk
                </a>
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
