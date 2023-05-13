import Link from "next/link";
import { FC } from "react";
import "../app/styles/footer.css";

const Footer: FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-links">
        <div className="footer-links__box">
          <h3>About us</h3>
          <p className="footer-box__link">
            <strong>Address</strong> : 79 Florida St, Dorchester Center, MA
            02124, United States
          </p>
          <p className="footer-box__link">
            <strong>Email </strong>: support@32
          </p>
        </div>
        <div className="footer-links__box">
          <h3>Policies</h3>
          <Link href="" className="footer-box__link">
            Shipping Policy
          </Link>
          <Link href="" className="footer-box__link">
            Privacy Policy
          </Link>
          <Link href="" className="footer-box__link">
            Refund Policy
          </Link>
          <Link href="" className="footer-box__link">
            Terms Of Service
          </Link>
        </div>
        <div className="footer-links__box">
          <h3>Quick Links​</h3>
          <Link href="" className="footer-box__link">
            Home Page
          </Link>
          <Link href="" className="footer-box__link">
            All Products
          </Link>
          <Link href="" className="footer-box__link">
            Contact US
          </Link>
        </div>
      </div>
      <div className="footer-bottom ">
        <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
