"use client";
import React from "react";
import { categories } from "@/utils/category";
import Link from "next/link";

const CategoryList = ({
  search,
  category,
}: {
  search?: string;
  category?: string;
}) => {
  return (
    <div className="flex items-center justify-center mt-4">
      <div className="flex items-center border rounded-md p-2 gap-2">
        {categories.map((cat) => {
          const isActive = cat.label === category;
          const href = isActive
            ? `/${search ? `?search=${search}` : ""}`
            : `/?category=${cat.label}${search ? `&search=${search}` : ""}`;

          return (
            <Link
              key={cat.label}
              //   href={`/?category=${cat.label}${searchTerm}`}
              href={href}
            >
              <article
                className={`${
                  isActive ? "text-primary scale-110 border-b-2" : ""
                } hover:text-primary text-sm flex flex-col items-center gap-2 cursor-pointer p-1 hover:scale-110 transition-all`}
              >
                <cat.icon />
                <p>{cat.label}</p>
              </article>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryList;
