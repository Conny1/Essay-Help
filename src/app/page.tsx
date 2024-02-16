"use client";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Questions from "./components/Questions";
import Review from "./components/Review";
import Services from "./components/Services";
import { faq, sevicesOfered, reviews } from "./data";
export default function Home() {
  return (
    <main className=" min-h-screen flex flex-col  items-center  ">
      <section
        id="home"
        className=" w-full bg-[url('../../public/images/header.jpg')] bg-center bg-cover"
      >
        <div className="bg-gray-900 bg-opacity-70 ">
          <div className="  w-full flex items-center justify-center text-white  ">
            <Header />
          </div>
        </div>
      </section>

      <section
        id="services"
        className=" w-full max-w-5xl flex flex-col items-center p-3  "
      >
        <div className="mt-9  text-center ">
          <h1 className="text-2xl font-semibold ">Our Services</h1>
          <p className="mt-8 text-sm text-slate-500 ">
            {" "}
            Achieve academic excellence with our range of services.
          </p>
        </div>
        <div className="w-full flex justify-around mt-16 min-h-96 flex-wrap gap-9  ">
          {sevicesOfered.map((item, i) => {
            return <Services key={i} {...item} />;
          })}
        </div>
      </section>
      <h3 className="text-2xl font-semibold">Our Reviews</h3>
      <div className=" bg-black bg-opacity-90 p-3 mt-16 w-full flex items-center justify-center">
        <section className=" w-full max-w-5xl flex flex-wrap items-center justify-around gap-3 p-3">
          {reviews.map((item, i) => {
            return <Review key={i} {...item} />;
          })}
        </section>
      </div>

      <h3 id="faq" className="text-2xl font-semibold mt-16  ">
        FAQ
      </h3>
      <section className="  mt-8 mb-16 w-full max-w-5xl flex flex-col items-center justify-around gap-3 p-3">
        {faq.map((item, i) => {
          return <Questions key={i} {...item} />;
        })}
      </section>

      <section
        id="footer"
        className=" w-full bg-[url('../../public/images/footer.jpg')] bg-center bg-cover"
      >
        <footer className="w-full  text-white bg-gray-900 bg-opacity-70 ">
          <Footer />
        </footer>
        <div className="bg-black bg-opacity-100 w-full h-40  flex items-center p-3 justify-center  ">
          <div className=" w-full max-w-5xl">
            <p className="max-w-2xl text-slate-400">
              Reach Us:papersmasters@gmail.com
            </p>
            <p className="max-w-2xl text-slate-400  ">
              ©2024ExamAidHub For any queries, feel free to reach out to us at
              papersmasters@gmail.com. We're here to help!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
