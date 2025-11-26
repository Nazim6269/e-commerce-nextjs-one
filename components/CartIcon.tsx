"use client";

import Image from "next/image";

const CartIcon = () => {
  return (
    <>
      <div className="relative cursor-pointer">
        <Image src="/cart.png" alt="" width={22} height={22} />
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-nazim rounded-full text-white text-sm flex items-center justify-center">
          1
        </div>
      </div>
    </>
  );
};

export default CartIcon;
