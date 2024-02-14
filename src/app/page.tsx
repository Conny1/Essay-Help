"use client";
import Header from "./components/Header";
import Questions from "./components/Questions";
import Review from "./components/Review";
import Services from "./components/Services";

const sevicesOfered = [
  {
    name: "ged exams",
    des: "Expert assistance for your GED exams.",
    svg: "ged",
  },
  {
    name: "hiset exams",
    des: "Professional help for your HiSET exam.",
    svg: "hiset",
  },
  {
    name: "study.com",
    des: "Guidance for your Study.com courses.",
    svg: "study",
  },
  {
    name: "STRAIGHTERLINE",
    des: "Support for your Straighterline courses.",
    svg: "line",
  },
  {
    name: " SOPHIA LEARNING",
    des: "Help for your Sophia Learning courses.",
    svg: "sophia",
  },
];

const reviews = [
  {
    des: " I stumbled upon this website while searching for an online GED Exam helper, and it was a gem! The personalized attention I received helped me pass all the exams.",
  },
  {
    des: " As someone with a busy schedule, finding time to study for my online class was challenging. Thankfully, this website offered flexible help that allowed me to balance my other commitments.",
  },
  {
    des: "The platform is user-friendly, the instructors are knowledgeable, and the course content is comprehensive. I highly recommend it to anyone looking to further their education online.",
  },
  {
    des: "Kudos to this website for their exceptional support in helping me navigate my online classes. The team was responsive, professional, and genuinely invested in my success. With their guidance, I was able to overcome challenges and excel in my coursework. I highly recommend their services to anyone in need of assistance with online learning. ",
  },
  {
    des: "The assistance provided was tailored to my specific needs, and the tutors went above and beyond to ensure my success. Their expertise and dedication were evident throughout the process, and I'm grateful for their invaluable support.",
  },
];

type faqTypes = {
  quiz: string;
  des: string;
  list: string[] | undefined;
};

const faq: faqTypes[] = [
  {
    list: undefined,
    quiz: "How does this actually work? / What’s the process?",
    des: "Upon registration, we'll assess your course, input key deadlines into our project management system, and allocate it to a skilled expert. Subsequently, you'll receive a welcoming email from your dedicated account manager managing your course.",
  },
  {
    list: undefined,
    quiz: "I have a test that’s due tonight! Can you help me out?",
    des: "Absolutely! Typically, we prefer a minimum of 24 hours' notice to effectively schedule assignments. However, if you have a task due tonight, don't hesitate to give us a call, and we'll do our best to accommodate your deadline.",
  },
  {
    quiz: "How is pricing determined?",
    des: "The pricing for each course is determined individually, considering various factors including:",
    list: [
      "Subject and difficulty level",
      "Duration of the course",
      "Volume of work required (including exams, quizzes, homework assignments, etc.)",
      "Participation in discussion boards",
      "Our availability to take on additional work on your preferred day",
    ],
  },
  {
    list: undefined,
    quiz: "Will the school know I’m logged in from a different IP address?",
    des: "In our extensive experience handling thousands of courses, IP address concerns have never arisen. However, logging in from a different country may raise flags, which is precisely why we exclusively employ tutors residing and operating within the United States",
  },
];

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
        <div className="w-full flex justify-around mt-16 min-h-96 flex-wrap  ">
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

      <h3 className="text-2xl font-semibold mt-16">FAQ</h3>
      <section className=" mt-8 mb-16 w-full max-w-5xl flex flex-col items-center justify-around gap-3 p-3">
        {faq.map((item, i) => {
          return <Questions key={i} {...item} />;
        })}
      </section>
    </main>
  );
}
