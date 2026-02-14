import Link from "next/link";
import { ArrowLeft, Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
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
          <Mail className="h-4 w-4" />
          Contact
        </div>
        <h1 className="mt-4 font-serif text-4xl tracking-[0.04em] md:text-6xl">联系我们</h1>
        <p className="mt-5 max-w-3xl leading-7 text-neutral-300">
          欢迎课程预约、展览合作、品牌联名与研究交流。以下信息可按你的真实信息替换。
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-14 md:grid-cols-3">
        <article className="rounded-[16px] border border-white/12 bg-white/[0.03] p-6">
          <MapPin className="h-5 w-5 text-[#A07C3A]" />
          <h2 className="mt-4 font-serif text-2xl">地址</h2>
          <p className="mt-3 leading-7 text-neutral-300">海南省海口市（示例）黎锦文化展示中心</p>
        </article>

        <article className="rounded-[16px] border border-white/12 bg-white/[0.03] p-6">
          <Phone className="h-5 w-5 text-[#A07C3A]" />
          <h2 className="mt-4 font-serif text-2xl">电话</h2>
          <p className="mt-3 leading-7 text-neutral-300">0898-1234-5678（示例）</p>
        </article>

        <article className="rounded-[16px] border border-white/12 bg-white/[0.03] p-6">
          <Mail className="h-5 w-5 text-[#A07C3A]" />
          <h2 className="mt-4 font-serif text-2xl">邮箱</h2>
          <p className="mt-3 leading-7 text-neutral-300">contact@li-brocade.org（示例）</p>
        </article>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="overflow-hidden rounded-[16px] border border-white/12">
          <img src="/assets/hero/li-hero.jpg" alt="黎锦现场" className="h-[320px] w-full object-cover" />
        </div>
      </section>
    </main>
  );
}
