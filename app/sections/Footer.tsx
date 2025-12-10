import { LuArrowUp, LuArrowUpRight } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="w-10/12 mx-auto my-16 border-t border-gray-900 flex justify-between pt-5">
      <ul className=" lg:flex gap-2">
        <li> &copy; Copyright</li>
        <li>2025</li>
      </ul>
      <button className="border p-2">
        <LuArrowUp className="text-xl" />
      </button>
    </footer>
  );
};

export default Footer;
