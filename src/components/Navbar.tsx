import Link from "next/link";
import { FC, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Cart from "./Cart";
import { useStateContext } from "@/context/StateContext";
import Search from "./ui/Search";
import "../app/styles/navbar.css";
import MobileMenu from "./ui/MobileMenu";
import useMediaQuery from "@/hooks/useMedia";
import Image from "next/image";
import logo from '../../public/assets/wizardsbyte-logo.png'
import { VscAccount } from "react-icons/vsc";
import LoginDropDown from "./ui/LoginDropDown";

const Navbar: FC = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  const [showLogin, setShowLogin] = useState(false)
  const matches = useMediaQuery("(min-width: 950px)");

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/"><Image src={logo} alt="wizardsbyte logo" width={150} height={140} quality={100} className="logo-img"/></Link>
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
          <div className="icons-container">
            <div className="login-box">
              <button
                type="button"
                className="cart-icon"
                onClick={() => setShowLogin(!showLogin)}
              >
                <VscAccount />
              </button>
              {showLogin && <LoginDropDown />}
            </div>
            <button
                type="button"
                className="cart-icon"
                onClick={() => {
                  setShowLogin(false)
                  setShowCart(!showCart)
                }}
            >
              <AiOutlineShoppingCart />
              <span className="cart-item-qty">{totalQuantities}</span>
            </button>
            {showCart && <Cart />}
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
