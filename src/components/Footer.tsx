import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-500 sm:flex-row">
        <div className="flex items-center gap-3">
          <Image
            src="/logo/logo-round.png"
            alt="Logo Baiboly Manàna Finoana"
            width={28}
            height={28}
            className="rounded-full"
          />
          <span className="font-semibold text-slate-700">
            BAIBOLY MANÀNA FINOANA
          </span>
        </div>
        <p>© {new Date().getFullYear()} — Natao tamin&apos;ny fitiavana ho an&apos;ny mpamaky malagasy.</p>
      </div>
    </footer>
  );
}
