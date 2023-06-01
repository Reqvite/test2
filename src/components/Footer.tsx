import Link from "next/link";
import { FC, useState } from "react";
import img from "../../public/assets/payment.png";
import "../app/styles/footer.css";
import Image from "next/image";
import { toast } from "react-hot-toast";

const Footer: FC = () => {
  const [email, setEmail] = useState<string>('');
  const onSubmit = () => {
    if (!email) {
      return
    }
    toast.success('Thank you for your subscription!')
    setEmail('')
  };

  return (
    <footer className="footer-container">
      <h2>
        Join our email subscription now to get updates on promotions and
        coupons.
      </h2>
      <div className="subscribeBox">
        <input
          type="email"
          className="footer-input"
          placeholder="Your email here..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="footer-button" onClick={onSubmit}>Subscribe</button>
      </div>
      <div className="footer-links">
        <div className="footer-links__box">
          <h3>About us</h3>
          <a className="footer-box__link" href="">
            <strong>Address</strong> : 79 Florida St, Dorchester Center, MA
            02124, United States
          </a>
          <a
            className="footer-box__link"
            href="mailto:wizardsbyte-support@gmail.com"
          >
            <strong>Email </strong>: wizardsbyte-support@gmail.com
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
        <div>
          <h4>Need help? Call us: (+1) 940 526 4322</h4>
          <p>Monday – Friday: 8:00 – 21:00 / Saturday – Sunday 9:00 – 18:00</p>
        </div>
        <Image
          src={img}
          alt="payments"
          width={350}
          height={39}
          className="payments-image"
        />
      </div>
      <p className="payments-text">
        &copy; {new Date().getFullYear()} All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
