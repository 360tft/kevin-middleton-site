import type { Metadata } from "next";
import { Section, PageTitle, PageIntro } from "@/components/section";
import { ProductCard } from "@/components/product-card";
import { CTACard } from "@/components/cta-card";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "AI tools for football coaches, referees, clubs, and cruisers. Eight live products serving coaches across 24 countries.",
};

export default function Products() {
  return (
    <>
      <Section className="pt-24 md:pt-32">
        <PageTitle>Products</PageTitle>
        <PageIntro>
          AI tools for football coaches, referees, clubs, and cruisers. Eight
          live products serving users across 24 countries.
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
          description="Custom AI tools for clubs, federations, and football businesses."
          href="/work-with-me"
          label="Start the conversation"
        />
      </Section>
    </>
  );
}
