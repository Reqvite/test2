import { createContext, FC, ReactNode, useContext, useState } from "react";
import toast from "react-hot-toast";
import { ContextI, ProductWithQuantityI } from "@/types";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export const Context = createContext<ContextI>({
  showCart: false,
  setShowCart: () => {},
  cartItems: [],
  setCartItems: () => {},
  totalPrice: 0,
  setTotalPrice: () => {},
  totalQuantities: 0,
  setTotalQuantities: () => {},
  qty: 0,
  incQty: () => {},
  decQty: () => {},
  onAdd: () => {},
  toggleCartItemQuanitity: () => {},
  onRemove: () => {},
  filterOptions: { product: "", filter: "" },
  setFilterOptions: () => {},
  reviews: [],
  setReviews: ([]) => {},
  privacy: false,
  setPrivacy: () => {},
});

export const StateContext: FC<{ children: ReactNode }> = ({ children }) => {
  const [privacy, setPrivacy] = useLocalStorage<boolean>("privacy", false);
  const [reviews, setReviews] = useLocalStorage<string[]>("reviews", []);
  const [showCart, setShowCart] = useState<boolean>(false);
  const [filterOptions, setFilterOptions] = useState<{
    product: string;
    filter: string;
  }>({ product: "", filter: "" });
  const [cartItems, setCartItems] = useLocalStorage<ProductWithQuantityI[]>(
    "cartItems",
    []
  );
  const [totalPrice, setTotalPrice] = useLocalStorage<number>("totalPrice", 0);
  const [totalQuantities, setTotalQuantities] = useLocalStorage<number>(
    "totalQuantities",
    0
  );
  const [qty, setQty] = useState<number>(1);

  let foundProduct: ProductWithQuantityI;
  let idx: number;

  const onAdd = (product: any, quantity: number): void => {
    const isInCart = cartItems.find((item: any) => item.id === product.id);

    setTotalPrice((prevPrice: any) => prevPrice + product.price * quantity);
    setTotalQuantities((prevQty: any) => prevQty + quantity);

    if (isInCart) {
      const updatedCartItems = cartItems.map(
        (cartProduct: ProductWithQuantityI) => {
          if (cartProduct.id === product.id)
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + quantity,
            };
          return cartProduct;
        }
      );

      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }
    toast.success(`${qty} ${product.name} added to cart.`);
  };

  const onRemove = (product: ProductWithQuantityI): void => {
    foundProduct = cartItems.find((item) => item.id === product.id)!;
    const newCartItems = cartItems.filter((item) => item.id !== product.id);

    setTotalPrice(
      (prevTotalPrice: any) =>
        prevTotalPrice - foundProduct.price * foundProduct.quantity
    );
    setTotalQuantities(
      (prevTotalQuantities: any) => prevTotalQuantities - foundProduct.quantity
    );
    setCartItems(newCartItems);

    if (newCartItems.length === 0) {
      setTotalQuantities(0);
      setTotalPrice(0);
      localStorage.removeItem("totalQuantities");
      localStorage.removeItem("totalPrice");
    }
  };

  const toggleCartItemQuanitity = (id: string, value: string): void => {
    foundProduct = cartItems.find((item) => item.id === id)!;
    idx = cartItems.findIndex((product) => product.id === id);

    console.log(foundProduct);
    if (value === "inc") {
      const updatedProduct = {
        ...foundProduct,
        quantity: foundProduct.quantity + 1,
      };
      const updatedCartItems = [...cartItems];
      updatedCartItems[idx] = updatedProduct;

      setCartItems(updatedCartItems);
      setTotalPrice(
        (prevTotalPrice: any) => prevTotalPrice + foundProduct.price
      );
      setTotalQuantities((prevTotalQuantities: any) => prevTotalQuantities + 1);
    } else if (value === "dec") {
      if (foundProduct.quantity > 1) {
        const updatedProduct = {
          ...foundProduct,
          quantity: foundProduct.quantity - 1,
        };
        const updatedCartItems = [...cartItems];
        updatedCartItems[idx] = updatedProduct;

        setCartItems(updatedCartItems);
        setTotalPrice(
          (prevTotalPrice: any) => prevTotalPrice - foundProduct.price
        );
        setTotalQuantities(
          (prevTotalQuantities: any) => prevTotalQuantities - 1
        );
      }
    }
  };

  const incQty = (): void => {
    setQty((prev: any) => prev + 1);
  };

  const decQty = (): void => {
    setQty((prev: any) => {
      if (prev - 1 < 1) return 1;

      return prev - 1;
    });
  };

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        setCartItems,
        totalPrice,
        setTotalPrice,
        totalQuantities,
        setTotalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuanitity,
        onRemove,
        filterOptions,
        setFilterOptions,
        reviews,
        setReviews,
        privacy,
        setPrivacy,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
