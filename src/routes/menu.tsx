import { createFileRoute } from "@tanstack/react-router";
import { menu } from "@/data/menu";
import { MenuItemCard } from "@/components/MenuItemCard";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "المنيو — Fire Buns" },
      { name: "description", content: "منيو فاير بانز كامل: ساندوتشات الدجاج واللحم، سماش برجر، وجبات الدجاج، صوصات، ومشروبات." },
      { property: "og:title", content: "منيو Fire Buns" },
      { property: "og:description", content: "كل أصناف فاير بانز بأسعارها." },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <header className="text-center mb-14">
        <span className="text-flame font-display tracking-[0.4em]">MENU</span>
        <h1 className="text-6xl text-charcoal mt-2">المنيو الكامل</h1>
        <p className="text-muted-foreground mt-3">كل أصناف فاير بانز — أسعار محدّثة</p>
      </header>

      {/* Sticky section nav */}
      <nav className="sticky top-16 z-30 -mx-6 px-6 py-3 mb-10 bg-background/85 backdrop-blur border-y border-border overflow-x-auto">
        <ul className="flex gap-2 min-w-max">
          {menu.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="inline-block whitespace-nowrap rounded-full bg-muted hover:bg-gradient-flame hover:text-primary-foreground px-4 py-1.5 text-sm font-bold transition"
              >
                {s.titleAr}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="space-y-16">
        {menu.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-32">
            <div className="flex items-end justify-between mb-6 gap-4 flex-wrap">
              <div>
                <h2 className="text-4xl text-charcoal">{section.titleAr}</h2>
                {section.titleEn && (
                  <div className="font-display text-flame tracking-widest text-lg">{section.titleEn}</div>
                )}
              </div>
              {section.note && (
                <p className="text-sm text-muted-foreground bg-muted rounded-full px-4 py-1.5">{section.note}</p>
              )}
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {section.items.map((it) => (
                <MenuItemCard key={it.nameAr} item={it} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
