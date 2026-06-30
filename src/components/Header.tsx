import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo/logo-round.png"
            alt="Logo Baiboly Manàna Finoana"
            width={40}
            height={40}
            className="rounded-full"
            priority
          />
          <span className="text-sm font-bold tracking-tight text-primary sm:text-base">
            BAIBOLY MANÀNA FINOANA
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <a href="#fonctionnalites" className="transition-colors hover:text-primary">
            Fonctionnalités
          </a>
          <a href="#apropos" className="transition-colors hover:text-primary">
            Momba ny app
          </a>
          <a href="#telecharger" className="transition-colors hover:text-primary">
            Télécharger
          </a>
        </nav>

        <a
          href="#telecharger"
          className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-dark"
        >
          Télécharger
        </a>
      </div>
    </header>
  );
}
