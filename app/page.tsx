"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, ChevronRight, Sparkles } from "lucide-react";

const crafts = [
  {
    id: "spin",
    title: "纺 (Spinning)",
    eng: "The Art of Fiber",
    desc: "黎族妇女利用纺轮或脚踏纺车，将木棉、苎麻等天然纤维捻制成均匀坚韧的纱线。",
    detail:
      "原料处理流程：采摘木棉/麻类 → 晒干 → 手搓去籽 → 弹花 → 捻线。难点在于处理细短光滑的木棉纤维。",
  },
  {
    id: "dye",
    title: "染 (Dyeing)",
    eng: "Colors of Nature",
    desc: "取自雨林植物，采用蓝靛、黄姜、苏木等染料，通过反复浸染与氧化定色。",
    detail:
      "核心技艺：缬染法（扎染）。在经线上扎结染色，形成晕染效果。常用色彩：沉稳蓝黑（蓝靛）、明丽姜黄（黄姜）。",
  },
  {
    id: "weave",
    title: "织 (Weaving)",
    eng: "Backstrap Loom",
    desc: "席地而坐，以身体控制经线张力，使用古老的踞腰织机进行创作。",
    detail:
      "核心工艺：通经断纬。彩纬不贯穿全幅，而是根据纹样在局部穿插，这是黎锦区别于其他织锦的最大特点。",
  },
  {
    id: "embroider",
    title: "绣 (Embroidery)",
    eng: "Single-faced Art",
    desc: "在织好的布面上进行单面或双面刺绣，常见于龙被与传统服饰。",
    detail: "特色：单面织绣。正面图案精美，而背面几乎看不出线头，工艺难度极高。",
  },
];

const patterns = [
  {
    id: 1,
    name: "大力神纹",
    category: "Totem",
    tags: ["守护", "力量"],
    desc: "象征黎族的守护神，寓意力量与庇佑。",
    image: "/assets/patterns/dalishen.png",
  },
  {
    id: 2,
    name: "甘工鸟纹",
    category: "Legend",
    tags: ["爱情", "传说"],
    desc: "源自甘工鸟传说，象征忠贞不渝的爱情。",
    image: "/assets/patterns/gangongbird.png",
  },
  {
    id: 3,
    name: "蛙纹",
    category: "Fertility",
    tags: ["繁衍", "母系"],
    desc: "体现了黎族早期的生殖崇拜，寓意多子多福。",
    image: "/assets/patterns/frog.png",
  },
  {
    id: 4,
    name: "几何纹",
    category: "Abstract",
    tags: ["美学", "极简"],
    desc: "由平行线、菱形构成的抽象美学。",
    image: "/assets/patterns/geometry.png",
  },
  {
    id: 5,
    name: "龙被图纹",
    category: "Royal",
    tags: ["尊贵", "历史"],
    desc: "集纺、染、织、绣四大工艺之大成，主要用于贡品。",
    image: "/assets/patterns/dragon.png",
  },
  {
    id: 6,
    name: "婚礼图纹",
    category: "Life",
    tags: ["喜庆", "记录"],
    desc: "记录黎族传统婚礼场景，充满生活气息。",
    image: "/assets/patterns/wedding.png",
  },
];

const ACCENT = "#A07C3A";
const CTA = "#B08D57";

