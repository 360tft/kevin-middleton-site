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
              Kevin Middleton is a UEFA Licensed Coach, Author, Football
              Community Builder and Builder of AI Tools used by thousands of
              football coaches and players worldwide.
            </PageTitle>
            <PageIntro>
              Having coached everybody from grassroots to professional, ages 1
              to 70, Kevin now builds AI solutions for individuals, clubs,
              federations, and entrepreneurs.
            </PageIntro>
          </div>
        </div>
      </Section>

      <Section className="py-0">
        <StatsRow />
      </Section>

      <Section>
        <h2 className="text-[22px] md:text-[28px] font-semibold text-text mb-8">
          Products
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
          title="Work with Kevin"
          description="Clubs, federations, and entrepreneurs who want to bring AI into football coaching."
          href="/work-with-me"
          label="Learn more"
        />
      </Section>
    </>
  );
}
