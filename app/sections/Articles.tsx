import React from "react";
import profileImage from "../../public/vercel.svg";
import Image from "next/image";

const myProjects = [
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

const Articles = () => {
  return (
    <section className="mx-auto my-12">
      <header className="w-11/12 mx-auto">
        <p className=" font-medium text-2xl mb-12 ">
          Here are some of my written articles about
          <span className="font-bold mx-2">
            frontend developement, mobile development, flutter, web
            technologies, and enginnering best practices.
          </span>
          Feel free to check them out.
        </p>
      </header>

      <main className="flex gap-8 overflow-x-auto py-3 mx-8 custom-scrollbar">
        {myProjects?.map((project) => (
          <div
            key={project.id}
            className="min-w-[300px] flex-1 flex  flex-col border border-gray-800 p-4 rounded-xl gap-4 bg-gray-950 "
          >
            <Image
              src={profileImage}
              className="bg-amber-200 w-full cursor-pointer"
              alt="placeholder"
              height={70}
              width={70}
            />
            <div>
              <p className="text-gray-800">{project.name}</p>
              <p className="capitalize font-bold hover:text-gray-500 cursor-pointer  ">
                {project.name}
              </p>
            </div>
            <span className="text-sm">Learn more</span>
          </div>
        ))}
      </main>
    </section>
  );
};

export default Articles;