const makePatternImage = (seed: number) => {
  const stroke = seed % 2 === 0 ? "#A07C3A" : "#d2c3a0";
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="420" viewBox="0 0 600 420">
      <defs>
        <pattern id="p" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M30 0 L60 30 L30 60 L0 30 Z" fill="none" stroke="${stroke}" stroke-width="2" opacity="0.36"/>
          <circle cx="30" cy="30" r="6" fill="${stroke}" opacity="0.18"/>
        </pattern>
        <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#1a1a1a"/>
          <stop offset="100%" stop-color="#111111"/>
        </linearGradient>
      </defs>
      <rect width="600" height="420" fill="url(#g)"/>
      <rect width="600" height="420" fill="url(#p)"/>
      <path d="M0 210 L600 210" stroke="${stroke}" stroke-width="2" opacity="0.18"/>
    </svg>
  `;

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
};

function TopNav({ isScrolled }: { isScrolled: boolean }) {
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
        isScrolled ? "border-white/10 bg-black/40 backdrop-blur-md" : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <a href="#hero" className="text-sm tracking-[0.2em] text-neutral-100">
          黎锦
        </a>
        <div className="flex items-center gap-7 text-sm text-neutral-300">
          {[
            { label: "工艺", href: "#craft" },
            { label: "展陈", href: "#gallery" },
            { label: "纹样", href: "#pattern" },
            { label: "参与", href: "#participate" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group relative py-1 transition-colors hover:text-neutral-100"
            >
              {item.label}
              <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[#A07C3A] transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden bg-[#0a0a0a]">
      <motion.div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: "url(/assets/hero/li-hero.jpg)",
        }}
        initial={{ scale: 1.05 }}
        animate={{ scale: 1.15 }}
        transition={{ duration: 22, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/82 via-black/68 to-black/86" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/35" />

      <motion.div
        className="relative z-10 w-full px-6 pt-20"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="mx-auto w-full max-w-[720px] text-left md:ml-[14%]">
          <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.38em]" style={{ color: ACCENT }}>
            <Sparkles className="h-4 w-4" />
            Scientific Encyclopedia
          </div>
          <h1 className="mt-6 font-serif text-4xl tracking-[0.04em] text-[#ece8df] md:text-6xl lg:text-7xl">
            黎锦：穿在身上的史诗
          </h1>
          <p className="mt-6 max-w-[620px] text-base leading-7 text-neutral-300 md:text-lg">
            三千年纺染织绣 · 联合国急需保护非物质文化遗产
          </p>
          <div className="mt-7 h-px w-28 bg-[#A07C3A]/70" />
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#pattern"
              className="px-6 py-3 text-sm tracking-[0.08em] text-neutral-950 transition-colors hover:bg-[#9d7a49]"
              style={{ backgroundColor: CTA }}
            >
              进入百科
            </a>
            <a
              href="#craft"
              className="border px-6 py-3 text-sm tracking-[0.08em] text-[#dbc8a4] transition-colors hover:bg-[#b08d57]/12"
              style={{ borderColor: CTA }}
            >
              探索工艺
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function CraftSection() {
  const [activeId, setActiveId] = useState(crafts[0].id);
  const activeCraft = useMemo(
    () => crafts.find((craft) => craft.id === activeId) ?? crafts[0],
    [activeId]
  );

  return (
    <section id="craft" className="relative bg-[#0a0a0a] py-24">
      <motion.div
        className="mx-auto max-w-6xl px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.4em]" style={{ color: ACCENT }}>
          <Sparkles className="h-4 w-4" />
          The Craft
        </div>
        <h2 className="mt-4 font-serif text-3xl tracking-[0.03em] text-[#e5e5e5] md:text-5xl">
          黎锦工艺流程 · 科学解读
        </h2>
        <p className="mt-4 max-w-2xl leading-7 text-neutral-300">
          四大工艺构成了黎锦的完整知识链路，从纤维处理到织绣纹样，构成一部可穿戴的百科全书。
        </p>

        <div className="mt-7 h-px w-28 bg-[#A07C3A]/70" />

        <div className="mt-12 grid gap-10 md:grid-cols-[280px_1fr]">
          <div className="space-y-3">
            {crafts.map((craft) => {
              const isActive = craft.id === activeId;
              return (
                <button
                  key={craft.id}
                  className={`w-full border px-4 py-3 text-left transition-colors duration-300 ${
                    isActive
                      ? "border-[#A07C3A] bg-white/[0.06] text-[#e5e5e5]"
                      : "border-white/12 text-neutral-300 hover:border-[#A07C3A] hover:text-neutral-100"
                  }`}
                  onClick={() => setActiveId(craft.id)}
                  onMouseEnter={() => setActiveId(craft.id)}
                  onFocus={() => setActiveId(craft.id)}
                  aria-pressed={isActive}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-serif">{craft.title}</span>
                    <ChevronRight className={`h-4 w-4 ${isActive ? "text-[#A07C3A]" : "text-neutral-500"}`} />
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.3em] text-neutral-500/80">{craft.eng}</div>
                </button>
              );
            })}
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCraft.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative border border-white/12 bg-white/[0.06] p-8 backdrop-blur-md"
              >
                <div className="text-xs uppercase tracking-[0.4em]" style={{ color: ACCENT }}>
                  Scientific Detail
                </div>
                <h3 className="mt-4 font-serif text-2xl tracking-[0.03em] text-[#efede8] md:text-3xl">{activeCraft.title}</h3>
                <p className="mt-4 leading-7 text-neutral-200">{activeCraft.desc}</p>
                <div className="mt-6 border border-white/10 bg-black/30 p-5 leading-7 text-neutral-200">{activeCraft.detail}</div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function GallerySemanticSection() {
  return (
    <section id="gallery" className="relative bg-[#0a0a0a] py-24">
      <motion.div
        className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1.05fr_1fr] md:items-center"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <div className="relative h-[340px] overflow-hidden rounded-[16px] border border-white/12">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url(/assets/gallery/culture-semantic.jpg)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6">
            <p className="text-sm uppercase tracking-[0.32em] text-neutral-200/70">Exhibition View</p>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.4em]" style={{ color: ACCENT }}>
            <BookOpen className="h-4 w-4" />
            Curatorial Text
          </div>
          <h2 className="mt-4 font-serif text-3xl tracking-[0.03em] text-[#e7e3da] md:text-5xl">黎锦纹样的文化语义</h2>
          <p className="mt-4 leading-7 text-neutral-300">
            纹样不是单纯装饰，而是黎族社会记忆的编码系统。神话叙事、生活礼俗、群体身份通过图纹被持续记录与传递。
          </p>
          <blockquote className="mt-8 border-l border-[#A07C3A]/80 pl-5 leading-7 text-neutral-200">
            “经纬之间不仅是技艺，更是族群对时间、土地与信仰的叙述方式。”
          </blockquote>
          <p className="mt-6 text-xs uppercase tracking-[0.28em] text-neutral-400/70">Linguistic Textile Memory</p>
        </div>
      </motion.div>
    </section>
  );
}

function InheritorStorySection() {
  return (
    <section id="story" className="relative bg-[#0a0a0a] py-24">
      <motion.div
        className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1fr_1.05fr] md:items-center"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <div className="relative overflow-hidden rounded-[16px] border border-white/12">
          <div
            className="h-[360px] bg-cover bg-center md:h-[420px]"
            style={{ backgroundImage: "url(/assets/story/weaver-story.jpg)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="h-14 w-14 rounded-full border border-white/35 bg-white/20 text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/30">
              ▶
            </button>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.35em]" style={{ color: ACCENT }}>
            Our Story
          </p>
          <h2 className="mt-4 font-serif text-4xl tracking-[0.04em] text-[#ede8dd] md:text-5xl">
            织娘的手艺
            <br />
            代代相传
          </h2>
          <p className="mt-5 leading-7 text-neutral-300">
            在黎族悠远的传承体系里，织锦技艺是写在生活里的文化纹路。经与纬的交错，既是日常器用的智慧，也是一代代织娘守护的美学记忆。
          </p>
          <p className="mt-4 leading-7 text-neutral-400">
            黎锦技艺已有三千余年历史，2009 年被联合国教科文组织列入《急需保护的非物质文化遗产名录》，成为全球纺织史的重要活态样本。
          </p>
          <div className="mt-8 grid grid-cols-3 gap-6">
            <div>
              <p className="text-4xl font-serif text-[#d6c299]">3000+</p>
              <p className="mt-1 text-xs tracking-[0.2em] text-neutral-500">传承历史</p>
            </div>
            <div>
              <p className="text-4xl font-serif text-[#d6c299]">100+</p>
              <p className="mt-1 text-xs tracking-[0.2em] text-neutral-500">纹样类型</p>
            </div>
            <div>
              <p className="text-4xl font-serif text-[#d6c299]">2009</p>
              <p className="mt-1 text-xs tracking-[0.2em] text-neutral-500">列入名录年份</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function PatternSection() {
  return (
    <section id="pattern" className="relative bg-[#0a0a0a] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.4em]" style={{ color: ACCENT }}>
            <Sparkles className="h-4 w-4" />
            Pattern Encyclopedia
          </div>
          <h2 className="mt-4 font-serif text-3xl tracking-[0.03em] text-[#e5e5e5] md:text-5xl">图纹百科 · 纹样语义</h2>
          <p className="mt-4 max-w-2xl leading-7 text-neutral-300">每一类图纹都是文化符号的知识节点，记录神话、生活与信仰。</p>
          <div className="mt-7 h-px w-28 bg-[#A07C3A]/70" />
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {patterns.map((pattern, index) => (
            <motion.article
              key={pattern.id}
              className="group relative h-[260px] overflow-hidden rounded-[16px] border border-white/12 bg-white/[0.04] transition-all duration-300 hover:-translate-y-[6px] hover:border-[#A07C3A]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.38, delay: index * 0.05 }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${pattern.image ?? makePatternImage(pattern.id)})` }}
              />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/90 via-black/62 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-serif text-3xl tracking-[0.02em] text-[#e9e7e2]">{pattern.name}</h3>
                  <span className="text-[11px] uppercase tracking-[0.32em] text-neutral-200/65">{pattern.category}</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {pattern.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/35 px-2.5 py-0.5 text-xs text-neutral-200/90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-sm leading-7 text-neutral-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {pattern.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ParticipateSection() {
  const cards = [
    {
      id: "products",
      title: "相关产品",
      desc: "纹样文创、织锦服饰与展陈衍生品。",
      action: "进入产品页",
      href: "/products",
    },
    {
      id: "workshop",
      title: "体验工坊",
      desc: "沉浸式体验纺、染、织、绣四大工艺流程。",
      action: "进入工坊页",
      href: "/workshop",
    },
    {
      id: "volunteer",
      title: "志愿者招募",
      desc: "面向讲解、活动执行、影像记录开放报名。",
      action: "进入招募页",
      href: "/volunteer",
    },
    {
      id: "contact",
      title: "联系我们",
      desc: "合作咨询、课程预约与机构联动请联系。",
      action: "进入联系页",
      href: "/contact",
    },
  ];

  return (
    <section id="participate" className="relative border-t border-white/10 bg-[#090909] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em]" style={{ color: ACCENT }}>
          <BookOpen className="h-4 w-4" />
          Participate
        </div>
        <h2 className="mt-4 font-serif text-3xl tracking-[0.03em] text-[#e7e3da] md:text-5xl">参与与共创</h2>
        <p className="mt-4 max-w-2xl leading-7 text-neutral-300">
          通过产品、工坊、志愿服务与合作联络，让黎锦从“被看见”走向“被参与”。
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {cards.map((card) => (
            <article
              key={card.id}
              id={card.id}
              className="rounded-[16px] border border-white/12 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-[4px] hover:border-[#A07C3A]"
            >
              <h3 className="font-serif text-2xl tracking-[0.02em] text-[#ece8df]">{card.title}</h3>
              <p className="mt-3 leading-7 text-neutral-300">{card.desc}</p>
              <a
                href={card.href}
                className="mt-5 inline-flex items-center gap-2 text-sm tracking-[0.18em] text-[#d4be93] transition-colors hover:text-[#e5d2ad]"
              >
                {card.action}
                <ChevronRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FooterSection() {
  const exploreLinks = [
    { label: "关于黎锦", href: "#hero" },
    { label: "传承发展", href: "#gallery" },
    { label: "纹样图鉴", href: "#pattern" },
    { label: "织娘故事", href: "#story" },
  ];
  const joinLinks = [
    { label: "相关产品", href: "/products" },
    { label: "体验工坊", href: "/workshop" },
    { label: "志愿者招募", href: "/volunteer" },
    { label: "联系我们", href: "/contact" },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-[#080808]">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.22em] text-neutral-200">黎锦</p>
          <p className="mt-4 max-w-[420px] text-sm leading-7 text-neutral-400">
            穿在身上的史诗，织在经纬中的文明。以当代语言持续讲述黎锦的技艺、纹样和传承者故事。
          </p>
          <div className="mt-6 h-px w-24 bg-[#A07C3A]/70" />
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.32em]" style={{ color: ACCENT }}>
            探索
          </p>
          <ul className="mt-4 space-y-3">
            {exploreLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="group inline-block text-sm text-neutral-300 transition-colors hover:text-neutral-100"
                >
                  {item.label}
                  <span className="mt-1 block h-px w-0 bg-[#A07C3A] transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.32em]" style={{ color: ACCENT }}>
            参与
          </p>
          <ul className="mt-4 space-y-3">
            {joinLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="group inline-block text-sm text-neutral-300 transition-colors hover:text-neutral-100"
                >
                  {item.label}
                  <span className="mt-1 block h-px w-0 bg-[#A07C3A] transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default function Page() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="bg-[#0a0a0a] text-[#e5e5e5]">
      <TopNav isScrolled={isScrolled} />
      <HeroSection />
      <CraftSection />
      <GallerySemanticSection />
      <PatternSection />
      <InheritorStorySection />
      <ParticipateSection />
      <FooterSection />
    </main>
  );
}
