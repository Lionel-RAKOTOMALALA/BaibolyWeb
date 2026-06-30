import {
  BookOpenText,
  WifiOff,
  Search,
  Sparkles,
  Bookmark,
  MoonStar,
  Type,
  ShieldCheck,
} from "lucide-react";
import ParallaxSection from "./ParallaxSection";

const FEATURES = [
  {
    icon: BookOpenText,
    title: "75 boky feno",
    desc: "Tanakh (39), boky Deutérocanonique (9) ary Brit Hadashah (27) — tononkira tsirairay voatahiry.",
  },
  {
    icon: WifiOff,
    title: "100% hors-ligne",
    desc: "Vakio na aiza na aiza, na tsy misy aterineto — ny angona rehetra dia ao anaty app.",
  },
  {
    icon: Search,
    title: "Fikarohana haingana",
    desc: "Mikaroka teny na andininy amin'ny tononkira manontolo amin'ny segondra vitsivitsy.",
  },
  {
    icon: Sparkles,
    title: "Anarana masina tsy voaova",
    desc: "YHWH sy MASHIAH dia naseho amin'ny endrika paleo-hebreo, araka ny tena loharano.",
  },
  {
    icon: Bookmark,
    title: "Tiana sy famantarana",
    desc: "Tehirizo ny andininy tianao indrindra ary miverena mora foana amin'ny famakiana farany.",
  },
  {
    icon: MoonStar,
    title: "Endrika maizina/mazava",
    desc: "Mampifanaraka ny fijery amin'ny fotoam-pamakiana, na antoandro na alina.",
  },
  {
    icon: Type,
    title: "Endri-tsoratra azo ovaina",
    desc: "Ahafahanao mampitombo na mampihena ny haben'ny soratra arakaraka ny ilainao.",
  },
  {
    icon: ShieldCheck,
    title: "Fahamarinana 100%",
    desc: "Nampitahaina teny isan-teny tamin'ny loharano tany am-boalohany — tsy misy diso na very.",
  },
];

export default function Features() {
  return (
    <ParallaxSection id="fonctionnalites" className="bg-slate-50 py-20" contentSpeed={0.1}>
      <div className="mx-auto max-w-6xl px-6">
        <div data-animate="features-heading" className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Izay rehetra ilainao amin&apos;ny famakiana Baiboly
          </h2>
          <p className="mt-4 text-slate-600">
            Voakajy ho an&apos;ny mpamaky malagasy te hianatra ny Soratra Masina
            amin&apos;ny fomba marina sady mora ampiasaina.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              data-animate={`feature-card-${i}`}
              data-animate-group="features-cards"
              data-animate-type="scale"
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </ParallaxSection>
  );
}
