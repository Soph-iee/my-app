import Link from "next/link";
import SectionHeader from "../components/SectionHeader";
import Button from "../components/Button";

const SocialLinks = [
  {
    id: 1,
    name: "Github,",
    href: "/",
  },

  {
    id: 2,
    name: "LinkedIn,",
    href: "/",
  },
  {
    id: 3,
    name: "Medium,",
    href: "/",
  },
  {
    id: 4,
    name: "Twitter",
    href: "/",
  },
];

const Contact = () => {
  return (
    <section className="w-10/12 mx-auto ">
      <header>
        <SectionHeader text="get in touch" />
        <p className="font-medium text-2xl lg:text-5xl mb-12 ">
          I love to hear from you. Whether you have a question or want to
          collaborate, <span className="font-bold">shoot me a message.</span>
        </p>
      </header>
      <main className="space-y-5 lg:flex gap-16 items-center ">
        <div>
          <p className="uppercase tracking-wider lg:text-2xl"> reach me at</p>
          <Link href="/" className="text-gray-700 lg:text-xl">
            iyanuopeyemii@gmail.com
          </Link>
        </div>
        <div>
          <p className="uppercase tracking-wider lg:text-2xl">social</p>
          {SocialLinks?.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-gray-700 mr-1 text-lg lg:text-xl"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <Button text="say hello" />
      </main>
    </section>
  );
};

export default Contact;
