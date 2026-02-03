const series = [
  {
    title: "Crimson Star",
    status: "مستمرة",
    genre: "أكشن • فانتازيا",
    views: "1.2M"
  },
  {
    title: "Silent Harmony",
    status: "مكتملة",
    genre: "رومانسي • دراما",
    views: "842K"
  },
  {
    title: "Steel Horizon",
    status: "مستمرة",
    genre: "خيال علمي",
    views: "2.1M"
  }
];

export function LatestSeries() {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6">
      <div className="flex items-center justify-between">
        <h2 className="section-title">آخر الأعمال المضافة</h2>
        <button className="text-sm text-brand-200">استكشاف</button>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {series.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                {item.status}
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-400">{item.genre}</p>
            <div className="mt-4 flex items-center justify-between text-sm text-slate-300">
              <span>مشاهدات</span>
              <span className="font-semibold text-white">{item.views}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
