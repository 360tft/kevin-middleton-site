import { STATS } from "@/lib/constants";

export function StatsRow() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1e2229] rounded-xl overflow-hidden border border-[#1e2229]">
      {STATS.map((stat) => (
        <div key={stat.label} className="bg-[#080a0d] px-6 py-5 md:py-7 text-center">
          <div className="text-[26px] md:text-[32px] font-semibold tracking-tight text-[#f0f0f0]">
            {stat.value}
          </div>
          <div className="text-[12px] text-[#555] mt-0.5 uppercase tracking-wider font-mono">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
