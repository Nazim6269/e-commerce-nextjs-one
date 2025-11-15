"use client";

import Image from "next/image";
import { useState } from "react";
import CartModal from "./CartModal";

const CartIcon = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <>
      <div
        className="relative cursor-pointer"
        onClick={() => setIsCartOpen((prev) => !prev)}
      >
        <Image src="/cart.png" alt="" width={22} height={22} />
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-nazim rounded-full text-white text-sm flex items-center justify-center">
          1
        </div>
      </div>
      <div>{isCartOpen && <CartModal />}</div>
    </>
  );
};

export default CartIcon;
