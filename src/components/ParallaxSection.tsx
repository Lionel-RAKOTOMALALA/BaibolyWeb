"use client";

import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  /** Path to a background image for the deepest parallax layer. */
  bgImage?: string;
  /** CSS gradient/color overlay on the background image. */
  bgOverlay?: string;
  /**
   * Background layer speed (0-1, default 0.5).
   * Higher = more movement = more depth illusion.
   * yPercent range = ±(bgSpeed * intensity * 15).
   */
  bgSpeed?: number;
  /**
   * Content layer speed (0-1, default 0.2).
   * yPercent range = ±(contentSpeed * intensity * 8).
   */
  contentSpeed?: number;
  /** Global intensity multiplier (default 1). */
  intensity?: number;
  /** Parallax direction (default "up"). */
  direction?: "up" | "down";
  /** Priority loading for above-the-fold background images. */
  priority?: boolean;
}

export default function ParallaxSection({
  children,
  id,
  className = "",
  bgImage,
  bgOverlay,
  bgSpeed = 0.5,
  contentSpeed = 0.2,
  intensity = 1,
  direction = "up",
  priority = false,
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const dir = direction === "up" ? -1 : 1;

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        if (bgRef.current) {
          gsap.fromTo(
            bgRef.current,
            { yPercent: dir * bgSpeed * intensity * -15 },
            {
              yPercent: dir * bgSpeed * intensity * 15,
              ease: "none",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            }
          );
        }

        if (contentRef.current && contentSpeed > 0) {
          gsap.fromTo(
            contentRef.current,
            { yPercent: dir * contentSpeed * intensity * -8 },
            {
              yPercent: dir * contentSpeed * intensity * 8,
              ease: "none",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            }
          );
        }
      });

      mm.add("(max-width: 767px)", () => {
        if (bgRef.current) {
          gsap.fromTo(
            bgRef.current,
            { yPercent: dir * bgSpeed * intensity * -8 },
            {
              yPercent: dir * bgSpeed * intensity * 8,
              ease: "none",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            }
          );
        }

        if (contentRef.current && contentSpeed > 0) {
          gsap.fromTo(
            contentRef.current,
            { yPercent: dir * contentSpeed * intensity * -4 },
            {
              yPercent: dir * contentSpeed * intensity * 4,
              ease: "none",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            }
          );
        }
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`relative overflow-hidden ${className}`}
    >
      {bgImage && (
        <div
          ref={bgRef}
          className="absolute inset-x-0 -inset-y-[15%] will-change-transform"
        >
          <Image
            src={bgImage}
            alt=""
            fill
            className="object-cover"
            priority={priority}
            onLoad={() => ScrollTrigger.refresh()}
          />
          {bgOverlay && (
            <div
              className="absolute inset-0"
              style={{ background: bgOverlay }}
            />
          )}
        </div>
      )}

      <div ref={contentRef} className="relative z-10 will-change-transform">
        {children}
      </div>
    </section>
  );
}
