import Link from "next/link";

const Button = ({ text }: { text: string }) => {
  return (
    <Link
      href="/"
      className="bg-gray-800 w-full p-2 lg:p-3 block text-center rounded-sm  text-amber-200 uppercase mx-auto lg:text-xl lg:font-medium"
    >
      {text}
    </Link>
  );
};

export default Button;
