import Link from "next/link";
import { ArrowLeft, CalendarDays, Hand, MapPin } from "lucide-react";

const sessions = [
  { title: "基础纺线体验", time: "每周六 09:30 - 11:30", level: "入门" },
  { title: "植物染工坊", time: "每周六 14:30 - 17:00", level: "进阶" },
  { title: "腰机织造体验", time: "每周日 09:30 - 12:00", level: "进阶" },
  { title: "纹样创作课", time: "每周日 14:30 - 17:30", level: "综合" },
];

export default function WorkshopPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#ece8df]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-neutral-300 transition-colors hover:text-neutral-100"
        >
          <ArrowLeft className="h-4 w-4" />
          返回首页
        </Link>

        <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-[#A07C3A]">
          <Hand className="h-4 w-4" />
          Workshop
        </div>
        <h1 className="mt-4 font-serif text-4xl tracking-[0.04em] md:text-6xl">体验工坊</h1>
        <p className="mt-5 max-w-3xl leading-7 text-neutral-300">
          以“看得懂、做得到、记得住”为目标，设计面向公众的黎锦技艺体验课程。
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="grid gap-4 md:grid-cols-2">
          {sessions.map((item) => (
            <article
              key={item.title}
              className="rounded-[16px] border border-white/12 bg-white/[0.03] p-6 transition-all duration-300 hover:border-[#A07C3A]"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-[#A07C3A]">{item.level}</p>
              <h2 className="mt-3 font-serif text-2xl">{item.title}</h2>
              <p className="mt-3 flex items-center gap-2 text-neutral-300">
                <CalendarDays className="h-4 w-4 text-[#A07C3A]" />
                {item.time}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-[16px] border border-white/12 bg-black/30 p-8">
          <p className="flex items-center gap-2 text-sm tracking-[0.2em] text-neutral-300">
            <MapPin className="h-4 w-4 text-[#A07C3A]" />
            地点：海南黎锦文化体验中心（示例）
          </p>
          <p className="mt-4 leading-7 text-neutral-300">
            可按学校、机构和团队需求定制课程。建议提前 7 天预约，便于安排材料与讲师。
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 text-sm tracking-[0.18em] text-[#d4be93] transition-colors hover:text-[#e5d2ad]"
          >
            预约咨询
          </Link>
        </div>
      </section>
    </main>
  );
}
