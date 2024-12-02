"use client";

import React from "react";
import { CartProvider } from "use-shopping-cart";

export default function CartProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY!}
      currency="USD"
      successUrl={`${process.env.NEXT_PUBLIC_URL}/stripe/success`}
      cancelUrl={`${process.env.NEXT_PUBLIC_URL}/stripe/error`}
      billingAddressCollection={true}
      shouldPersist={true}
      language="en-US"
    >
      {children}
    </CartProvider>
  );
}
