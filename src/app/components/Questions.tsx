import React, { useState } from "react";
import Answers from "./Answer";

type Props = {
  quiz: string;
  des: string;
  list: string[] | undefined;
};

const Questions = ({ des, quiz, list }: Props) => {
  const [answer, setanswer] = useState(false);
  return (
    <div
      onClick={() => setanswer(true)}
      className="  max-w-96  p-3 rounded-lg w-1/2 outline outline-2 outline-lime-900 cursor-pointer hover:bg-green-100 hover:translate-y-1 transition "
    >
      <section>
        <p className=" mt-4 font-bold ">{quiz}</p>
      </section>
      {answer && <Answers des={des} list={list} setanswer={setanswer} />}
    </div>
  );
};

export default Questions;
