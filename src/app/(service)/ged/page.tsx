import Footer from "@/app/components/Footer";
import React from "react";
import ServicesNav from "../servicecomponent/ServicesNav";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "GED EXAMS",
  description:
    "  If you need help with the GED, we are the online experts to take exams for you. You'll need to score at least 145 points to pass. Passing the GED can help you get into college, earn college credits, and even get a better job.",
};

const Ged = () => {
  return (
    <main className=" mx-auto flex flex-col items-center  ">
      <ServicesNav title="GED EXAMS" />

      <div className="mt-8 max-w-3xl w-full p-3">
        <section className="mb-8">
          <p className="text-lg leading-relaxed">
            We take your online GED exam test. We’ll help you every step of the
            way.
          </p>

          <p className="text-lg leading-relaxed">
            The GED, or General Educational Development, started back in 1942
            when many folks in the U.S. left high school to join the military
            during World War II. When these soldiers came back home, they found
            it tough to get jobs without a high school diploma. So, the GED was
            created to help them out. It's still around today.
          </p>

          <p className="text-lg leading-relaxed">
            But the GED of 1942 isn't the same as the one we have now in 2015.
            Over time, the test has changed to match what's being taught in
            schools today. The last big change happened in 2014 when they
            started using computers for the test and added stuff from the Common
            Core State Standards. Why did they change it? Well, colleges and
            bosses want people who know the latest stuff, like how to use
            computers and understand what they read.
          </p>
        </section>

        <section className="mb-8">
          <p className="text-lg leading-relaxed">
            If you're thinking about taking the GED, get ready for four
            different parts:
          </p>
          <ul className="list-disc ml-8">
            <li>Math</li>
            <li>Language Arts</li>
            <li>Science and social studies</li>
          </ul>
        </section>

        <section className="mb-8">
          <p className="text-lg leading-relaxed">
            It takes almost a whole day to finish all of it, about seven and a
            half hours! Some questions are easy, like multiple-choice, but
            others need more thinking, like writing short answers. It's a good
            idea to get ready ahead of time so you know what kinds of questions
            to expect.
          </p>

          <p className="text-lg leading-relaxed">
            Getting ready for the GED is a big deal. There are lots of different
            things you need to know since it covers many subjects. It might feel
            like a lot to memorize, but there are ways to make it easier.
          </p>
          <p className="text-lg leading-relaxed">
            Using a calculator can also help. You'll need to learn how to use it
            right. There are different kinds of calculators you can pick from.
            Some even let you save notes and formulas, which is handy. You can
            also get a copy of a math formula sheet for the GED. It has lots of
            the equations you'll need to solve.
          </p>

          <p className="text-lg leading-relaxed">
            The GED has different sections, each with its own questions and
            topics. The Language Arts part is about reading and writing, while
            Math focuses on solving problems. Science and Social Studies cover
            different areas too, like biology and history.
          </p>
          <p className="text-lg leading-relaxed">
            The GED is tough, but it's possible to pass. Many people have done
            it before. But it's a big test that covers what students usually
            learn in four years of high school. Doing well means studying the
            new stuff and remembering what you learned before.
          </p>

          <p className="text-lg leading-relaxed">
            To take the GED online, you need a computer with internet and a
            quiet place to take the test. You also need a government ID and to
            pass a practice test before you can take the real thing.
          </p>

          <p className="text-lg leading-relaxed">
            If you need help with the GED, we are the online experts to take
            exams for you. You'll need to score at least 145 points to pass.
            Passing the GED can help you get into college, earn college credits,
            and even get a better job.
          </p>
        </section>
      </div>
      <section
        id="footer"
        className=" w-full bg-[url('../../public/images/footer.jpg')] bg-center bg-cover"
      >
        <footer className="w-full  text-white bg-gray-900 bg-opacity-70 ">
          <Footer />
        </footer>
        <div className="bg-black bg-opacity-100 w-full h-40  flex items-center p-3 justify-center  ">
          <div className=" w-full max-w-5xl">
            <p className="max-w-2xl text-slate-400  ">
              ©2024 For any queries, feel free to reach out to us at
              papersmasters@gmail.com. We're here to help!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Ged;
