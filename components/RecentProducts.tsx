import { client, urlFor } from "@/sanity/client";
import { ProductsTypes } from "@/types/Products-types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const revalidate = 30;

export default async function RecentProducts({ category = "all" }) {
  const productQuery =
    category === "all"
      ? `
    *[_type == "product"][0...4] | order(_createdAt desc){
  _id,
    name,
    "slug": slug.current,
    "categoryName": category->name,
    price,
    description,
    "imageUrl": images[0].asset->url
}
    `
      : `
    *[_type == "product" && category->name match "${category}"][0...4] | order(_createdAt desc){
  _id,
  name,
  "slug": slug.current,
  "imageUrl": images[0].asset->url,
  price,
  "categoryName": category->name,
  description
}
    `;
  const products: ProductsTypes[] = await client.fetch(productQuery);

  return (
    <>
      <section className="min-h-[70vh]">
        <div className="flex items-center justify-between">
          <h2 className="text-lg md:text-2xl font-bold">Recent Products</h2>
          <Link
            href="/product"
            className="text-primary text-sm flex items-center gap-1 transition duration-500 hover:scale-105"
          >
            <span>View All</span>
            <span>
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
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </span>
          </Link>
        </div>
        {/* Recent Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {products.map((product) => (
            <Link
              href={`/product/${product.slug}`}
              className="flex flex-col items-center"
              key={product._id}
            >
              <div className="w-full aspect-square h-[20rem] bg-gray-100 relative group">
                <Image
                  src={urlFor(product.imageUrl).url()}
                  alt={product.name}
                  width={800}
                  height={800}
                  priority
                  quality={100}
                  className="w-full h-full object-cover transition duration-500 hover:scale-105 hover:opacity-75 cursor-pointer"
                />
              </div>
              <div className="w-full flex items-center justify-between">
                <div className="w-full flex flex-col gap-1 mt-2">
                  <h3 className="text-sm font-medium text-gray-700">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {product.categoryName}
                  </p>
                </div>
                <p className="font-medium text-sm text-gray-900">
                  <strong>$</strong>
                  {product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
