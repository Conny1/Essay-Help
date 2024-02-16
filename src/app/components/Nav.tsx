import Link from "next/link";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { MdCancel } from "react-icons/md";

const Nav = () => {
  const [resnav, setresnav] = useState(false);
  return (
    <nav className="flex h-28 w-full items-center justify-between max-w-7xl  ">
      <div>
        <h1 className="text-white">ExamAidHub</h1>
      </div>

      <section className=" hidden flex-1  md:flex justify-between max-w-sm    ">
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
        {/* <Link
          className="text-white text-sm p-3 rounded transition  hover:bg-slate-700  hover:-translate-y-1 "
          href="#contact"
        >
          Contact Us
        </Link> */}

        <Link
          className="text-white text-sm p-3 rounded transition    hover:-translate-y-1 outline outline-1 outline-white w-fit   "
          href="#services"
        >
          Get Quote
        </Link>
      </section>

      <span className=" text-2xl  bg-slate-200 p-2 rounded-full text-slate-950 md:hidden ">
        <IoMenu onClick={() => setresnav(true)} />
      </span>
      {/* responsive menu */}
      {resnav && (
        <section className=" bg-black absolute top-4 left-0 flex-1 flex  flex-col justify-between items-center w-full md:hidden   h-40  ">
          <span className="absolute right-0 text-3xl p-2 ">
            <MdCancel onClick={() => setresnav(false)} />
          </span>

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
          {/* <Link
          className="text-white text-sm p-3 rounded transition  hover:bg-slate-700  hover:-translate-y-1 "
          href="#contact"
        >
          Contact Us
        </Link> */}

          <Link
            className="text-white text-sm p-3 rounded transition    hover:-translate-y-1 outline outline-1 outline-white w-fit   "
            href="#services"
          >
            Get Quote
          </Link>
        </section>
      )}
    </nav>
  );
};

export default Nav;
