"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";

export default function Categories() {
  const router = useRouter()
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "all";
  
  const handleCategoryChange = useCallback((newCategory: string) => {
    router.push(`/?category=${newCategory}`, {scroll: false})
  }, [router]);

  return (
    <>
      <div role="tablist" className="tabs tabs-bordered my-6 md:my-8">
        <button
          onClick={() => handleCategoryChange("all")}
          role="tab"
          className={`tab ${category === "all" ? "tab-active" : ""}`}
        >
          All
        </button>

        <button
          onClick={() => handleCategoryChange("Men")}
          role="tab"
          className={`tab ${category === "Men" ? "tab-active" : ""}`}
        >
          Men
        </button>
        <button
          onClick={() => handleCategoryChange("Women")}
          role="tab"
          className={`tab ${category === "Women" ? "tab-active" : ""}`}
        >
          Women
        </button>
        <button
          onClick={() => handleCategoryChange("Teens")}
          role="tab"
          className={`tab ${category === "Teens" ? "tab-active" : ""}`}
        >
          Teens
        </button>
        <button
          onClick={() => handleCategoryChange("Electronics")}
          role="tab"
          className={`tab ${category === "Electronics" ? "tab-active" : ""}`}
        >
          Electronics
        </button>
      </div>
    </>
  );
}
