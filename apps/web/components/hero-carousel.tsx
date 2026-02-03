const highlights = [
  {
    title: "Tower of Dreams",
    description: "الأكثر تفاعلاً هذا الأسبوع مع تحديثات يومية.",
    tag: "Trending"
  },
  {
    title: "Shadow Blade",
    description: "سلسلة ملحمية مع معارك ملونة وفصول جديدة.",
    tag: "Editors' Pick"
  },
  {
    title: "Moonlit Chronicles",
    description: "عودة موسم جديد مع جودة ترجمة عالية.",
    tag: "New Season"
  }
];

export function HeroCarousel() {
  return (
    <section className="rounded-3xl bg-gradient-to-r from-brand-700 via-slate-900 to-slate-950 p-8 shadow-xl">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-brand-100">
            منصة مانجاتي
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-white lg:text-5xl">
            تجربة قراءة مانجا ومانهوا احترافية مع تحديثات لحظية
          </h1>
          <p className="mt-4 max-w-xl text-lg text-slate-300">
            استعرض أشهر الأعمال وتابع آخر الفصول مع قارئ عمودي سريع وحفظ تلقائي لمكان القراءة.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white">
              ابدأ القراءة
            </button>
            <button className="rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-white">
              تصفح الأعمال
            </button>
          </div>
        </div>
        <div className="grid gap-4">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4"
            >
              <span className="text-xs uppercase text-brand-200">{item.tag}</span>
              <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
