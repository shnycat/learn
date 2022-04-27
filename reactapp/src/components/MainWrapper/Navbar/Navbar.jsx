import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaLinux } from "react-icons/fa";

const Navbar = () => {
  const Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Blog", link: "/blog" },
    { name: "Login", link: "/login" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <nav className="items-center md:flex bg-gradient-to-r from-green-300 to-blue-400">
      <div className="flex flex-col md:flex-row">
        <div className="flex justify-between items-center px-4 text-3xl border-b md:border-b-0">
          <div className="py-3">
            <Link to="/">
              <FaLinux />
            </Link>
          </div>
          <div
            className="text-white block md:hidden"
            onClick={() => setOpen(!open)}
          >
            <FaBars />
          </div>
        </div>
      </div>
      <div
        className={`transition-all ease-in duration-500 md:transition-none ${
          "" /*
          open ? "block" : "hidden md:block"*/
        } flex flex-col md:flex-row ${open ? "top-20" : "top-[-490px]"}`}
      >
        {Links.map((m) => {
          return (
            <Link to={m.link} className="py-2 px-3">
              {m.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
