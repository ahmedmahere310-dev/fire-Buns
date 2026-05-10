import { createFileRoute } from "@tanstack/react-router";
import { RESTAURANT } from "@/data/menu";
import { Phone, MapPin, Clock, Navigation, MessageCircle, Tag } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "تواصل معانا — Fire Buns" },
      { name: "description", content: "موقع فاير بانز على الخريطة، ساعات العمل، أرقام التواصل، واطلب أو اسأل عن العروض على واتساب." },
      { property: "og:title", content: "تواصل مع Fire Buns" },
      { property: "og:description", content: "اتجاهات Google Maps، ساعات العمل، وطلب على واتساب." },
    ],
  }),
  component: ContactPage,
});

const wa = (text: string) =>
  `https://wa.me/${RESTAURANT.whatsappNumber}?text=${encodeURIComponent(text)}`;

const waOrder = wa("السلام عليكم 👋\nعايز أطلب من Fire Buns:\n- \nالعنوان: ");
const waOffers = wa("السلام عليكم 👋\nممكن أعرف العروض المتاحة دلوقتي في Fire Buns؟");

function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <header className="text-center mb-12">
        <span className="text-flame font-display tracking-[0.4em]">CONTACT</span>
        <h1 className="text-6xl text-charcoal mt-2">تواصل معانا</h1>
        <p className="text-muted-foreground mt-3">إحنا هنا في قطور — تعالى أو اطلب وإحنا نوصلك</p>
      </header>

      {/* WhatsApp CTAs */}
      <section className="grid md:grid-cols-2 gap-4 mb-14">
        <a
          href={waOrder}
          target="_blank"
          rel="noopener"
          className="group rounded-2xl bg-gradient-flame text-primary-foreground p-6 shadow-flame hover:scale-[1.02] transition"
        >
          <MessageCircle className="w-8 h-8 mb-3" />
          <h3 className="text-2xl font-bold">اطلب على واتساب</h3>
          <p className="text-sm mt-2 opacity-90">اكتب طلبك وعنوانك ورد عليك خلال دقايق</p>
        </a>
        <a
          href={waOffers}
          target="_blank"
          rel="noopener"
          className="group rounded-2xl bg-card border border-border p-6 shadow-card hover:border-flame hover:-translate-y-1 transition"
        >
          <Tag className="w-8 h-8 mb-3 text-flame" />
          <h3 className="text-2xl text-charcoal">اطلب العروض</h3>
          <p className="text-sm mt-2 text-muted-foreground">اعرف آخر عروض وخصومات فاير بانز دلوقتي</p>
        </a>
      </section>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* MAP */}
        <div className="rounded-3xl overflow-hidden border border-border shadow-card bg-card">
          <iframe
            title="Fire Buns على الخريطة"
            src={RESTAURANT.mapEmbedUrl}
            className="w-full h-[420px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="p-5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-flame" />
              <span>{RESTAURANT.address}</span>
            </div>
            <a
              href={RESTAURANT.mapShortUrl}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-flame text-primary-foreground font-bold px-5 py-2 shadow-flame hover:opacity-90 transition"
            >
              <Navigation className="w-4 h-4" />
              اتجاهات Google Maps
            </a>
          </div>
        </div>

        {/* Info side */}
        <div className="space-y-6">
          <div className="rounded-3xl bg-card border border-border shadow-card p-7">
            <h2 className="flex items-center gap-3 text-3xl text-charcoal mb-5">
              <Clock className="w-6 h-6 text-flame" />
              ساعات العمل
            </h2>
            <ul className="divide-y divide-border">
              {RESTAURANT.hours.map((h) => (
                <li key={h.days} className="flex justify-between py-3">
                  <span className="font-bold">{h.days}</span>
                  <span className="text-muted-foreground" dir="ltr">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-gradient-ember border border-border p-7">
            <h2 className="text-3xl text-cream mb-5">اتصال مباشر</h2>
            <div className="space-y-3">
              {RESTAURANT.phones.map((p) => (
                <a
                  key={p}
                  href={`tel:${p}`}
                  className="flex items-center gap-3 rounded-xl bg-cream/5 hover:bg-cream/10 px-4 py-3 transition"
                >
                  <span className="w-10 h-10 rounded-full bg-gradient-flame text-primary-foreground flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </span>
                  <span dir="ltr" className="font-bold text-cream text-lg">{p}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
