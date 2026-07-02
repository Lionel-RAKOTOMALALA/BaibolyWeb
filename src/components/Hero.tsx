import Image from "next/image";
import { Apple, Smartphone } from "lucide-react";
import PhoneMockup from "./PhoneMockup";
import ParallaxSection from "./ParallaxSection";
import { ANDROID_APK_URL } from "@/lib/links";

export default function Hero() {
  return (
    <ParallaxSection className="bg-grid bg-white" contentSpeed={0.15} intensity={1}>
      <div className="absolute -top-32 right-0 -z-10 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <span
            data-animate="hero-badge"
            className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary"
          >
            Sacred Name Edition · 100% Hors-ligne
          </span>
          <h1
            data-animate="hero-title"
            className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl"
          >
            Ny Baiboly malagasy,{" "}
            <span className="text-primary">manontolo sady tena marina</span>
          </h1>
          <p
            data-animate="hero-text"
            className="mt-6 max-w-md text-lg leading-relaxed text-slate-600"
          >
            BAIBOLY MANÀNA FINOANA dia mampiditra anao amin&apos;ny Tanakh sy
            ny Brit Hadashah feno — 75 boky, miaraka amin&apos;ny anaran&apos;i Avo Indrindra sy Mpamonjy voasoratra araka ny endrika paleo-hebreo tany am-boalohany.
          </p>

          <div data-animate="hero-buttons" className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={ANDROID_APK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-transform hover:-translate-y-0.5 hover:bg-primary-dark"
            >
              <Smartphone size={18} />
              Alaina ho an&apos;ny Android
            </a>
            <span className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-6 py-3.5 text-sm font-semibold text-slate-400">
              <Apple size={18} />
              iOS — ho avy tsy ho ela
            </span>
          </div>

          <div data-animate="hero-stats" className="mt-10 flex items-center gap-6 text-sm text-slate-500">
            <div>
              <p className="text-2xl font-bold text-slate-900">75</p>
              <p>boky</p>
            </div>
            <div className="h-8 w-px bg-slate-200" />
            <div>
              <p className="text-2xl font-bold text-slate-900">4M+</p>
              <p>teny voakapa</p>
            </div>
            <div className="h-8 w-px bg-slate-200" />
            <div>
              <p className="text-2xl font-bold text-slate-900">100%</p>
              <p>hors-ligne</p>
            </div>
          </div>
        </div>

        <div data-animate="hero-image" className="relative flex justify-center">
          <div className="absolute h-72 w-72 rounded-full bg-primary/5 sm:h-96 sm:w-96" />
          <div className="absolute -bottom-6 -right-2 h-40 w-40 overflow-hidden rounded-2xl shadow-xl ring-4 ring-white sm:h-48 sm:w-48">
            <Image
              src="https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=400&q=80"
              alt="Baiboly misokatra"
              fill
              sizes="200px"
              className="object-cover"
            />
          </div>
          <PhoneMockup />
        </div>
      </div>
    </ParallaxSection>
  );
}
