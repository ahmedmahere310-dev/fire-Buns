import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import type { MenuItem } from "@/data/menu";

export type CartLine = {
  id: string;          // unique line key (item + size)
  nameAr: string;
  size?: string;       // S/M/L/D/jar/إضافة or undefined for fixed price
  unitPrice: number;
  qty: number;
};

type CartCtx = {
  lines: CartLine[];
  add: (item: MenuItem, sizeKey?: string) => void;
  setQty: (id: string, qty: number) => void;
  remove: (id: string) => void;
  clear: () => void;
  total: number;
  count: number;
  open: boolean;
  setOpen: (v: boolean) => void;
};

const Ctx = createContext<CartCtx | null>(null);

const SIZE_LABEL: Record<string, string> = {
  S: "صغير",
  M: "وسط",
  L: "لارج",
  D: "دبل",
  jar: "برطمان",
  add: "إضافة",
};

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("fb-cart");
      if (raw) setLines(JSON.parse(raw));
    } catch {}
  }, []);
  useEffect(() => {
    try { localStorage.setItem("fb-cart", JSON.stringify(lines)); } catch {}
  }, [lines]);

  function add(item: MenuItem, sizeKey?: string) {
    const unitPrice =
      typeof item.price === "number"
        ? item.price
        : sizeKey
          ? (item.price as Record<string, number>)[sizeKey]
          : 0;
    if (!unitPrice) return;
    const sizeLabel = sizeKey ? SIZE_LABEL[sizeKey] ?? sizeKey : undefined;
    const id = `${item.nameAr}__${sizeKey ?? "_"}`;
    setLines((prev) => {
      const found = prev.find((l) => l.id === id);
      if (found) return prev.map((l) => (l.id === id ? { ...l, qty: l.qty + 1 } : l));
      return [...prev, { id, nameAr: item.nameAr, size: sizeLabel, unitPrice, qty: 1 }];
    });
    setOpen(true);
  }

  function setQty(id: string, qty: number) {
    if (qty <= 0) return remove(id);
    setLines((prev) => prev.map((l) => (l.id === id ? { ...l, qty } : l)));
  }
  function remove(id: string) {
    setLines((prev) => prev.filter((l) => l.id !== id));
  }
  function clear() { setLines([]); }

  const total = lines.reduce((s, l) => s + l.unitPrice * l.qty, 0);
  const count = lines.reduce((s, l) => s + l.qty, 0);

  return (
    <Ctx.Provider value={{ lines, add, setQty, remove, clear, total, count, open, setOpen }}>
      {children}
    </Ctx.Provider>
  );
}

export function useCart() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart must be used inside CartProvider");
  return c;
}
