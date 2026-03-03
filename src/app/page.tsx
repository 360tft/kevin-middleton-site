import Image from "next/image";
import { Section, PageTitle, PageIntro } from "@/components/section";
import { StatsRow } from "@/components/stats-row";
import { ProductCard } from "@/components/product-card";
import { Testimonial } from "@/components/testimonial";
import { CTACard } from "@/components/cta-card";
import { products } from "@/data/products";
import { playerTestimonials } from "@/data/testimonials";

const featuredProducts = products.slice(0, 6);
const featuredTestimonials = playerTestimonials.slice(0, 3);

export default function Home() {
  return (
    <>
      <Section className="pt-24 md:pt-32">
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
          <div className="shrink-0 flex justify-center md:justify-start">
            <Image
              src="/images/kevin-profile.png"
              alt="Kevin Middleton"
              width={200}
              height={200}
              priority
              className="w-[160px] h-[160px] md:w-[200px] md:h-[200px]"
            />
          </div>
          <div>
            <PageTitle>
              I build AI tools that give football coaches answers in seconds
              instead of hours.
            </PageTitle>
            <PageIntro>
              UEFA licensed coach. 15+ years on the pitch. Author. Now building
              the AI tools that 10,000+ coaches across 40+ countries rely on
              every week.
            </PageIntro>
          </div>
        </div>
      </Section>

      <Section className="py-0">
        <StatsRow />
      </Section>

      <Section>
        <h2 className="text-[22px] md:text-[28px] font-semibold text-text mb-8">
          Eight live products. Thousands of coaches using them daily.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="text-[22px] md:text-[28px] font-semibold text-text mb-8">
          What Players Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featuredTestimonials.map((t) => (
            <Testimonial key={t.name} {...t} />
          ))}
        </div>
      </Section>

      <Section>
        <CTACard
          title="Want your own AI tool built?"
          description="Kevin has built eight. Yours could be next. From a 90-minute strategy call to a fully deployed product."
          href="/work-with-me"
          label="See how it works"
        />
      </Section>
    </>
  );
}
