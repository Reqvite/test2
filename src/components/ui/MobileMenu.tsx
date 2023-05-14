import { slide as Menu } from "react-burger-menu";

import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "../../app/styles/menu.css";
import { useStateContext } from "@/context/StateContext";
import Link from "next/link";
import Cart from "../Cart";

const MobileMenu = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isMenuOpen = ({ isOpen }: { isOpen: boolean }) => {
    setIsOpen(isOpen);
  };
  return (
    <Menu right onStateChange={isMenuOpen} isOpen={isOpen}>
      <div className="cart-menu">
        <button
          type="button"
          className="cart-icon"
          onClick={() => setShowCart(!showCart)}
        >
          <AiOutlineShoppingCart />
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>
      </div>
      {showCart && <Cart />}
      <Link href="/" className="navbar-link menu-link">
        Home Page
      </Link>
      <Link href="/track-order" className="navbar-link menu-link">
        Track Order
      </Link>
    </Menu>
  );
};

export default MobileMenu;
