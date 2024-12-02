"use client";

import { urlFor } from "@/sanity/client";
import Image from "next/image";
import React, { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ImageGallery({ images }: { images: any }) {
  const [bigImage, setBigImage] = useState(images[0]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handlePickImage = (image: any) => {
    setBigImage(image)
  }
  return (
    <>
      <div className="grid lg:grid-cols-5 gap-2">
        <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {images.map((image: any, index: number) => (
            <div
              className="w-full h-full md:h-[40%] transition duration-500 bg-gray-100 p-4 rounded-2xl overflow-hidden cursor-pointer"
              key={index}
            >
              <Image
                src={urlFor(image).url()}
                alt={`product-${index}`}
                key={index}
                className="w-full h-full object-cover cursor-pointer object-center transition duration-500"
                width={800}
                height={800}
                quality={100}
                priority
                onClick={() => handlePickImage(image)}
              />
            </div>
          ))}
        </div>
        <div className="relative w-full h-[25rem] md:h-[45rem] lg:h-[35rem] overflow-hidden bg-gray-100 rounded-lg col-span-4">
          <Image
            src={urlFor(bigImage).url()}
            alt="Product Cover"
            priority
            width={1024}
            height={1024}
            className="w-full h-full object-cover cursor-pointer object-center"
          />
          <span className="absolute left-0 top-0 bg-pink-500 uppercase rounded-br-lg px-3 py-1.5 tracking-wider text-sm text-white">
            Sale
          </span>
        </div>
      </div>
    </>
  );
}
