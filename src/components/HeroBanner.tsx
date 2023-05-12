import { FC, } from "react";
import Image from "next/image";
import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const HeroBanner: FC = ({
  // heroBanner: {
  //   largeText1,
  //   smallText,
  //   desc,
  //   midText,
  //   product,
  //   buttonText,
  //   image,
  // },
}) => {

  const trendingProducts = [{
    id: 1,
    image: "https://res.cloudinary.com/dxs7prlcr/image/upload/v1683888181/iPhone-14-Pro-Max-PNG_lyl7oi.png",
    name: 'Iphone 14 pro'
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/dxs7prlcr/image/upload/v1683888582/iPhone-14-PNG-File_sqc2iu.png",
    name: 'Iphone 14 pro'
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/dxs7prlcr/image/upload/v1683888845/pngaaa.com-3365542_xkx7rj.png",
    name: 'Sony Playstation 5'
  }]
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
      <Carousel showThumbs={false} swipeable={true} emulateTouch={true} thumbWidth={20} infiniteLoop={true} interval={5000} autoPlay={true} showArrows={false} stopOnHover={true}>
        {trendingProducts.map(({ image, id, name }) => <article key={id} className="product-article" >
          <Image src={image} width='200' height='200' alt={name} className="article-image" quality={100} />
        </article>)}
      </Carousel>
    </div>
  );
};

export default HeroBanner;
