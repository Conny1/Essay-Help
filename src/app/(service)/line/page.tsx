import Footer from "@/app/components/Footer";
import React from "react";
import ServicesNav from "../servicecomponent/ServicesNav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "STRAIGHTERLINE",
  description:
    " At ExamAidHub.com, we guarantee that all content provided for your online exams is original, plagiarism-free, and tailored specifically to your requirements. With each submission, we provide a detailed plagiarism report to ensure transparency and demonstrate that your exam content is entirely authentic, created by our in-house experts specifically for your assignments and university exams.",
};

const Line = () => {
  return (
    <main className=" mx-auto flex flex-col items-center  ">
      <ServicesNav title="STRAIGHTERLINE" />

      <div className="mt-8 max-w-3xl w-full p-3 ">
        <section className="mb-8">
          <p className="text-lg leading-relaxed font-semibold">
            Instant Help for Online Examinations.
          </p>
          <br />

          <p className="text-lg leading-relaxed">
            ExamAidHub.com offers highly skilled professionals you can trust to
            handle your online assessments for you. We understand the importance
            of passing your exams to complete your course and graduate from
            university. Our experts are equipped with the knowledge and
            expertise to take your exams with originality, thorough research,
            and innovative approaches, ensuring that you meet your deadlines
            without any compromise on quality.
          </p>
        </section>

        <p className="text-lg leading-relaxed font-semibold">
          Will My Exam be Plagiarized if Your Expert Takes It?
        </p>
        <br />

        <section className="mb-8">
          <p className="text-lg leading-relaxed">
            At ExamAidHub.com, we guarantee that all content provided for your
            online exams is original, plagiarism-free, and tailored specifically
            to your requirements. With each submission, we provide a detailed
            plagiarism report to ensure transparency and demonstrate that your
            exam content is entirely authentic, created by our in-house experts
            specifically for your assignments and university exams.
          </p>
          <br />

          <p className="text-lg leading-relaxed font-semibold">
            I'm Willing to Pay Someone to Take My Online Exam for Me.
          </p>
          <br />

          <p className="text-lg leading-relaxed">
            ExamAidHub.com boasts some of the finest academic minds to assist
            you with your online exams. Our dedicated academic experts are
            committed to helping you achieve top scores in all your online
            university tests, whether in economics, engineering, marketing,
            construction, geography, linguistics, biology, psychology, or any
            other subject.
          </p>
          <br />

          <p className="text-lg leading-relaxed font-semibold">
            How Does the Process Work?
          </p>
          <p className="text-lg leading-relaxed">
            Our team consists of subject-matter experts who are well-qualified
            to help you improve your grades in online courses. Simply place an
            order, provide all the necessary details for your exam, choose your
            preferred payment plan and packages, and enjoy the benefits:
          </p>
          <ul className="list-disc ml-8">
            <li>Timely submissions with impeccable quality.</li>
            <li>
              24/7 availability to address any queries related to your order.
            </li>
            <li>Free unlimited revisions to ensure your satisfaction.</li>
            <li>Guaranteed grades with our refund policy.</li>
          </ul>
          <br />
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

export default Line;
