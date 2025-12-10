import Image from "next/image";
import rating from "../../public/images/rating.png";
import landingpage from "../../public/images/landingpage.png";
import ecommerce from "../../public/images/ecommerce.png";
import agecalculator from "../../public/images/agecalculator.png";
import musicplayer from "../../public/images/musicplayer.png";
import accordion from "../../public/images/accordion.png";
import bookmark from "../../public/images/bookmark.png";
import Segsalerty from "../../public/images/segsalerty.png";
import ExpenseTracka from "../../public/images/xpesnetracka.png";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";
import SectionHeader from "../components/SectionHeader";

const myProjects = [
  {
    name: "Expense Tracker",
    image: ExpenseTracka,
    url: "https://xpensetrackaa.netlify.app/",
    id: 14,
    responsive: true,
  },
  {
    name: "Segsalerty",
    image: Segsalerty,
    url: "https://segsalertylanding.netlify.app",
    id: 11,
    responsive: true,
  },
  {
    name: "Bookmark Landing",
    image: bookmark,
    url: "https://bookmark-landinng.netlify.app/",
    id: 7,
    responsive: false,
    mobile: true,
  },

  {
    name: "Accordion",
    image: accordion,
    url: "https://accordion-fmc.netlify.app/",
    id: 6,
    responsive: true,
  },
  {
    name: "Music Player",
    image: musicplayer,
    url: "https://soph-iee.github.io/Virtual-Music-Playlist/",
    id: 5,
    responsive: true,
  },
  {
    name: "Rating Component",
    image: rating,
    url: "https://soph-iee.github.io/-interactive-rating-component/",
    id: 1,
    responsive: true,
  },
  {
    name: "Landing page",
    image: landingpage,
    url: "https://soph-iee.github.io/INTRO-SECTION-WITH-DROPDOWN-MENU/",
    id: 2,
    responsive: false,
  },
  {
    name: "E-commerce",
    image: ecommerce,
    url: "https://soph-iee.github.io/ecommerce-product-page/",
    id: 3,
    responsive: false,
  },
  {
    name: "Age Calculator",
    image: agecalculator,
    url: "https://soph-iee.github.io/age-calculator-app/",
    id: 4,
    responsive: false,
  },
];

const Projects = () => {
  return (
    <main className="mx-auto w-10/12">
      <SectionHeader text="recent works" />
      <p className=" font-medium text-2xl mb-12 lg:text-4xl lg:mt-12 ">
        Here are some of my favourite projects I have worked on and built
        recently. Feel free to check them out.
      </p>
      <section className=" space-y-4 lg:grid grid-cols-2 gap-x-16 gap-y-8 ">
        {myProjects?.map((project) => (
          <Link key={project.id} href={project.url}>
            <div className=" flex border-t border-gray-800 p-4 rounded-xl gap-4 relative">
              <Image
                src={project.image}
                className="bg-amber-200 aspect-square"
                alt="placeholder"
                height={100}
                width={100}
              />
              <div>
                <p className="text-gray-800">Blessing Opeyemi</p>
                <p className="capitalize font-bold hover:text-gray-500 cursor-pointer  ">
                  {project.name}
                </p>
              </div>
              <span className="absolute top-2 right-2">
                <LuArrowUpRight className="text-xl" />
              </span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
};

export default Projects;
