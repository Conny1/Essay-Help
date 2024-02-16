export const sevicesOfered = [
  {
    name: "ged exams",
    des: "Expert assistance for your GED exams.",
    svg: "ged",
    link: "ged",
  },
  {
    name: "hiset exams",
    des: "Professional help for your HiSET exam.",
    svg: "hiset",
    link: "hiset",
  },
  {
    name: "study.com",
    des: "Guidance for your Study.com courses.",
    svg: "study",
    link: "study",
  },
  {
    name: "STRAIGHTERLINE",
    des: "Support for your Straighterline courses.",
    svg: "line",
    link: "line",
  },
  {
    name: " SOPHIA LEARNING",
    des: "Help for your Sophia Learning courses.",
    svg: "sophia",
    link: "sophia",
  },
];

export const reviews = [
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

export const faq: faqTypes[] = [
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
