"use client";

import Link from "next/link";
import React, { useState } from "react";

const navbarItems = [
  {
    id: 1,
    name: "Blessing",
    href: "/",
  },
  {
    id: 2,
    name: "Intro",
    href: "/hero",
  },
  {
    id: 3,
    name: "About",
    href: "/about",
  },
  {
    id: 4,
    name: "Works",
    href: "#projects",
  },
  {
    id: 5,
    name: "Articles",
    href: "#articles",
  },
  {
    id: 6,
    name: "Say Hi",
    href: "#contact",
  },
];
const Desktop = () => {
  const [active, setActive] = useState<number>(0);
  return (
    //desktop navbar container
    <nav className="w-full hidden lg:block    ">
      <ul className="flex justify-between mx-auto w-10/12">
        {navbarItems?.map((item, index) => {
          //mapping through the navbar items
          const isActive = active === index;
          const firstChild = index === 0; //getting the first elemnt
          const lastChild = index === navbarItems.length - 1; //getting the last elemnt
          const conditionalRadiusClasses = firstChild
            ? "rounded-l-lg" // Apply radius to the top corners of the first item
            : lastChild
            ? "rounded-r-lg" // Apply radius to the bottom corners of the last item
            : ""; // No radius for middle items
          return (
            <Link
              key={index}
              href={item.href}
              className={` ${
                isActive
                  ? "bg-gray-900"
                  : "bg-transparent transition-all  duration-400 ease-in-out"
              } p-6 border  border-gray-900 uppercase w-full ${conditionalRadiusClasses}`}
            >
              <li onClick={() => setActive(index)}>{item.name}</li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default Desktop;
