import { FC, useState } from "react";
import Image from "next/image";
import {
    AiOutlineMinus,
    AiOutlinePlus,
    AiFillStar,
    AiOutlineStar,
} from "react-icons/ai";
import { Product } from "@/components";
import { useStateContext } from "../../context/StateContext";
import { ProductI, ProductWithQuantityI } from "@/types";
import { GetServerSideProps } from "next";
import { products } from "@/data/data";

const ProductDetails: FC<{
    product: ProductWithQuantityI;
}> = ({ product, products }: any) => {


    const { image, name, details, price } = product;


    const [index, setIndex] = useState(0);
    const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

    const handleBuyNow = () => {
        onAdd(product, qty);

        setShowCart(true);
    };

    const cutProducts = products.slice(0, 20).map((product: any) => {
        return {
            ...product,
            name: name.slice(0, 27) + '...'
        }
    })

    return (
        <div>
            <div className="product-detail-container">
                <div>
                    <div className="image-container">
                        <Image
                            src={image[0] ? image[index]
                                : image[0]}
                            className="product-detail-image"
                            alt={name}
                            width="111"
                            height="111"
                            unoptimized={true}
                        />
                    </div>
                    <div className="small-images-container">
                        {image?.map((item: any, i: number) => (
                            <Image
                                key={i}
                                alt="product"
                                src={item}
                                width="111"
                                height="111"
                                className={
                                    i === index ? "small-image selected-image" : "small-image"
                                }
                                onMouseEnter={() => setIndex(i)}
                                unoptimized={true}
                            />
                        ))}
                    </div>
                </div>

                <div className="product-detail-desc">
                    <h1>{name}</h1>
                    <div className="reviews">
                        <div>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                        </div>
                        <p>(20)</p>
                    </div>
                    <h4>Details: </h4>
                    <p>{details}</p>
                    <p className="price">${price}</p>
                    <div className="quantity">
                        <h3>Quantity:</h3>
                        <p className="quantity-desc">
                            <span className="minus" onClick={decQty}>
                                <AiOutlineMinus />
                            </span>
                            <span className="num">{qty}</span>
                            <span className="plus" onClick={incQty}>
                                <AiOutlinePlus />
                            </span>
                        </p>
                    </div>
                    <div className="buttons">
                        <button
                            type="button"
                            className="add-to-cart"
                            onClick={() => onAdd(product, qty)}
                        >
                            Add to Cart
                        </button>
                        <button type="button" className="buy-now" onClick={handleBuyNow}>
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
            <div className="maylike-products-wrapper">
                <h2>You may also like</h2>
                <div className="marquee">
                    <div className="maylike-products-container track">
                        {cutProducts.map((item: any) => (
                            <Product key={item.id} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

interface FoundProduct {
    key: keyof typeof products;
    product: {
        id: string;
        name: string;
        price: number;
        details: string;
        image: string[];
        filter: string;
        slug: string;
    };
}

export const getStaticPaths = async () => {
    const data = products;
    const paths = Object.values(data).flatMap((products) => {
        return products.map((product) => ({ params: { slug: product.slug } }));
    });
    return { paths, fallback: false };
};

export const getStaticProps: GetServerSideProps = async (context: any) => {
    if (!context.params) {
        return {
            notFound: true,
        };
    }
    const keys: any = Object.keys(products);
    const foundProduct: FoundProduct = keys.reduce((acc: any, key: keyof typeof products) => {
        if (acc) return acc;
        const found: any = products[key].find((product: any) => product.slug === context.params.slug);
        return found ? { product: found, key } : acc;
    }, null);

    if (!foundProduct) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            product: foundProduct.product,
            products: products[foundProduct.key],
        },
    };
}
export default ProductDetails;
