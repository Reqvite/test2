import { ProductI } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Product: FC<ProductI> = ({ image, name, slug, price }) => {
  return (
    <div>
      <Link href={`/product/${slug}`}>
        <div className="product-card">
          <Image
            src={image[0]}
            alt={name}
            className="product-image"
            width="250"
            height="250"
            unoptimized={true}
          />
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
