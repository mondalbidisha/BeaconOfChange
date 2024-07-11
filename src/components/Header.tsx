"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaEarthAmericas } from "react-icons/fa6";
import Link from "next/link";
import { usePathname, useRouter } from 'next/navigation'

function Header() {
  const menus = [
    {
      tabkey: 0,
      name: "Home",
      url: "/"
    },
    {
      tabkey: 1,
      name: "Learn",
      url: "/learn"
    },
    {
      tabkey: 2,
      name: "Campaign",
      url: "/campaign"
    },
    {
      tabkey: 3,
      name: "Shop",
      url: "/shop"
    },
    {
      tabkey: 4,
      name: "Blog",
      url: "/blog"
    },
    {
      tabkey: 5,
      name: "Join",
      url: "https://eco-verse-nine.vercel.app",
      newTab: true
    },
  ];

  const firstTab: any = menus.filter((menu: any) => menu.tabkey == 0)[0]; 
  const [active, setActive] = React.useState(0);
  const router = useRouter();
  const pathname = usePathname();

  const tabActivation = (menu: any) => {
    if(menu.newTab) {
      return;
    }
    setActive(menu.tabkey);
    router.push(menu.url)
  }

  const setActiveTab = () => {
    if(pathname) {
      const getCurrentTab = menus.filter((menu: any) => menu.url === pathname)[0];
      setActive(getCurrentTab.tabkey)
    } else {
      setActive(firstTab.tabkey)
      router.push(firstTab.url)
    }
  }

  useEffect(() => {
    setActiveTab()
  }, [active])

  return (
    <div className="absolute text-white mt-5 flex w-full flex-wrap items-center justify-between gap-2 px-5 text-xs font-medium uppercase opacity-90 md:px-10">
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
              onClick={() => tabActivation(menu)}
              className={` ${
                active == menu.tabkey && "border-b-2 border-b-yellow-500"
              } inline-block cursor-pointer border-b-yellow-500 transition duration-300 ease-in-out hover:border-b-2 hover:text-white`}
            >
              {
                menu.newTab
                ?
                  <Link href={menu.url} target="_blank">{menu.name}</Link>
                :
                  <>{menu.name}</>
              }
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}

export default Header;