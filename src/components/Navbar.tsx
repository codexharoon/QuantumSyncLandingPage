import { useState } from "react";
import clsx from "clsx";

export default function Navbar() {
  const [isSideMenuOpen, setMenu] = useState(false);

  const navlinks = [
    {
      labe: "Services",
      link: "#",
    },
    {
      labe: "Industries",
      link: "#",
    },
    {
      labe: "Partnership",
      link: "#",
    },
    {
      labe: "Company",
      link: "#",
    },
    {
      labe: "Careers",
      link: "#",
    },
  ];

  return (
    <div className="flex w-full items-center justify-center relative">
      <nav className="w-full bg-white md:h-24 h-20 flex flex-row items-center justify-between 2xl:px-36 lg:px-20 px-8 top-0 z-50 relative">
        {/* logo */}

        <a href={"/"}>
          <img
            src="/logo.svg"
            alt="logo"
            height={100}
            width={100}
            className="w-14 h-full"
            style={{ color: "transparent" }}
          />
        </a>

        <div className="flex flex-row items-center gap-x-6">
          {/* search */}

          <div className="rounded-full bg-sky-100 items-center px-4 py-3 gap-x-2 w-40 hidden lg:hidden sm:flex">
            <img src="/search.svg" alt="search" />
            <input
              placeholder="Search"
              type="text"
              className="outline-none w-full bg-sky-100 text-sm text-blue placeholder:text-blue-500 placeholder:font-semibold"
            />
          </div>

          {/* Menu */}

          <div
            className="flex justify-end lg:hidden"
            onClick={() => setMenu(true)}
          >
            <img src="/menu.svg" alt="menu" className="h-6 w-auto" />
          </div>
        </div>

        <div className="hidden lg:flex flex-row items-center justify-center gap-x-6">
          {navlinks.map((d, i) => (
            <a key={i} href={d.link}>
              <div className="py-6 2xl:text-base text-sm flex flex-row items-center gap-x-2 text-black hover:text-blue-500">
                {d.labe}
                <img
                  src="/dropdown.svg"
                  alt="dropdown"
                  className="hidden lg:block"
                />
              </div>
            </a>
          ))}

          <div className="border-l-2 border-l-black h-8"></div>

          <div className="rounded-full bg-sky-100 items-center px-4 py-3 gap-x-2 w-40 hidden lg:flex">
            <img src="/search.svg" alt="search" />
            <input
              placeholder="Search"
              type="text"
              className="outline-none w-full text-sm bg-sky-100 text-blue placeholder:text-blue-500 placeholder:font-semibold"
            />
          </div>
        </div>

        {/* sidebar mobile menu */}
        <div
          className={clsx(
            "fixed top-0 min-h-screen left-0 w-full bg-white py-4 shadow z-50 transform transition-transform ease-in-out duration-300 -translate-x-full lg:hidden",
            isSideMenuOpen && "translate-x-0"
          )}
        >
          <div className="flex flex-col space-y-6 bg-white">
            <div
              className="flex justify-end pr-6"
              onClick={() => setMenu(false)}
            >
              <img
                src="/close.svg"
                alt="close"
                className="h-6 w-6 text-black"
              />
            </div>

            {navlinks.map((d, i) => (
              <div key={i} className="relative">
                <a className="flex items-center" href={d.link}>
                  <div className="px-3 py-1.5 text-xl ml-4 mr-2 ">{d.labe}</div>
                  <img src="/dropdown.svg" alt="dropdown" className="" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
