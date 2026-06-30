export default function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[260px] rounded-[2.5rem] border-[8px] border-slate-900 bg-slate-900 shadow-2xl sm:w-[300px]">
      <div className="absolute left-1/2 top-0 z-10 h-5 w-28 -translate-x-1/2 rounded-b-2xl bg-slate-900" />
      <div className="overflow-hidden rounded-[2rem] bg-white">
        <div className="flex items-center justify-between bg-primary px-4 py-3 text-white">
          <span className="text-xs font-semibold">Genesisy 1</span>
          <span className="text-xs opacity-80">Baraashit</span>
        </div>
        <div className="space-y-3 px-4 py-5 text-[13px] leading-relaxed text-slate-800">
          <p>
            <span className="mr-1 align-super text-[10px] text-primary">1</span>
            Tamin&apos;ny voalohany dia nahary ny lanitra sy ny tany{" "}
            <span className="rounded bg-amber-100 px-1 font-semibold text-amber-800">
              YHWH
            </span>
            .
          </p>
          <p>
            <span className="mr-1 align-super text-[10px] text-primary">2</span>
            Ary efa foana sy tsy nisy endrika ny tany; ary aizina no tambonin&apos;ny
            lalina.
          </p>
          <p>
            <span className="mr-1 align-super text-[10px] text-primary">3</span>
            Ary{" "}
            <span className="rounded bg-amber-100 px-1 font-semibold text-amber-800">
              YHWH
            </span>{" "}
            nanao hoe: Misia mazava; dia nisy mazava.
          </p>
          <div className="rounded-lg bg-slate-50 px-3 py-2 text-[11px] text-slate-500 italic">
            Brit Hadashah · Yaohkhanan 1:1 —{" "}
            <span className="rounded bg-amber-100 px-1 font-semibold text-amber-800 not-italic">
              MASHIAH
            </span>{" "}
            no Teny
          </div>
        </div>
        <div className="flex items-center justify-around border-t border-slate-100 bg-white py-3">
          {["Fitanisana", "Hitady", "Tiana", "Safidy"].map((label) => (
            <span key={label} className="text-[9px] font-medium text-slate-400">
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
