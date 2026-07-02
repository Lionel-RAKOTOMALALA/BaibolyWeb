import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  ShieldOff,
  Download as DownloadIcon,
  ArrowLeft,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ANDROID_APK_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Ahoana raha voasakana ny fametrahana — BAIBOLY MANÀNA FINOANA",
  description:
    "Torolàlana amin'ny fametrahana ny app rehefa manakana azy ny Google Play Protect.",
};

const STEPS = [
  {
    title: "Sokafy ny Play Store",
    desc: "Sokafy ny application Google Play Store ao amin'ny finday.",
  },
  {
    title: "Idiro ao amin'ny sary profil",
    desc: "Kitiho ny sary profil eo amin'ny zoro ambony ankavanana, dia kitiho \"Play Protect\".",
  },
  {
    title: "Idiro ao amin'ny paramètre",
    desc: "Kitiho ny kaviteny (⚙️) eo amin'ny zoro ambony ankavanana an'ilay pejy Play Protect.",
  },
  {
    title: "Avapiky ny fisavana",
    desc: "Ahatony (\"Scan apps with Play Protect\" / \"Analyser les apps\") ny brotona.",
  },
  {
    title: "Averino ny fametrahana",
    desc: "Miverena amin'ny fisidinana (.apk), dia hazava ny fametrahana intsony.",
  },
];

export default function InstallationPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-slate-50 py-16">
        <div className="mx-auto max-w-2xl px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-primary"
          >
            <ArrowLeft size={16} />
            Miverina
          </Link>

          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <AlertTriangle className="mt-0.5 shrink-0 text-amber-600" size={22} />
            <p className="text-sm leading-relaxed text-amber-900">
              Satria ny app dia alaina mivantana (.apk) fa tsy avy amin&apos;ny
              Play Store, dia mety hanakana ny fametrahana ny{" "}
              <strong>Google Play Protect</strong>. Tsy misy fandrahonana ny
              app — io dia fisavana ara-tsanganasa ataon&apos;i Google amin&apos;ny
              app rehetra tsy avy amin&apos;ny Play Store. Araho ireto dingana
              ireto raha voasakana ianao.
            </p>
          </div>

          <h1 className="mt-10 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Ahoana raha voasakana ny fametrahana
          </h1>
          <p className="mt-3 text-slate-600">
            Ataovy ireto dingana ireto indray mandeha ihany, alohan&apos;ny
            hisidinana ny app.
          </p>

          <ol className="mt-8 space-y-5">
            {STEPS.map((step, i) => (
              <li
                key={step.title}
                className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {i + 1}
                </span>
                <div>
                  <h2 className="font-semibold text-slate-900">{step.title}</h2>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    {step.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <ShieldOff className="mt-0.5 shrink-0 text-primary" size={20} />
            <p className="text-sm leading-relaxed text-slate-600">
              Rehefa vitanao ireo dingana ireo dia azonao averina ny fisavana
              (\"Scan apps with Play Protect\") aorian&apos;ny fametrahana raha
              tianao — tsy voatery ahatoana mandrakizay.
            </p>
          </div>

          <div className="mt-10 text-center">
            <a
              href={ANDROID_APK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5"
            >
              <DownloadIcon size={18} />
              Alaina ny app (.apk)
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
