import React, { useState, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-scroll";

function NavBar() {
  const [nav, setNav] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  const changeNav = () => {
    if (window.scrollY >= 950) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <div className="fixed w-full flex justify-between p-4 items-center z-10">
      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className={`${
          scrollNav ? "text-black" : "text-white"
        } font-bold text-2xl z-20 cursor-pointer`}
      >
        Experiences
      </Link>
      <HiMenuAlt3
        size={25}
        className={`${
          scrollNav ? "text-black" : "text-white"
        } font-bold text-2xl z-20 cursor-pointer`}
        onClick={handleClick}
      />
      <div
        className={
          nav
            ? "ease-in duration-300 fixed text-gray-300 top-0 left-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10"
        }
      >
        <ul className="flex flex-col fixed w-full h-full items-center justify-center">
          <li className="font-bold text-3xl p-8 cursor-pointer">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={handleClick}
            >
              Home
            </Link>
          </li>
          <li className="font-bold text-3xl p-8 cursor-pointer">
            <Link
              activeClass="active"
              to="events"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={handleClick}
            >
              Events
            </Link>
          </li>
          <li className="font-bold text-3xl p-8 cursor-pointer">
            <Link
              activeClass="active"
              to="plans"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={handleClick}
            >
              Plans
            </Link>
          </li>
          <li className="font-bold text-3xl p-8 cursor-pointer">
            <Link
              activeClass="active"
              to="rooms"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={handleClick}
            >
              Rooms
            </Link>
          </li>
          <li className="font-bold text-3xl p-8 cursor-pointer">
            <Link
              activeClass="active"
              to="food"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={handleClick}
            >
              Food
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
