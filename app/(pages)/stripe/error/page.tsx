import Link from "next/link";
import React from "react";

export default function StripeError() {
  return (
    <>
      {/* Stripe error message page */}
      <section className="min-h-[70vh] md:py-14">
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <span className="text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-14"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                  />
                </svg>
              </span>

              <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-800">
                Opps Something went wrong!
              </h1>
              <p className="text-gray-600 mt-6 text-center text-sm md:text-base">
                Please try again later.
              </p>
              <Link href="/">
                <span className="flex flex-row items-center gap-2 mt-6 transition duration-500 hover:text-gray-600 hover:scale-105">
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
                      d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <span>Go back</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
