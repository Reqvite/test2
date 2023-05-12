import { BannerI } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const FooterBanner: FC<{ footerBanner: BannerI }> = ({
  // footerBanner: {
  //   discount,
  //   largeText1,
  //   largeText2,
  //   saleTime,
  //   smallText,
  //   desc,
  //   midText,
  //   product,
  //   buttonText,
  //   image,
  // },
}) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          Text
          {/* <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p> */}
        </div>
        <div className="right">
          {/* <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p> */}
          <Link href={`/product/${323}`}>
            {/* <button type="button">{buttonText}</button> */}
            <button type="button">button</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
