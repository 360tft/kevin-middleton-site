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
      className="group block bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-200"
    >
      <div className="flex items-start gap-4">
        <div
          className="w-1 h-12 rounded-full shrink-0 mt-1"
          style={{ backgroundColor: product.colour }}
        />
        <div>
          <h3 className="text-[18px] md:text-[20px] font-semibold text-text group-hover:text-accent-blue transition-colors">
            {product.name}
          </h3>
          <p className="text-[15px] md:text-[16px] text-text-secondary leading-relaxed mt-2">
            {product.description}
          </p>
        </div>
      </div>
    </a>
  );
}
