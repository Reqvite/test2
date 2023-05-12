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
    // products: ProductI[];
}> = ({ product, products }) => {

    const { image, name, details, price } = product;


    const [index, setIndex] = useState(0);
    const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

    const handleBuyNow = () => {
        onAdd(product, qty);

        setShowCart(true);
    };

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
                    {/* <div className="maylike-products-container track">
                        {products.map((item: ProductI) => (
                            <Product key={item._id} {...item} />
                        ))}
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export const getStaticPaths = async () => {
    const data = products;
    const paths = data.apple.map(({ slug }) => ({
        params: { slug },
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetServerSideProps = async (context: any) => {
    if (!context.params) {
        return {
            notFound: true,
        };
    }

    const data = products.apple.filter((product) => product.slug === context.params.slug);

    if (!data) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            product: data[0],
        },
    };
};

export default ProductDetails;
