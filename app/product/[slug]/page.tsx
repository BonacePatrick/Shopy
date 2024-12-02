import AddToBag from "@/components/AddToBag";
import CheckOut from "@/components/CheckOut";
import ImageGallery from "@/components/ImageGallery";
import { client } from "@/sanity/client";
import { ProductsDetailTypes } from "@/types/Products-types";
import React from "react";

export const revalidate = 10;

export default async function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  const productDetailQuery = `*[_type == "product" && slug.current == "${(await (params)).slug}"][0]{
  _id,
    name,
    "slug": slug.current,
    images,
    price,
    description,
    "categoryName": category->name,
    price_id
}`;

  const productDetailData: ProductsDetailTypes = await client.fetch(
    productDetailQuery
  );

  return (
    <>
      <section className="min-h-[70vh] bg-white">
        <div className="w-full flex flex-col lg:flex-row justify-between py-6 md:py-14 gap-5 md:gap-0 lg:gap-10">
          <div className="w-full lg:w-[50%]">
            <ImageGallery images={productDetailData.images} />
          </div>
          {/* product details */}
          <div className="flex-1 border rounded-xl p-8">
            <div className="mb-3">
              <span className="text-sm text-gray-500 mb-2 md:mb-3">
                {productDetailData.categoryName}
              </span>
              <p className="text-2xl lg:text-3xl text-gray-800 font-bold">
                {productDetailData.name}
              </p>
            </div>
            {/* Price */}
            <div className="flex items-center gap-2">
              {/* Discount price */}
              <span className="text-gray-800 text-xl md:text-2xl font-semibold">
                ${productDetailData.price}
              </span>
              {/* Original Price */}
              <span className="text-gray-500 text-sm md:text-base line-through">
                ${productDetailData.price + 20}
              </span>
            </div>
            <span className="text-sm text-gray-500 mt-2">
              Incl VAT + Shipping
            </span>
            <div className="my-3 flex items-center gap-2">
              <span className="text-pink-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                  />
                </svg>
              </span>
              <span className="text-sm text-gray-500">2 - 4 days shipping</span>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <AddToBag currency="USD" description={productDetailData.description} image={productDetailData.images[0]} name={productDetailData.name} price={productDetailData.price} price_id={productDetailData.price_id} key={productDetailData._id}/>
              <CheckOut currency="USD" description={productDetailData.description} image={productDetailData.images[0]} name={productDetailData.name} price={productDetailData.price} price_id={productDetailData.price_id} key={productDetailData._id}/>
            </div>
            <p className="mt-6 md:mt-10 text-base tracking-wide-text-gray-500">
                {productDetailData.description}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
