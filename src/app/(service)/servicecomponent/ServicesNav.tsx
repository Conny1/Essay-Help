"use client";
import ContactForm from "@/app/components/GetContacts";
import Link from "next/link";
import React, { useState } from "react";

const ServicesNav = ({ title }: { title: string }) => {
  const [modal, setmodal] = useState(false);

  return (
    <nav className=" relative bg-gray-900 w-full h-32 flex items-center justify-center flex-wrap gap-5">
      <Link
        className=" sm:absolute   left-0 text-white text-sm p-3 rounded transition  hover:bg-slate-700  hover:-translate-y-1 "
        href="/#services"
      >
        ExamAidHub
      </Link>
      <h1 className=" absolute top-0 sm:relative  text-white text-3xl font-semibold uppercase ">
        {title}
      </h1>
      <button
        onClick={() => setmodal(true)}
        className=" sm:absolute  right-4 text-white outline outline-1 outline-green-300 sm:w-fit p-2 rounded-lg hover:translate-y-1 transition  "
      >
        Get Started
      </button>
      {modal && <ContactForm setmodal={setmodal} />}
    </nav>
  );
};

export default ServicesNav;
