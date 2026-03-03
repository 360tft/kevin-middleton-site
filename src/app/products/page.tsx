import type { Metadata } from "next";
import { Section, PageTitle, PageIntro } from "@/components/section";
import { ProductCard } from "@/components/product-card";
import { CTACard } from "@/components/cta-card";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Ten AI tools that give coaches, referees, and clubs the answers they need in seconds. Used across 40+ countries.",
};

export default function Products() {
  return (
    <>
      <Section className="pt-24 md:pt-32">
        <PageTitle>Ten products. Thousands of daily users.</PageTitle>
        <PageIntro>
          Every tool here started with the same question: what takes coaches
          hours that AI could do in seconds? These are the answers.
        </PageIntro>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </Section>

      <Section>
        <CTACard
          title="Want Kevin to build yours?"
          description="Kevin has built ten. Yours could be next. From a 90-minute strategy call to a fully deployed product."
          href="/work-with-me"
          label="Start the conversation"
        />
      </Section>
    </>
  );
}
