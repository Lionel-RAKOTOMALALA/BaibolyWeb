import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import ParallaxSection from "./ParallaxSection";

const CHECKS = [
  "4 144 028 litera nampitahaina amin'ny loharano tany am-boalohany",
  "0 teny very, 0 teny be loatra, 0 teny voaova",
  "7 964 ⟦YHWH⟧ sy 1 552 ⟦MASHIAH⟧ voatahiry tamin'ny endriny paleo-hebreo",
  "Isan'ny andininy isaky ny toko dia voamarina (Genesisy 1=31, Salamo 119=176…)",
];

export default function About() {
  return (
    <ParallaxSection id="apropos" className="py-20" contentSpeed={0.12}>
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <div className="grid grid-cols-2 gap-4">
          <div
            data-animate="about-image-1"
            data-animate-group="about-images"
            data-animate-type="scale"
            className="relative h-56 overflow-hidden rounded-2xl shadow-md"
          >
            <Image
              src="https://images.unsplash.com/photo-1497621122273-f5cfb6065c56?w=600&q=80"
              alt="Baiboly taloha"
              fill
              sizes="(max-width: 768px) 50vw, 300px"
              className="object-cover"
            />
          </div>
          <div
            data-animate="about-image-2"
            data-animate-group="about-images"
            data-animate-type="scale"
            className="relative mt-8 h-56 overflow-hidden rounded-2xl shadow-md"
          >
            <Image
              src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=600&q=80"
              alt="Famakiana Baiboly"
              fill
              sizes="(max-width: 768px) 50vw, 300px"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <div data-animate="about-heading">
            <span className="inline-flex items-center rounded-full bg-gold/10 px-4 py-1.5 text-xs font-semibold text-gold">
              Sacred Name Edition
            </span>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Tena fahamarinana tamin&apos;ny famoahana ny anarana masina
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              Ny loharano tany am-boalohany dia nampiasa sary paleo-hebreo
              ho an&apos;ny anaran&apos;i YHWH sy ny Mesia, in-9 500 mahery.
              Ny app dia namerina io fomba io tamin&apos;ny fomba mahatoky,
              ka ny soratra rehetra dia voamarina teny isan-teny.
            </p>
          </div>

          <ul className="mt-6 space-y-3">
            {CHECKS.map((item, i) => (
              <li
                key={item}
                data-animate={`about-check-${i}`}
                data-animate-group="about-checks"
                data-animate-type="x"
                className="flex items-start gap-3 text-sm text-slate-700"
              >
                <CheckCircle2 className="mt-0.5 shrink-0 text-primary" size={18} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ParallaxSection>
  );
}
