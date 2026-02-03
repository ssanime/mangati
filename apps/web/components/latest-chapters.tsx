const chapters = [
  {
    title: "Solo Gardener",
    chapter: "الفصل 128",
    date: "منذ 3 ساعات",
    views: "12,430",
    thumbnail: "#1"
  },
  {
    title: "Arcane Pulse",
    chapter: "الفصل 42",
    date: "منذ 5 ساعات",
    views: "8,210",
    thumbnail: "#2"
  },
  {
    title: "Nebula Knight",
    chapter: "الفصل 77",
    date: "أمس",
    views: "19,805",
    thumbnail: "#3"
  }
];

export function LatestChapters() {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6">
      <div className="flex items-center justify-between">
        <h2 className="section-title">أحدث الفصول</h2>
        <button className="text-sm text-brand-200">عرض الكل</button>
      </div>
      <div className="mt-6 grid gap-4">
        {chapters.map((chapter) => (
          <div
            key={chapter.title}
            className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-4"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-slate-800 text-sm text-slate-300">
              {chapter.thumbnail}
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white">{chapter.title}</h3>
              <p className="text-sm text-slate-400">
                {chapter.chapter} • {chapter.date}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-300">{chapter.views}</p>
              <p className="text-xs text-slate-500">مشاهدة</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
