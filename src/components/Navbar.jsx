import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeSelector from "./ThemeSelector";

const Navbar = ({ position }) => {
  const location = useLocation();

  const [scrollPos, setScrollPos] = useState(0);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isMenuActive, setActive] = useState(false);
  const [navbarStyle, setNavbarStyle] = useState({
    opacity: 1,
    transform: "translateY(0)",
    transition: "opacity 0.3s ease-out, transform 0.3s ease-out",
  });

  const navLinks = [
    {
      title: "Home",
      path: "/home",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "contact",
      path: "/contant",
    },
  ];

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    setScrollPos(currentScrollPos);

    // Check the scroll direction
    if (currentScrollPos > prevScrollPos && currentScrollPos > 50) {
      // Scrolling down, hide the navbar
      setNavbarStyle({
        opacity: 0,
        transform: "translateY(-100%)",
        transition: "opacity 0.3s ease-out, transform 0.3s ease-out",
      });
    } else {
      // Scrolling up or at the top, show the navbar
      setNavbarStyle({
        opacity: 1,
        transform: "translateY(0)",
        transition: "opacity 0.3s ease-out, transform 0.3s ease-out",
      });
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuActive, prevScrollPos]);

  useEffect(() => {
    document.body.className = isMenuActive ? "overflow-hidden" : "";
  }, [isMenuActive]);

  function handleClick() {
    if (localStorage.theme === "dark" || !("theme" in localStorage)) {
      //add class=dark in html element
      document.documentElement.classList.add("dark");
    } else {
      //remove class=dark in html element
      document.documentElement.classList.remove("dark");
    }

    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
    } else {
      localStorage.theme = "dark";
    }
  }
  return (
    <div
      className={`${
        position ? position : "sticky"
      } inset-x-0 top-0 z-50 pt-8  justify-center md:flex pointer-events-auto w-full m-auto`}
      style={{ ...navbarStyle }}
    >
      <div className="flex items-center gap-4 rounded-full bg-cyan-400 px-4 p-2">
        <div className="flex gap-4 items-center px-4">
          {navLinks.map((navLink, index) => (
            <Link
              to={navLink.path}
              key={index}
              className={`px-2 py-1 group text-white cursor-pointer text-sm uppercase font-semibold font-nunito rounded-md flex flex-col justify-center items-center transition duration-500 ${
                location.pathname === navLink.path
                  ? "bg-zinc-400 text-zinc-950"
                  : ""
              }hover:text-white `}
            >
              {navLink.title}
              <div className="h-[2px] rounded-xl  w-0 bg-white group-hover:w-full transition-all duration-500"></div>
            </Link>
          ))}
          {/* {renderAdminLink()} */}
        </div>
      </div>
      <div className=" absolute top-8 right-12">
        <ThemeSelector />
        <div
          onClick={handleClick}
          className="font-nunito mt-12 cursor-pointer font-bold"
        >
          MOON
        </div>
      </div>
    </div>
  );
};

export default Navbar;
