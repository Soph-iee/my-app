import React from "react";
import SectionHeader from "../components/SectionHeader";

const myExperience = [
  {
    role: "intern",
    organization: "Kodnerds",
    date: "september 2025 - october 2025",
    details:
      "lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos veniam reprehenderit odit fugiat ex quisquam repellendus amet, earum fugit aliquid possimus alias debitis eveniet.",
  },
  {
    role: "mentee",
    organization: "She Code Africa",
    date: "november 2025",
    details:
      "lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos veniam reprehenderit odit fugiat ex quisquam repellendus amet, earum fugit aliquid possimus alias debitis eveniet.",
  },
];
const Experience = () => {
  return (
    <section className="w-10/12 mx-auto py-12">
      <header>
        <SectionHeader text="experience" />
      </header>
      <main className=" space-y-8">
        {myExperience?.map((item, index) => (
          <div key={index}>
            <h4 className="text-2xl font-bold lg:text-3xl">{item.organization}</h4>
            <h5 className="text-xl  lg:text-2xl capitalize font-light">{item.role}</h5>
            <p className="text-sm lg:text-base  uppercase text-gray-800">{item.date}</p>
            <p className="text-lg">{item.details}</p>
          </div>
        ))}
      </main>
    </section>
  );
};

export default Experience;
