"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";

import React from "react";
import { toast } from "sonner";

import { useShoppingCart } from "use-shopping-cart";

export default function ShoppingCartModel() {
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    totalPrice,
    redirectToCheckout,
  } = useShoppingCart();

  const handleShoppingCart = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      if (!cartCount || !cartDetails) {
        toast.error("No items in cart");
        throw new Error("No items in cart");
      }
      const result = await redirectToCheckout();
      if (result?.error) {
        throw new Error(result.error);
      }
    } catch (error) {
      console.error("Checkout error:", error);
      throw new Error("Error redirecting to checkout");
    }
  };

  return (
    <>
      <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
        <SheetContent className="sm:max-w-lg w-[90vw]">
          <SheetHeader>
            <SheetTitle>Shopping Cart</SheetTitle>
          </SheetHeader>
          <div className="h-full flex flex-col justify-between">
            <div className="mt-8 flex-1 overflow-y-auto">
              <div className="-my-6 divide-y divide-gray-200">
                {cartCount === 0 ? (
                  <p className="text-lg text-gray-800 py-6">
                    You don&apos;t have any items.
                  </p>
                ) : (
                  <>
                    {Object.values(cartDetails ?? {}).map((entry) => (
                      <div key={entry.id} className="flex py-6">
                        <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <Image
                            src={entry.image as string}
                            alt="Product image"
                            width={200}
                            height={200}
                            priority
                            className="h-full w-full object-cover object-center"
                          />
                        </div>

                        {/* Product details */}
                        <div className="ml-4 flex flex-col flex-1">
                          <div>
                            <div className="flex items-center justify-between text-gray-900 font-medium text-base">
                              <span>{entry.name}</span>
                              <span>${entry.price}</span>
                            </div>
                          </div>
                          <p className="mt-3 text-sm text-gray-500 line-clamp-2">
                            {entry.description}
                          </p>
                          <div className="flex flex-1 justify-between items-end text-sm">
                            <span className="text-gray-500 font-medium">
                              Qty: {entry.quantity}
                            </span>
                            <span
                              className="text-red-500 cursor-pointer transition duration-150 hover:text-red-600"
                              onClick={() => removeItem(entry.id)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
            <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal:</p>
                <p>${totalPrice}</p>
              </div>
              <p className="text-sm text-gray-500">
                Shipping and taxes calculated at checkout.
              </p>
              <div className="mt-6">
                <button
                  onClick={handleShoppingCart}
                  className="w-full bg-black border border-transparent rounded-md py-2 px-4 text-sm font-medium text-white shadow-sm transition duration-500 hover:scale-105 hover:bg-gray-900"
                >
                  Check out
                </button>
              </div>
              <div className="mt-6 flex gap-2 justify-center text-center text-sm text-gray-500">
                <p>or</p>
                <button
                  onClick={() => handleCartClick()}
                  className="text-sm transition duration-500 text-primary hover:text-primary/80"
                >
                  continue shopping
                </button>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
