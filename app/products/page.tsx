import Link from "next/link";
import { ArrowLeft, Package, Shirt, Sparkles } from "lucide-react";

const products = [
  {
    title: "纹样文创系列",
    desc: "基于大力神纹、甘工鸟纹、蛙纹进行现代图形重构，适配文具、海报、家居软装。",
    tag: "Pattern Design",
  },
  {
    title: "黎锦服饰系列",
    desc: "提取传统经纬语言，结合当代版型设计，形成可日常穿着的文化服饰。",
    tag: "Fashion",
  },
  {
    title: "展陈衍生品系列",
    desc: "围绕展览叙事开发限定纪念品，强化“看展-理解-带走记忆”的体验链路。",
    tag: "Exhibition Goods",
  },
];

export default function ProductsPage() {
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
          <Package className="h-4 w-4" />
          Products
        </div>
        <h1 className="mt-4 font-serif text-4xl tracking-[0.04em] md:text-6xl">相关产品</h1>
        <p className="mt-5 max-w-3xl leading-7 text-neutral-300">
          以黎锦纹样和织造逻辑为核心，把传统技艺转译为可传播、可使用、可收藏的产品系统。
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-20 md:grid-cols-3">
        {products.map((item) => (
          <article
            key={item.title}
            className="rounded-[16px] border border-white/12 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-[4px] hover:border-[#A07C3A]"
          >
            <div className="text-xs uppercase tracking-[0.28em] text-[#A07C3A]">{item.tag}</div>
            <h2 className="mt-3 font-serif text-2xl tracking-[0.02em]">{item.title}</h2>
            <p className="mt-4 leading-7 text-neutral-300">{item.desc}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-[16px] border border-white/12 bg-black/30 p-8">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#A07C3A]">
            <Shirt className="h-4 w-4" />
            Featured Material
          </div>
          <div className="mt-6 overflow-hidden rounded-[12px] border border-white/10">
            <img
              src="/assets/story/weaver-story.jpg"
              alt="黎锦织造细节"
              className="h-[320px] w-full object-cover"
            />
          </div>
          <p className="mt-5 leading-7 text-neutral-300">
            建议后续接入商品详情页、库存状态和咨询入口，形成完整的产品展示与转化闭环。
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 text-sm tracking-[0.18em] text-[#d4be93] transition-colors hover:text-[#e5d2ad]"
          >
            <Sparkles className="h-4 w-4" />
            联系合作
          </Link>
        </div>
      </section>
    </main>
  );
}
