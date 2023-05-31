import { FC } from "react";
import {  HeroBanner, Filter } from "../components";
import { BannerI } from "@/types";
import { modifyProducts, products } from "@/data/data";
import { useStateContext } from "@/context/StateContext";
import PaginatedItems from "@/components/ui/Paginator";
import Head from "next/head";

const Home: FC<{ products: any; banners: BannerI[] }> = ({ products }) => {
  const { filterOptions } = useStateContext();

  const handleFilter = (filterOptions: { product: string; filter: string }) => {
    if (filterOptions.filter) {
      const filteredProducts = products[filterOptions.product]?.filter(
        ({ filter }: any) => filter.toLowerCase() === (filterOptions.filter) || filter.includes(filterOptions.filter)
      );
      return filteredProducts;
    } else {
      return products[filterOptions.product] || products.apple;
    }
  };

  // if (products) {
  //    console.log(modifyProducts(products)) 
  // }
 

  return (
    <>
      <Head>
        <title>Shop</title>
        <meta name="description" content="Buy high-quality products online." />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="shop, products, buy, online, iphone, apple, gaming, vr, laptop, dyson"
        />
      </Head>
      <HeroBanner />
      <Filter />
      <PaginatedItems items={handleFilter(filterOptions)} itemsPerPage={18} />
      {/* <FooterBanner footerBanner={banners && banners[0]} /> */}
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
