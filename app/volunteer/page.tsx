import Link from "next/link";
import { ArrowLeft, ClipboardCheck, Users, Video } from "lucide-react";

const roles = [
  {
    title: "展厅讲解志愿者",
    desc: "负责观众接待与基础讲解，协助完成导览与问答。",
    icon: Users,
  },
  {
    title: "活动执行志愿者",
    desc: "支持工坊、沙龙与公开课现场组织与流程执行。",
    icon: ClipboardCheck,
  },
  {
    title: "影像记录志愿者",
    desc: "进行图片与短视频记录，协助整理传播素材。",
    icon: Video,
  },
];

export default function VolunteerPage() {
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
          <Users className="h-4 w-4" />
          Volunteer
        </div>
        <h1 className="mt-4 font-serif text-4xl tracking-[0.04em] md:text-6xl">志愿者招募</h1>
        <p className="mt-5 max-w-3xl leading-7 text-neutral-300">
          邀请对非遗传播、文化教育、影像记录有热情的伙伴，一起参与黎锦文化推广。
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-14 md:grid-cols-3">
        {roles.map((item) => (
          <article key={item.title} className="rounded-[16px] border border-white/12 bg-white/[0.03] p-6">
            <item.icon className="h-5 w-5 text-[#A07C3A]" />
            <h2 className="mt-4 font-serif text-2xl">{item.title}</h2>
            <p className="mt-3 leading-7 text-neutral-300">{item.desc}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-[16px] border border-white/12 bg-black/30 p-8">
          <h3 className="font-serif text-2xl tracking-[0.02em]">报名条件（建议）</h3>
          <ul className="mt-4 space-y-2 text-neutral-300">
            <li>1. 每月至少可参与 2 次线下活动。</li>
            <li>2. 具备基础沟通能力与团队协作意识。</li>
            <li>3. 有教育、设计、媒体相关经验优先。</li>
          </ul>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 text-sm tracking-[0.18em] text-[#d4be93] transition-colors hover:text-[#e5d2ad]"
          >
            立即报名
          </Link>
        </div>
      </section>
    </main>
  );
}
