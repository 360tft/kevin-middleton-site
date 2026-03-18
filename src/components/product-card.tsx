import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-[#111418] rounded-xl p-5 border border-[#1e2229] hover:border-[#2a3040] transition-colors duration-200"
    >
      <div className="flex items-start gap-4">
        <div
          className="w-1 h-10 rounded-full shrink-0 mt-0.5 opacity-80"
          style={{ backgroundColor: product.colour }}
        />
        <div>
          <h3 className="text-[15px] font-semibold text-[#f0f0f0] group-hover:text-[#E5A11C] transition-colors leading-snug">
            {product.name}
          </h3>
          <p className="text-[13px] text-[#666] leading-relaxed mt-1.5">
            {product.description}
          </p>
        </div>
      </div>
    </a>
  );
}
