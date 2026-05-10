import { RESTAURANT } from "@/data/menu";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-gradient-ember text-cream">
      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="Fire Buns" className="h-12 w-12 object-contain" />
            <div>
              <div className="font-display text-3xl tracking-wider">FIRE BUNS</div>
              <div className="text-sm text-cream/70">Burger & Fried Chicken</div>
            </div>
          </div>
          <p className="mt-4 text-cream/70 leading-7">
            "{RESTAURANT.tagline}" — مطعم عيلة، خامات فريش يوم بيوم، وعروض على طول.
          </p>
        </div>
        <div>
          <h3 className="text-flame text-xl mb-3">تواصل معانا</h3>
          <ul className="space-y-2 text-cream/80">
            {RESTAURANT.phones.map((p) => (
              <li key={p}>
                <a className="hover:text-flame" href={`tel:${p}`} dir="ltr">📞 {p}</a>
              </li>
            ))}
            <li>📍 {RESTAURANT.address}</li>
          </ul>
        </div>
        <div>
          <h3 className="text-flame text-xl mb-3">تابعنا</h3>
          <div className="flex gap-3">
            <a href={RESTAURANT.social.facebook} className="rounded-full bg-cream/10 hover:bg-flame px-4 py-2">Facebook</a>
            <a href={RESTAURANT.social.whatsapp} className="rounded-full bg-cream/10 hover:bg-flame px-4 py-2">WhatsApp</a>
            <a href={RESTAURANT.social.tiktok} className="rounded-full bg-cream/10 hover:bg-flame px-4 py-2">TikTok</a>
          </div>
        </div>
      </div>
      <div className="border-t border-cream/10 py-4 text-center text-sm text-cream/60">
        © {new Date().getFullYear()} Fire Buns — جميع الحقوق محفوظة
      </div>
    </footer>
  );
}
