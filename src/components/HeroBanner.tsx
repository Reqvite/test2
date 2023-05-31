import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const HeroBanner: FC = (
  {
    // heroBanner: {
    //   largeText1,
    //   smallText,
    //   desc,
    //   midText,
    //   product,
    //   buttonText,
    //   image,
    // },
  }
) => {
  const trendingProducts = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dlvzscci7/image/upload/v1684610746/blu1-700x700_iu7i8d.png",
      name: "Iphone 14-plus-blue-128-gb",
      link: "apple-iphone-14-plus-blue128-gb",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dlvzscci7/image/upload/v1684610879/26530-700x700_ebu934.png",
      name: "Apple iPad Pro 12.9 2022 M2, 128GB, Space Gray",
      link: "apple-ipad-pro-11-512gb-m2-wi-fi+4g-spacegray",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dxs7prlcr/image/upload/v1683888845/pngaaa.com-3365542_xkx7rj.png",
      name: "Sony Playstation 5",
      link: "playStation-5",
    },
      {
      id: 4,
      image:
        "https://res.cloudinary.com/dlvzscci7/image/upload/v1684610928/26345-700x700_a64csc.png",
      name: "Apple Watch Ultra 49mm Titanium Case with Starlight Alpine Loop Medium",
      link: "apple-watch-ultra-49mm-titanium-case-white-ocean-band",
    },
  ];
  return (
    <div className="hero-banner-container">
      <div>
        {/* <p className="beats-solo">{smallText}</p> */}
        {/* <h3>{midText}</h3> */}
        <h1>Trending products</h1>
        {/* <Image
          src=""
          alt="headphones"
          className="hero-banner-image"
          width="555"
          height="555"
          unoptimized={true}
        /> */}
        <div>
          {/* <Link href={`/product/${323}`}>
            <button type="button">{buttonText}</button>
            <button type="button">button</button>
          </Link> */}
          {/* <div className="desc">
            <h5>Description</h5>
            <p>{desc}</p>
          </div> */}
        </div>
      </div>
      <Carousel
        showThumbs={false}
        swipeable={true}
        emulateTouch={true}
        thumbWidth={20}
        infiniteLoop={true}
        interval={5000}
        autoPlay={true}
        showArrows={false}
        stopOnHover={true}
      >
        {trendingProducts.map(({ image, id, name, link }) => (
          <Link href={`/product/${link}`} key={id}>
            <article  className="product-article">
              <Image
                src={image}
                width="200"
                height="200"
                alt={name}
                className="article-image"
                quality={100}
              />
            </article>
          </Link>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroBanner;
