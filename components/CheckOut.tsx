"use client";

import { urlFor } from "@/sanity/client";
import React from "react";
import { useShoppingCart } from "use-shopping-cart";
import { ProductCart } from "./AddToBag";

export default function CheckOut({
  name,
  price,
  image,
  currency,
  description,
  price_id,
}: ProductCart) {
  const { checkoutSingleItem } = useShoppingCart();
  const products = {
    name: name,
    price: price,
    image: urlFor(image).url(),
    currency: currency,
    description: description,
    price_id: price_id,
  };
  const handleBuy = (price_id: string) => {
    checkoutSingleItem(price_id);
  };
  return (
    <>
      <button
        onClick={() => handleBuy(products.price_id)}
        className="py-3 px-4 bg-zinc-100 text-black text-sm transition duration-500 hover:scale-105 hover:bg-white hover:border hover:text-black"
      >
        Check out now
      </button>
    </>
  );
}
