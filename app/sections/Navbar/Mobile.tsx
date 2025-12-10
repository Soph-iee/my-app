"use client";

import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { LuMenu } from "react-icons/lu";

const navbarItems = [
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
    href: "/projects",
  },
  {
    id: 5,
    name: "Articles",
    href: "/articles",
  },
  {
    id: 6,
    name: "Say Hi",
    href: "/contact",
  },
];
const Mobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex justify-between mx-auto  p-4 relative border-b  border-gray-900 shadow-2xs lg:hidden">
      <div className="uppercase">Blessing.</div>
      <nav onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <IoMdClose className="text-3xl" /> : <LuMenu className="text-3xl" />}
      </nav>
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } absolute bg-[#121212] h-screen w-full text-center space-y-8 mt-8 uppercase cursor-pointer active:text-gray-500 py-4 shadow-2xl inset-x-0 text-xl`}
      >
        {navbarItems?.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </header>
  );
};

export default Mobile;
