import Link from "next/link";
import { FC } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Cart from "./Cart";
import { useStateContext } from "@/context/StateContext";
import Search from "./ui/Search";
import "../app/styles/navbar.css";
import MobileMenu from "./ui/MobileMenu";
import useMediaQuery from "@/hooks/useMedia";

const Navbar: FC = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const matches = useMediaQuery("(min-width: 950px)");
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Store</Link>
      </p>
      {!matches ? (
        <>
          <Search />
          <MobileMenu />
        </>
      ) : (
        <>
          <div className="navbar-links">
            <Link href="/" className="navbar-link">
              Home Page
            </Link>
            <Link href="/track-order" className="navbar-link">
              Track Order
            </Link>
            <Search />
          </div>
          <button
            type="button"
            className="cart-icon"
            onClick={() => setShowCart(!showCart)}
          >
            <AiOutlineShoppingCart />
            <span className="cart-item-qty">{totalQuantities}</span>
          </button>
          {showCart && <Cart />}
        </>
      )}
    </div>
  );
};

export default Navbar;
