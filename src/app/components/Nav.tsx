import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="flex h-28 w-full items-center justify-between max-w-7xl  ">
      <div>
        <h1 className="text-white">Essay Help</h1>
      </div>

      <section className="flex-1 flex justify-between max-w-sm  ">
        <Link
          className="text-white text-sm p-3 rounded transition  hover:bg-slate-700  hover:-translate-y-1 "
          href="#services"
        >
          Services
        </Link>

        <Link
          className="text-white  text-sm p-3 rounded transition  hover:bg-slate-700  hover:-translate-y-1  "
          href="#faq"
        >
          FAQ
        </Link>

        <Link
          className="text-white text-sm p-3 rounded transition  hover:bg-slate-700  hover:-translate-y-1 "
          href="#contact"
        >
          Contuct Us
        </Link>

        <Link
          className="text-white text-sm p-3 rounded transition    hover:-translate-y-1 outline outline-1 outline-white w-fit   "
          href="/"
        >
          Get Quote
        </Link>
      </section>
    </nav>
  );
};

export default Nav;
