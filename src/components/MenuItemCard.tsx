import type { MenuItem } from "@/data/menu";
import { Flame, Plus } from "lucide-react";
import { useCart } from "@/lib/cart";

const SIZE_LABEL: Record<string, string> = {
  S: "S", M: "M", L: "L", D: "D", jar: "برطمان", add: "إضافة",
};

function AddBtn({ item, sizeKey, value }: { item: MenuItem; sizeKey?: string; value: number }) {
  const { add } = useCart();
  return (
    <button
      onClick={() => add(item, sizeKey)}
      className="group flex flex-col items-center justify-center min-w-[60px] rounded-2xl bg-gradient-flame text-primary-foreground shadow-flame px-3 py-1.5 hover:scale-105 active:scale-95 transition"
      aria-label={`أضف ${item.nameAr}${sizeKey ? " " + SIZE_LABEL[sizeKey] : ""}`}
    >
      {sizeKey && <span className="text-[10px] font-bold opacity-90 leading-none">{SIZE_LABEL[sizeKey]}</span>}
      <span className="font-display text-xl leading-tight">{value}</span>
      <span className="flex items-center gap-1 text-[10px] font-bold mt-0.5 opacity-90">
        <Plus className="w-3 h-3" /> أضف
      </span>
    </button>
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
            <AddBtn item={item} value={p} />
          ) : (
            <div className="flex flex-wrap gap-1.5 justify-end">
              {p.S !== undefined && <AddBtn item={item} sizeKey="S" value={p.S} />}
              {p.M !== undefined && <AddBtn item={item} sizeKey="M" value={p.M} />}
              {p.L !== undefined && <AddBtn item={item} sizeKey="L" value={p.L} />}
              {p.D !== undefined && <AddBtn item={item} sizeKey="D" value={p.D} />}
              {p.jar !== undefined && <AddBtn item={item} sizeKey="jar" value={p.jar} />}
              {p.add !== undefined && <AddBtn item={item} sizeKey="add" value={p.add} />}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
