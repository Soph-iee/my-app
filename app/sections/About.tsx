import Image from "next/image";
import profileImage from "../../public/images/picture_profile.jpg";
import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <section>
      <div className="lg:flex space-y-8 w-10/12 mx-auto my-12 lg:my-24 items-stretch">
        <Image
          src={profileImage}
          alt="placeholder"
          height={100}
          width={400}
          className="lg:relative w-1/2"
        />
        <div className="lg:w-[500px] lg:absolute  inset-x-11/23 ">
          <div className=" text-xl lg:text-3xl">
            <p className=" border border-gray-500 rounded-xl p-4  text-xl bg-[#00000096] lg:text-3xl lg:p-8 tracking-wide leading-relaxed ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
              nostrum quaerat laboriosam, at similique ut reprehenderit
              doloribus, velit consequuntur eius labore ratione voluptatum
              eveniet. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Odit, ipsa, rem numquam consectetur maxime? Lorem, ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ut id facilis architecto maxime distinctio sint, et molestias commodi at ratione ea, recusandae modi.
            </p>
          </div>
          <Link
            href="/"
            className="bg-gray-800 w-full p-2  block text-center rounded-sm  text-amber-200 uppercase lg:mt-6 lg:w-9/12 lg:mx-auto"
          >
            Download CV
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
