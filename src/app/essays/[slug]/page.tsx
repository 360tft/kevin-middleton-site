import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Section } from "@/components/section";
import { getEssayBySlug, getAllEssaySlugs } from "@/data/essays";
import { SITE } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllEssaySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const essay = getEssayBySlug(slug);
  if (!essay) return {};
  return {
    title: essay.title,
    description: essay.excerpt,
    openGraph: {
      title: essay.title,
      description: essay.excerpt,
      type: "article",
      publishedTime: essay.date,
      authors: [SITE.name],
    },
    twitter: {
      card: "summary_large_image",
      title: essay.title,
      description: essay.excerpt,
    },
  };
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function renderBody(body: string) {
  const paragraphs = body.split(/\n\n+/);
  return paragraphs.map((block, i) => {
    if (block.trim() === "---") {
      return <hr key={i} className="border-[#1e2229] my-8" />;
    }
    const isItalic = block.trim().startsWith("*") && block.trim().endsWith("*");
    if (isItalic) {
      return (
        <p
          key={i}
          className="text-[14px] text-[#666] leading-relaxed italic"
          dangerouslySetInnerHTML={{
            __html: block.trim().slice(1, -1),
          }}
        />
      );
    }
    return (
      <p key={i} className="text-[17px] md:text-[18px] text-[#c8c8c8] leading-[1.8]">
        {block.trim()}
      </p>
    );
  });
}

export default async function EssayPage({ params }: Props) {
  const { slug } = await params;
  const essay = getEssayBySlug(slug);
  if (!essay) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: essay.title,
    description: essay.excerpt,
    datePublished: essay.date,
    author: {
      "@type": "Person",
      name: SITE.name,
      url: SITE.url,
    },
    publisher: {
      "@type": "Person",
      name: SITE.name,
      url: SITE.url,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Section className="pt-28 md:pt-36 pb-32">
        <div className="max-w-[720px]">
          <Link
            href="/essays"
            className="text-[12px] font-mono text-[#555] uppercase tracking-[0.15em] hover:text-[#E5A11C] transition-colors mb-8 inline-block"
          >
            ← Writing
          </Link>

          <p className="text-[11px] font-mono text-[#555] tracking-[0.12em] uppercase mb-4">
            {formatDate(essay.date)}
          </p>

          <h1 className="text-[28px] md:text-[40px] font-semibold leading-tight tracking-tight text-[#f0f0f0] mb-8">
            {essay.title}
          </h1>

          <div className="flex flex-col gap-6">{renderBody(essay.body)}</div>
        </div>
      </Section>
    </>
  );
}
