import { HeroCarousel } from "@/components/hero-carousel";
import { LatestChapters } from "@/components/latest-chapters";
import { LatestSeries } from "@/components/latest-series";

export default function HomePage() {
  return (
    <main className="space-y-10">
      <HeroCarousel />
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <LatestChapters />
        <LatestSeries />
      </div>
    </main>
  );
}
