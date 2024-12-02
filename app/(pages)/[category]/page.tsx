import { client, urlFor } from "@/sanity/client";
import { ProductCategoryTypes } from "@/types/Products-types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const categoryQuery = `
    *[_type == "product" && category->name == "${(await (params)).slug}"]{
  _id,
    name,
    "slug": slug.current,
    "imageUrl": images[0].asset->url,
      price,
      "categoryName": category->name
}
    `;
  const categoryData:ProductCategoryTypes[] = await client.fetch(categoryQuery)

  return (
    <>
     <section className="min-h-[70vh] py-6 md:py-14">
        <div className="flex items-center justify-between">
          <h2 className="text-lg md:text-2xl font-bold">Our Products for {(await (params)).slug}</h2>
        </div>
        {/* Recent Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {categoryData.map((product) => (
            <Link href={`/product/${product.slug}`} className="flex flex-col items-center" key={product._id}>
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
                <p className="font-medium text-sm text-gray-900"><strong>$</strong>{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
