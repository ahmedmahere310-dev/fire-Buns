import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

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
          <a
            href="tel:01031131590"
            className="ms-2 hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-flame text-primary-foreground px-4 py-2 shadow-flame hover:opacity-90 transition"
          >
            اطلب دلوقتي
          </a>
        </nav>
      </div>
    </header>
  );
}
