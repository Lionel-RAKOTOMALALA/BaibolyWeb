import Link from "next/link";
import { Apple, Smartphone, ArrowRight } from "lucide-react";
import ParallaxSection from "./ParallaxSection";
import { ANDROID_APK_URL } from "@/lib/links";

export default function Download() {
  return (
    <ParallaxSection
      id="telecharger"
      className="bg-primary py-24"
      bgImage="https://images.unsplash.com/photo-1517837016564-bfc3ffd67455?w=1600&q=80"
      bgOverlay="linear-gradient(135deg, rgba(27,73,168,0.82), rgba(18,52,130,0.9))"
      bgSpeed={0.4}
      contentSpeed={0.1}
    >
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2
          data-animate="download-title"
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Alaina ankehitriny, vakio na aiza na aiza
        </h2>
        <p
          data-animate="download-text"
          className="mx-auto mt-4 max-w-xl text-white/85"
        >
          Tsy mila aterineto rehefa voapetraka — ny Baiboly malagasy manontolo
          dia eo an-tananao foana.
        </p>

        <div data-animate="download-buttons" className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={ANDROID_APK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-primary shadow-lg transition-transform hover:-translate-y-0.5 sm:w-auto"
          >
            <Smartphone size={18} />
            Alaina ho an&apos;ny Android (APK)
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <span className="inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-4 text-sm font-semibold text-white/60 sm:w-auto">
            <Apple size={18} />
            iOS — ho avy tsy ho ela
          </span>
        </div>

        <p className="mt-6 text-xs text-white/60">
          Fisidinana mivantana (.apk) — tsy mila Google Play.
        </p>
        <p className="mt-2 text-xs">
          <Link href="/installation" className="text-white/70 underline underline-offset-2 hover:text-white">
            Voasakana ny fametrahana? Kitiho eto
          </Link>
        </p>
      </div>
    </ParallaxSection>
  );
}
