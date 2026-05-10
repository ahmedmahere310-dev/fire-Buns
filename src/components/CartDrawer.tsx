import { useState } from "react";
import { useCart } from "@/lib/cart";
import { RESTAURANT } from "@/data/menu";
import { X, Plus, Minus, Trash2, MessageCircle, ShoppingBag } from "lucide-react";
import { CookingAnimation } from "./CookingAnimation";

export function CartDrawer() {
  const { lines, setQty, remove, total, count, open, setOpen, clear } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [orderType, setOrderType] = useState<"delivery" | "pickup">("delivery");
  const [cooking, setCooking] = useState(false);

  function buildMessage() {
    const lns = lines
      .map((l, i) =>
        `${i + 1}) ${l.nameAr}${l.size ? ` - ${l.size}` : ""} × ${l.qty} = ${l.unitPrice * l.qty} ج`
      )
      .join("\n");
    const header = `🔥 *طلب جديد من Fire Buns* 🔥\n\n`;
    const body = `*الطلب:*\n${lns}\n\n*الإجمالي: ${total} جنيه*\n\n`;
    const customer =
      `*نوع الطلب:* ${orderType === "delivery" ? "دليفري 🛵" : "استلام من المحل 🏠"}\n` +
      `*الاسم:* ${name || "-"}\n` +
      `*الموبايل:* ${phone || "-"}\n` +
      (orderType === "delivery" ? `*العنوان:* ${address || "-"}\n` : "") +
      (notes ? `*ملاحظات:* ${notes}\n` : "");
    return header + body + customer;
  }

  function send() {
    if (!lines.length) return;
    if (!name || !phone || (orderType === "delivery" && !address)) {
      alert("من فضلك اكتب الاسم والموبايل والعنوان");
      return;
    }
    setOpen(false);
    setCooking(true);
  }

  function finishCooking() {
    setCooking(false);
    const url = `https://wa.me/${RESTAURANT.whatsappNumber}?text=${encodeURIComponent(buildMessage())}`;
    window.open(url, "_blank");
  }

  return (
    <>
      {/* Floating cart button */}
      <button
        onClick={() => setOpen(true)}
        aria-label="طلباتي"
        className="fixed bottom-5 left-5 z-40 inline-flex items-center gap-2 rounded-full bg-gradient-flame text-primary-foreground font-bold px-5 py-3 shadow-flame hover:scale-105 transition"
      >
        <ShoppingBag className="w-5 h-5" />
        <span>طلباتي</span>
        {count > 0 && (
          <span className="bg-background text-foreground rounded-full text-xs font-bold w-6 h-6 flex items-center justify-center">
            {count}
          </span>
        )}
      </button>

      {/* Backdrop */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed top-0 bottom-0 start-0 z-50 w-full sm:w-[420px] bg-card border-e border-border shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full rtl:translate-x-full"
        } flex flex-col`}
      >
        <header className="flex items-center justify-between p-4 border-b border-border">
          <div>
            <h2 className="text-2xl text-charcoal">طلباتي</h2>
            <p className="text-xs text-muted-foreground">{count} صنف</p>
          </div>
          <button onClick={() => setOpen(false)} className="p-2 rounded-full hover:bg-muted">
            <X className="w-5 h-5" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {lines.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground">
              <ShoppingBag className="w-12 h-12 mx-auto mb-3 opacity-40" />
              <p>طلباتك فاضية. اختار من المنيو وابدأ طلبك 🔥</p>
            </div>
          ) : (
            lines.map((l) => (
              <div key={l.id} className="rounded-xl bg-muted/50 border border-border p-3 flex items-center gap-3">
                <div className="flex-1 min-w-0">
                  <div className="font-bold truncate">{l.nameAr}</div>
                  <div className="text-xs text-muted-foreground">
                    {l.size ? `${l.size} • ` : ""}{l.unitPrice} ج
                  </div>
                </div>
                <div className="flex items-center gap-1 bg-background rounded-full p-1">
                  <button onClick={() => setQty(l.id, l.qty - 1)} className="w-7 h-7 rounded-full hover:bg-muted flex items-center justify-center">
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-6 text-center font-bold text-sm">{l.qty}</span>
                  <button onClick={() => setQty(l.id, l.qty + 1)} className="w-7 h-7 rounded-full bg-gradient-flame text-primary-foreground flex items-center justify-center">
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
                <button onClick={() => remove(l.id)} className="text-destructive p-1.5 hover:bg-destructive/10 rounded-full">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}

          {lines.length > 0 && (
            <div className="space-y-3 pt-2">
              <div className="flex gap-2">
                <button
                  onClick={() => setOrderType("delivery")}
                  className={`flex-1 py-2 rounded-full text-sm font-bold border ${orderType === "delivery" ? "bg-gradient-flame text-primary-foreground border-transparent" : "border-border"}`}
                >
                  دليفري
                </button>
                <button
                  onClick={() => setOrderType("pickup")}
                  className={`flex-1 py-2 rounded-full text-sm font-bold border ${orderType === "pickup" ? "bg-gradient-flame text-primary-foreground border-transparent" : "border-border"}`}
                >
                  استلام من المحل
                </button>
              </div>
              <input
                value={name} onChange={(e) => setName(e.target.value)}
                placeholder="الاسم" className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-flame"
              />
              <input
                value={phone} onChange={(e) => setPhone(e.target.value)}
                inputMode="tel" placeholder="رقم الموبايل"
                className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-flame"
              />
              {orderType === "delivery" && (
                <textarea
                  value={address} onChange={(e) => setAddress(e.target.value)}
                  rows={2} placeholder="العنوان بالتفصيل"
                  className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-flame"
                />
              )}
              <textarea
                value={notes} onChange={(e) => setNotes(e.target.value)}
                rows={2} placeholder="ملاحظات (اختياري) — حار، بدون بصل، إلخ"
                className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-flame"
              />
            </div>
          )}
        </div>

        {lines.length > 0 && (
          <footer className="border-t border-border p-4 space-y-3 bg-card">
            <div className="flex items-center justify-between text-lg">
              <span className="text-muted-foreground">الإجمالي</span>
              <span className="font-display text-3xl text-flame">{total} ج</span>
            </div>
            <button
              onClick={send}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-flame text-primary-foreground font-bold py-3.5 shadow-flame hover:opacity-95 transition"
            >
              <MessageCircle className="w-5 h-5" />
              ابعت الطلب على واتساب
            </button>
            <button onClick={clear} className="w-full text-xs text-muted-foreground hover:text-destructive">
              تفريغ الطلبات
            </button>
          </footer>
        )}
      </aside>
    </>
  );
}
