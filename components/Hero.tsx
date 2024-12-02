
import { client, urlFor } from "@/sanity/client";
import Image from "next/image";
import React from "react";

interface HeroImage {
  image1: {
    asset: {
      _ref: string;
    };
  };
  image2: {
    asset: {
      _ref: string;
    };
  };
}
export const revalidate = 30;
const GROQ_IMAGE_QUERY = `*[_type == "heroImages"][0]`;

export default async function Hero() {
  const heroImages: HeroImage = await client.fetch(GROQ_IMAGE_QUERY);
  return (
    <>
      <section className="hero min-h-screen relative isolate overflow-hidden">
       {/* First gradient */}
       <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          <div
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        {/* Second gradient */}
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        <div className="flex p-6 w-full flex-col lg:flex-row-reverse items-center justify-around">
          <div className="w-full lg:w-[50%]">
            <div className="w-full h-[15rem] md:h-[25rem] overflow-hidden relative left-12 top-12 md:left-56 md:top-16 z-10 -mt-10 lg:ml-0">
              <Image
                src={urlFor(heroImages.image1.asset._ref).url()}
                alt="Hero image"
                width={1024}
                height={1024}
                priority
                quality={100}
                className="max-w-sm rounded-lg shadow-2xl w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-[15rem] md:h-[25rem] overflow-hidden relative right-12 -top-6 md:right-16 md:-top-44 z-10 -mt-10 lg:ml-0 ">
              <Image
                src={urlFor(heroImages.image2.asset._ref).url()}
                alt="Hero image"
                width={1024}
                height={1024}
                priority
                quality={100}
                className="max-w-sm rounded-lg shadow-2xl w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full lg:w-[50%]">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold lg:max-w-96 my-4 md:my-0">
              Shop made simple!
            </h1>
            <p className="py-6 max-w-[30rem]">
              Here we sell  all kinds of products. From electronics to other products with seamless user experience.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
