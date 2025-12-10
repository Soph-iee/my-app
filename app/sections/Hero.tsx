import Link from "next/link";
import React from "react";

const SocialLinks = [
  {
    id: 1,
    name: "Github",
    href: "/",
  },

  {
    id: 2,
    name: "LinkedIn",
    href: "/",
  },
  {
    id: 3,
    name: "Medium",
    href: "/",
  },
  {
    id: 4,
    name: "Twitter",
    href: "/",
  },
  {
    id: 5,
    name: "Email",
    href: "/",
  },
];

const Hero = () => {
  return (
    <main className="w-10/12 mx-auto  lg:flex lg:justify-between">
      <section className="my-12">
        <span className="uppercase text-sm text-amber-200">__ Hello World</span>
        <h1 className="text-6xl tracking-wide  lg:text-8xl flex flex-col mt-4 whitespace-nowrap">
          I am Blessing.{" "}
          <span className="whitespace-break-spaces">Frontend Developer</span>
        </h1>
      </section>

      <section className="social_links lg:rotate-90  lg:mx-24">
        <ul className="flex gap-2 flex-wrap mb-24">
          {SocialLinks?.map((link) => (
            <Link key={link.id} href={link.href}>
              <li className="uppercase text-gray-800 hover:text-gray-500  lg:mr-4 transition-all duration-500 cursor-pointer">
                {link.name}
              </li>
            </Link>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Hero;
