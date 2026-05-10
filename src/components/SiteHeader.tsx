import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import { RESTAURANT } from "@/data/menu";
import { MessageCircle } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Fire Buns" className="h-10 w-10 object-contain" />
          <span className="font-display text-2xl tracking-wider text-charcoal">FIRE BUNS</span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2 text-sm font-semibold">
          <Link to="/" className="px-3 py-2 rounded-md hover:bg-muted" activeOptions={{ exact: true }} activeProps={{ className: "text-flame" }}>
            الرئيسية
          </Link>
          <Link to="/menu" className="px-3 py-2 rounded-md hover:bg-muted" activeProps={{ className: "text-flame" }}>
            المنيو
          </Link>
          <Link to="/contact" className="px-3 py-2 rounded-md hover:bg-muted" activeProps={{ className: "text-flame" }}>
            تواصل
          </Link>
          <a
            href={`https://wa.me/${RESTAURANT.whatsappNumber}?text=${encodeURIComponent("عايز أطلب من Fire Buns")}`}
            target="_blank"
            rel="noopener"
            className="ms-2 inline-flex items-center gap-2 rounded-full bg-gradient-flame text-primary-foreground px-4 py-2 shadow-flame hover:opacity-90 transition"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">اطلب واتساب</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
