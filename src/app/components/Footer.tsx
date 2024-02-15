import React from "react";
import Nav from "./Nav";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" w-full p-3 flex items-center flex-col ">
      <section className="flex flex-col justify-between items-center w-full max-w-5xl h-80  ">
        <div className=" flex flex-col justify-between  gap-5 items-center text-center">
          <h1 className=" text-2xl md:text-3xl font-semibold   ">
            Ready to Unlock Academic Success?
          </h1>
          <p className=" text-slate-300 ">Get started with Essay Help today.</p>
          <Link
            href="#services"
            className=" w-full  outline outline-1 outline-green-300 sm:w-fit p-3 rounded-lg hover:translate-y-1 transition "
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Footer;
