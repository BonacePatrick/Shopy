"use client";

import { urlFor } from "@/sanity/client";
import React from "react";
import { useShoppingCart } from "use-shopping-cart";

export interface ProductCart {
    price_id: string;
    name: string;
    price: number;
    image: any
    currency: string;
    description: string
}

export default function AddToBag({name, price, image, currency, description, price_id}:ProductCart) {
    const {addItem, handleCartClick} = useShoppingCart()
    const products = {
        name: name,
        price: price,
        image: urlFor(image).url(),
        currency: currency,
        description: description,
        price_id: price_id
    }
  return (
    <>
      <button onClick={() => addItem(products, handleCartClick())} className="py-3 px-4 bg-black text-white text-sm transition duration-500 hover:scale-105 hover:bg-white hover:border hover:text-black">
        Add to bag
      </button>
    </>
  );
}
