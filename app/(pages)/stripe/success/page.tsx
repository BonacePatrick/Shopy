import Link from "next/link";
import React from "react";

export default function StripeSuccessPage() {
  return (
    <>
      {/* Stripe success page with svg success image with modern animations */}
      <section className="min-h-[70vh] md:py-14">
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <span className="text-green-500">
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
                    d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                  />
                </svg>
              </span>

              <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-800">
                Thank you for your purchase!
              </h1>
              <p className="text-gray-600 mt-6 text-center text-sm md:text-base">
                Your order has been successfully placed You will receive an
                email confirmation shortly.
              </p>
              <p className="text-gray-600 mt-4 text-center text-sm md:text-base">
                Have nice day.
              </p>
              <Link href="/" >
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
