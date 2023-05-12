import { FC, useState } from "react";
import { FooterBanner, HeroBanner, Filter } from "../components";
import { BannerI } from "@/types";
import { products } from "@/data/data";
import { useStateContext } from "@/context/StateContext";
import PaginatedItems from "@/components/ui/Paginator";

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
            return products[filterOptions.product] || products.apple
        }
    }


    return (
        <>
            <HeroBanner />
            <Filter />
            <div className="products-heading">
                <h2>Best Selling Products</h2>
                <p>Speakers of many variations</p>
            </div>
            <PaginatedItems items={handleFilter(filterOptions)} itemsPerPage={18} />
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
