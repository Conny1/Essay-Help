import Footer from "@/app/components/Footer";

import React from "react";
import ServicesNav from "../servicecomponent/ServicesNav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sophia learning",
  description:
    " Experience unparalleled academic assistance tailored to your individual needs. We take pride in delivering exceptional solutions  that surpass your expectations. Our team comprises top-notch  professionals who are not only highly qualified but also possess    extensive experience in education and subject matter expertise. With a deep understanding of their fields, they are the ideal choice for  your academic needs. Our commitment is to provide exceptional assistance and unwavering support to help you achieve your goals.",
};

const Sophia = () => {
  return (
    <main className=" mx-auto flex flex-col items-center  ">
      <ServicesNav title="SOPHIA LEARNING" />

      <div className="mt-8 max-w-3xl w-full p-3 ">
        <section className="mb-8">
          <p className="text-lg leading-relaxed font-semibold">
            Outstanding Support from Qualified Online Exam Experts
          </p>
          <br />

          <p className="text-lg leading-relaxed">
            Experience unparalleled academic assistance tailored to your
            individual needs. We take pride in delivering exceptional solutions
            that surpass your expectations. Our team comprises top-notch
            professionals who are not only highly qualified but also possess
            extensive experience in education and subject matter expertise. With
            a deep understanding of their fields, they are the ideal choice for
            your academic needs. Our commitment is to provide exceptional
            assistance and unwavering support to help you achieve your goals.
          </p>
        </section>

        <p className="text-lg leading-relaxed font-semibold">
          Explore the Ultimate Flexibility and Convenience of Our Online Courses
        </p>
        <br />

        <section className="mb-8">
          <p className="text-lg leading-relaxed">
            Benefit from learning at your own pace and from the comfort of your
            home. Enhance your results with our team of expert professionals who
            will complete your online courses for you. Struggling with
            coursework and seeking to improve your grades? Look no further, as
            we are here to provide the assistance you need.
          </p>
          <br />

          <p className="text-lg leading-relaxed font-semibold">
            Trust in Our Seasoned Experts
          </p>
          <br />

          <p className="text-lg leading-relaxed">
            Our team of seasoned experts possesses a wealth of knowledge in the
            academic requirements and standards of various educational
            institutions. Receive personalized assistance and support to
            overcome any challenges and complete your degree with ease.
          </p>
          <br />

          <p className="text-lg leading-relaxed font-semibold">
            Experienced Writers at Your Service
          </p>
          <br />
          <p className="text-lg leading-relaxed">
            We value experienced writers in our industry who can deliver quality
            content for all submissions.
          </p>

          <br />
          <p className="text-lg leading-relaxed font-semibold">
            Our Trusted Refund Policy{" "}
          </p>
          <br />
          <p className="text-lg leading-relaxed">
            Our refund policy is designed to build trust, although it has never
            been invoked in our history.{" "}
          </p>

          <br />
          <p className="text-lg leading-relaxed font-semibold">
            We Offer Exactly What You Need
          </p>
          <br />
          <p className="text-lg leading-relaxed">
            Explore the flexibility of our online course help option A and
            online exam help option B. Plus, we stand behind our services with a
            satisfaction guarantee or your money back.{" "}
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

export default Sophia;
