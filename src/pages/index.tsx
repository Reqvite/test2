import { FC } from "react";
import { Product, FooterBanner, HeroBanner, Filter } from "../components";
import { BannerI, ProductI } from "@/types";
import { products } from "@/data/data";
import { useStateContext } from "@/context/StateContext";

const Home: FC<{ products: any; banners: BannerI[] }> = ({
    products,
    banners,
}) => {
    const {
        filterOptions
    } = useStateContext();


    const handleFilter = (filterOptions: { product: string, filter: string }) => {
        if (filterOptions.filter) {
            const filteredProducts = products[filterOptions.product]?.filter(({ filter }: any) => filter === filterOptions.filter)
            return filteredProducts
        } else {
            return products.apple
        }
    }


    return (
        <>
            <HeroBanner heroBanner={products && products} />
            <Filter />
            <div className="products-heading">
                <h2>Best Selling Products</h2>
                <p>Speakers of many variations</p>
            </div>
            <div className="products-container">
                {handleFilter(filterOptions)?.map((product: any) => (
                    <Product key={product.id} {...product} />
                ))}
            </div>
            <FooterBanner footerBanner={banners && banners[0]} />
        </>
    );
};


export const getStaticProps = async () => {
    const data = products;

    if (!data) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            products: data,
        },
    };
};

export default Home;
