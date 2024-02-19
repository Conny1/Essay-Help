import React from "react";
import Nav from "./Nav";
import Link from "next/link";

const Header = () => {
  return (
    <div className="outline outline-1 w-full p-3 flex items-center flex-col ">
      <Nav />
      <section className="flex justify-between w-full max-w-5xl  customheight ">
        <div className="   md:w-1/2 flex flex-col justify-between ">
          <h1 className=" text-4xl sm:text-5xl font-semibold   ">
            Unlock Academic Success with ExamAidHub
          </h1>
          <p>
            Let our professional tutors handle your online classes, coursework,
            exams, quizzes, and assignments.
          </p>
          <Link
            href="#services"
            className=" text-center  outline outline-1 outline-green-300 sm:w-fit p-3 rounded-lg  hover:translate-y-1 transition "
          >
            Get Started
          </Link>
          <p className="text-xs">Get a quote in 60 seconds!</p>
        </div>
        <div className=" hidden sm:block  md:w-1/2    "></div>
      </section>
    </div>
  );
};

export default Header;
