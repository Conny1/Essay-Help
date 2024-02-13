import React from "react";
import Nav from "./Nav";
import Link from "next/link";

const Header = () => {
  return (
    <div className="outline outline-1 w-full p-3 flex items-center flex-col ">
      <Nav />
      <section className="flex justify-between w-full max-w-5xl  customheight ">
        <div className="w-2/5 flex flex-col justify-between ">
          <h1 className=" text-5xl font-semibold   ">
            Unlock Academic Success with Essay Help
          </h1>
          <p>
            Let our professional tutors handle your online classes, coursework,
            exams, quizzes, and assignments.
          </p>
          <Link
            href="#services"
            className="outline outline-1 outline-green-300 w-fit p-3 rounded-lg "
          >
            Get Started
          </Link>
          <p className="text-xs">Get a quote in 60 seconds!</p>
        </div>
        <div className="w-1/2  "></div>
      </section>
    </div>
  );
};

export default Header;
