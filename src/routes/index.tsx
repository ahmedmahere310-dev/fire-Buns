import { createFileRoute, Link } from "@tanstack/react-router";
import heroBurger from "@/assets/hero-burger.jpg";
import { RESTAURANT, menu } from "@/data/menu";
import { Flame, Phone, MapPin, Sparkles, Truck, Leaf, Clock, MessageCircle, Users, Tag } from "lucide-react";

const wa = (text: string) => `https://wa.me/${RESTAURANT.whatsappNumber}?text=${encodeURIComponent(text)}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fire Buns — طعم هتحبه | برجر وفرايد تشيكن في قطور" },
      { name: "description", content: "فاير بانز - مطعم برجر وفرايد تشيكن في قطور. خامات فريش، عروض يومية، ودليفري لأي مكان. اطلب دلوقتي 01031131590." },
      { property: "og:title", content: "Fire Buns — طعم هتحبه" },
      { property: "og:description", content: "برجر وفرايد تشيكن، سماش برجر، وجبات عيلة، صوصات بنكهات مميزة." },
      { property: "og:image", content: heroBurger },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = menu.find((s) => s.id === "smash-burger")!.items;

  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-ember text-cream">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_20%,oklch(0.7_0.22_45/0.4),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-flame/15 border border-flame/40 text-flame px-4 py-1.5 text-sm font-bold">
              <Flame className="w-4 h-4" /> {RESTAURANT.subtitle}
            </span>
            <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl leading-none tracking-wide">
              <span className="text-cream">FIRE</span> <span className="text-flame">BUNS</span>
            </h1>
            <p className="text-3xl font-bold">"{RESTAURANT.tagline}"</p>
            <p className="text-cream/70 text-lg max-w-xl leading-8">
              مطعم مفتوح عشان يعمل أكل على مزاجك أنت. خامات فريش يوم بيوم، طعم مميز، وأسعار على قد الإيد.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link to="/menu" className="inline-flex items-center gap-2 rounded-full bg-gradient-flame text-primary-foreground font-bold px-6 py-3 shadow-flame hover:scale-[1.03] transition">
                <Sparkles className="w-5 h-5" /> شوف المنيو
              </Link>
              <a href={`tel:${RESTAURANT.phones[0]}`} className="inline-flex items-center gap-2 rounded-full border border-cream/30 hover:border-flame hover:text-flame px-6 py-3 font-semibold transition">
                <Phone className="w-5 h-5" /> {RESTAURANT.phones[0]}
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-flame blur-3xl opacity-40 rounded-full" />
            <img
              src={heroBurger}
              alt="Fire Buns Smash Burger"
              width={1024}
              height={1024}
              className="relative rounded-3xl shadow-flame w-full object-cover aspect-square"
            />
          </div>
        </div>
      </section>

      {/* PERKS */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: Leaf, title: "خامات فريش", text: "يوم بيوم، بدون أي إضافات مضرة" },
            { icon: Truck, title: "دليفري سريع", text: "أقل سعر دليفري في المنطقة" },
            { icon: Sparkles, title: "عروض يومية", text: "خصومات وسحب على جوايز" },
            { icon: Clock, title: "صالة مفتوحة", text: "مكان مريح يجمعك بحبايبك" },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl bg-card shadow-card p-6 hover:shadow-flame transition">
              <div className="w-12 h-12 rounded-xl bg-gradient-flame text-primary-foreground flex items-center justify-center shadow-flame">
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-2xl text-charcoal">{f.title}</h3>
              <p className="text-muted-foreground mt-1 leading-7">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex items-end justify-between mb-8 gap-4 flex-wrap">
          <div>
            <span className="text-flame font-display tracking-widest">NEW</span>
            <h2 className="text-5xl text-charcoal">سماش برجر</h2>
            <p className="text-muted-foreground mt-2">آخر إضافة على المنيو — جرّبه دلوقتي</p>
          </div>
          <Link to="/menu" className="text-flame font-bold hover:underline">
            كل المنيو ←
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {featured.map((it) => (
            <div key={it.nameAr} className="rounded-2xl bg-gradient-ember text-cream p-6 shadow-flame">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-3xl">{it.nameAr}</h3>
                  <div className="font-display text-flame tracking-wider">{it.nameEn}</div>
                  <p className="text-cream/70 mt-3 leading-7 text-sm">{it.desc}</p>
                </div>
                <div className="flex gap-2">
                  {typeof it.price !== "number" && it.price.S && (
                    <div className="text-center bg-flame text-primary-foreground rounded-full w-14 h-14 flex flex-col justify-center">
                      <span className="text-[10px] font-bold">S</span>
                      <span className="font-display text-xl leading-none">{it.price.S}</span>
                    </div>
                  )}
                  {typeof it.price !== "number" && it.price.D && (
                    <div className="text-center bg-cream text-charcoal rounded-full w-14 h-14 flex flex-col justify-center">
                      <span className="text-[10px] font-bold">D</span>
                      <span className="font-display text-xl leading-none">{it.price.D}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OFFERS */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-3xl bg-gradient-flame text-primary-foreground p-10 lg:p-14 shadow-flame">
          <h2 className="text-5xl mb-6">عروض فاير بانز</h2>
          <ul className="grid md:grid-cols-3 gap-6">
            {RESTAURANT.offers.map((o, i) => (
              <li key={i} className="bg-black/20 backdrop-blur rounded-2xl p-6 leading-8 font-semibold">
                <span className="font-display text-3xl block mb-2">0{i + 1}.</span>
                {o}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={wa("ممكن أعرف العروض المتاحة دلوقتي في Fire Buns؟")}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full bg-background text-foreground font-bold px-6 py-3 hover:bg-card transition"
            >
              <Tag className="w-5 h-5 text-flame" /> اطلب العروض على واتساب
            </a>
            <a
              href={wa("عايز أعمل تجميع طلبات لمجموعة من Fire Buns")}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full border-2 border-background/40 text-primary-foreground font-bold px-6 py-3 hover:bg-background/10 transition"
            >
              <Users className="w-5 h-5" /> تجميع طلبات
            </a>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <a
        href={wa("عايز أطلب من Fire Buns")}
        target="_blank"
        rel="noopener"
        aria-label="اطلب على واتساب"
        className="fixed bottom-5 left-5 z-50 inline-flex items-center gap-2 rounded-full bg-gradient-flame text-primary-foreground font-bold px-5 py-3 shadow-flame hover:scale-105 transition"
      >
        <MessageCircle className="w-5 h-5" />
        اطلب الآن
      </a>

      {/* CONTACT */}
      <section className="mx-auto max-w-7xl px-6 py-16 grid lg:grid-cols-2 gap-8">
        <div className="rounded-3xl bg-card shadow-card p-10">
          <h2 className="text-4xl text-charcoal mb-6">تواصل معانا</h2>
          <div className="space-y-4 text-lg">
            {RESTAURANT.phones.map((p) => (
              <a key={p} href={`tel:${p}`} className="flex items-center gap-3 hover:text-flame transition">
                <span className="w-10 h-10 rounded-full bg-gradient-flame text-primary-foreground flex items-center justify-center"><Phone className="w-5 h-5" /></span>
                <span dir="ltr" className="font-semibold">{p}</span>
              </a>
            ))}
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-gradient-flame text-primary-foreground flex items-center justify-center"><MapPin className="w-5 h-5" /></span>
              <span>{RESTAURANT.address}</span>
            </div>
          </div>
        </div>
        <div className="rounded-3xl bg-gradient-ember text-cream p-10">
          <h2 className="text-4xl mb-4">ليه فاير بانز؟</h2>
          <ul className="space-y-3">
            {RESTAURANT.perks.map((p) => (
              <li key={p} className="flex gap-3">
                <Flame className="w-5 h-5 text-flame shrink-0 mt-1" />
                <span className="text-cream/85 leading-7">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
