import Image from "next/image";
import type { Product } from "@/lib/data";

type Props = {
  product: Product;
  size: "feature" | "small";
};

export default function ProductPlate({ product, size }: Props) {
  // Every project opens its first link (the live site, store listing or source) in a new tab
  const href = product.links[0].href;
  const sizes = size === "feature" ? "(min-width: 860px) 66vw, 100vw" : "(min-width: 860px) 45vw, 100vw";

  return (
    <article className={`plate plate-${size}`} tabIndex={-1}>
      <a href={href} className="plate-image" tabIndex={-1} aria-hidden="true" target="_blank" rel="noopener noreferrer">
        <Image src={product.image} alt="" sizes={sizes} placeholder="blur" />
      </a>
      <div className="plate-caption">
        <h3>
          <a href={href} target="_blank" rel="noopener noreferrer">
            {product.name}
          </a>
        </h3>
        <p className="caption">
          {product.kind}, {product.year}
          {product.live && <span className="live">Live</span>}
        </p>
        <p className="plate-summary">{product.summary}</p>
        <p className="plate-links">
          {product.links.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          ))}
        </p>
      </div>
    </article>
  );
}
