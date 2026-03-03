import { STATS } from "@/lib/constants";

export function StatsRow() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 py-12 border-y border-border">
      {STATS.map((stat) => (
        <div key={stat.label} className="text-center md:text-left">
          <div className="text-[28px] md:text-[36px] font-semibold tracking-tight text-text">
            {stat.value}
          </div>
          <div className="text-[14px] md:text-[16px] text-text-secondary mt-1">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
