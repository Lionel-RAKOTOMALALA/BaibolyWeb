"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AnimateType = "y" | "x" | "scale";

/**
 * Mounted once at the root layout. Drives every scroll-linked animation
 * in the app via a `data-animate="unique-name"` convention:
 *
 * - `data-animate="hero-*"` elements get a one-shot entrance timeline on load.
 * - Any other `[data-animate]` element gets a scrub-linked reveal as it
 *   enters the viewport.
 * - `data-animate-group="name"` groups siblings (cards, list items) so they
 *   cascade with a staggered delay instead of revealing all at once.
 * - `data-animate-type="x"|"scale"` switches the reveal motion (defaults to "y").
 */
export default function ScrollAnimationProvider() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const heroTl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 0.9 },
    });

    const heroBadge = document.querySelector<HTMLElement>('[data-animate="hero-badge"]');
    const heroTitle = document.querySelector<HTMLElement>('[data-animate="hero-title"]');
    const heroText = document.querySelector<HTMLElement>('[data-animate="hero-text"]');
    const heroButtons = document.querySelector<HTMLElement>('[data-animate="hero-buttons"]');
    const heroStats = document.querySelector<HTMLElement>('[data-animate="hero-stats"]');
    const heroImage = document.querySelector<HTMLElement>('[data-animate="hero-image"]');

    if (heroBadge) {
      heroTl.fromTo(heroBadge, { opacity: 0, y: 16 }, { opacity: 1, y: 0 });
    }
    if (heroTitle) {
      heroTl.fromTo(heroTitle, { opacity: 0, y: 40 }, { opacity: 1, y: 0 }, "-=0.6");
    }
    if (heroText) {
      heroTl.fromTo(heroText, { opacity: 0, y: 30 }, { opacity: 1, y: 0 }, "-=0.6");
    }
    if (heroButtons) {
      heroTl.fromTo(heroButtons, { opacity: 0, y: 24 }, { opacity: 1, y: 0 }, "-=0.5");
    }
    if (heroStats) {
      heroTl.fromTo(heroStats, { opacity: 0, y: 24 }, { opacity: 1, y: 0 }, "-=0.5");
    }
    if (heroImage) {
      heroTl.fromTo(heroImage, { opacity: 0, scale: 0.92 }, { opacity: 1, scale: 1 }, "-=0.7");
    }

    const revealEls = gsap.utils.toArray<HTMLElement>(
      '[data-animate]:not([data-animate^="hero-"])'
    );

    const groups = new Map<string, HTMLElement[]>();
    revealEls.forEach((el) => {
      const group = el.dataset.animateGroup ?? el.dataset.animate ?? "default";
      if (!groups.has(group)) groups.set(group, []);
      groups.get(group)!.push(el);
    });

    const scrollTweens: gsap.core.Tween[] = [];

    groups.forEach((els) => {
      els.forEach((el, i) => {
        const type = (el.dataset.animateType as AnimateType) || "y";
        const delay = els.length > 1 ? i * 0.07 : 0;

        const from: gsap.TweenVars = { opacity: 0 };
        const to: gsap.TweenVars = { opacity: 1, ease: "none", delay };

        if (type === "x") {
          from.x = -40;
          to.x = 0;
        } else if (type === "scale") {
          from.scale = 0.85;
          to.scale = 1;
        } else {
          from.y = 30;
          to.y = 0;
        }

        const tween = gsap.fromTo(el, from, {
          ...to,
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "top 60%",
            scrub: 1,
          },
        });
        scrollTweens.push(tween);
      });
    });

    return () => {
      heroTl.kill();
      scrollTweens.forEach((t) => t.kill());
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null;
}
