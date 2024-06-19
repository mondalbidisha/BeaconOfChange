import React from "react";
import { motion } from "framer-motion";
import { FaEarthAmericas } from "react-icons/fa6";
import Link from "next/link";

function Header() {
  const [active, setActive] = React.useState(0);

  return (
    <div className="absolute mt-5 flex w-full flex-wrap items-center justify-between gap-2 px-5 text-xs font-medium uppercase opacity-90 md:px-10">
      <div className="flex items-center gap-2 font-medium text-2xl tracking-[4px]">
        <FaEarthAmericas className="text-4xl" />
        Beacon of Change
      </div>
      <ul className="flex flex-wrap items-center gap-3 text-base md:gap-10">
        {menus.map((menu, index) => {
          return (
            <motion.li
              layout
              key={index}
              className={` ${
                active == index && " border-b-2 border-b-yellow-500"
              } inline-block cursor-pointer  border-b-yellow-500 transition duration-300 ease-in-out hover:border-b-2 hover:text-white`}
            >
              <Link href={menu.url}>{menu.name}</Link>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}

export default Header;

const menus = [
  {
    name: "Home",
    url: "/"
  },
  {
    name: "Get Involved",
    url: "/get-involved"
  },
  {
    name: "Shop",
    url: "/shop"
  },
  {
    name: "Subscribe",
    url: "/subscribe"
  },
];