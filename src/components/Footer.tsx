import Link from "next/link";
import { FC } from "react";
import img from "../../public/assets/payment.png";
import "../app/styles/footer.css";
import Image from "next/image";

const Footer: FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-links">
        <div className="footer-links__box">
          <h3>About us</h3>
          <a className="footer-box__link" href="">
            <strong>Address</strong> : 79 Florida St, Dorchester Center, MA
            02124, United States
          </a>
          <a className="footer-box__link" href="mailto:support@32.com">
            <strong>Email </strong>: support@32.com
          </a>
        </div>
        <div className="footer-links__box">
          <h3>Policies</h3>
          <Link href="shipping-policy" className="footer-box__link">
            Shipping Policy
          </Link>
          <Link href="privacy-policy" className="footer-box__link">
            Privacy Policy
          </Link>
          <Link href="refund-policy" className="footer-box__link">
            Refund Policy
          </Link>
          <Link href="terms-of-service" className="footer-box__link">
            Terms Of Service
          </Link>
        </div>
        <div className="footer-links__box">
          <h3>Quick Links​</h3>
          <Link href="/" className="footer-box__link">
            Home Page
          </Link>
          <Link href="track-order" className="footer-box__link">
            Track order
          </Link>
        </div>
      </div>
      <div className="footer-bottom ">
        <p className="payments-text">
          &copy; {new Date().getFullYear()} All Rights Reserved.
        </p>
        <Image
          src={img}
          alt="payments"
          width={350}
          height={39}
          className="payments-image"
        />
      </div>
    </footer>
  );
};

export default Footer;
