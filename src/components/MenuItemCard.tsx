import type { MenuItem } from "@/data/menu";
import { Flame } from "lucide-react";

function PriceTag({ label, value }: { label?: string; value: number }) {
  return (
    <div className="flex flex-col items-center justify-center min-w-[58px] rounded-full bg-gradient-flame text-primary-foreground shadow-flame px-3 py-1">
      {label && <span className="text-[10px] font-bold opacity-90 leading-none">{label}</span>}
      <span className="font-display text-xl leading-tight">{value}</span>
    </div>
  );
}

export function MenuItemCard({ item }: { item: MenuItem }) {
  const p = item.price;
  return (
    <article className="relative rounded-2xl bg-card shadow-card border border-border p-5 hover:-translate-y-1 hover:shadow-flame transition-all duration-300">
      {item.badge && (
        <span className="absolute -top-3 -start-3 rounded-full bg-destructive text-destructive-foreground text-xs font-bold px-3 py-1 shadow-flame">
          {item.badge}
        </span>
      )}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="flex items-center gap-2 text-2xl font-bold text-charcoal">
            {item.nameAr}
            {item.hot && <Flame className="w-5 h-5 text-flame fill-flame" />}
          </h3>
          {item.nameEn && <div className="text-sm font-display tracking-wider text-flame mt-0.5">{item.nameEn}</div>}
          {item.desc && <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.desc}</p>}
        </div>
        <div className="flex flex-col gap-1.5 items-end">
          {typeof p === "number" ? (
            <PriceTag value={p} />
          ) : (
            <div className="flex flex-wrap gap-1.5 justify-end">
              {p.S !== undefined && <PriceTag label="S" value={p.S} />}
              {p.M !== undefined && <PriceTag label="M" value={p.M} />}
              {p.L !== undefined && <PriceTag label="L" value={p.L} />}
              {p.D !== undefined && <PriceTag label="D" value={p.D} />}
              {p.jar !== undefined && <PriceTag label="برطمان" value={p.jar} />}
              {p.add !== undefined && <PriceTag label="إضافة" value={p.add} />}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
