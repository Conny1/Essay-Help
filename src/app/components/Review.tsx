import React from "react";
import Svg from "./Svg";

type Props = {
  des: string;
};

const Review = ({ des }: Props) => {
  return (
    <div className=" flex flex-col max-w-96 bg-green-100 p-3 rounded-lg  ">
      <span className="text-5xl text-green-900  font-serif h-4">"</span>
      <section className="flex gap-5 items-center flex-col ">
        <p className="mt-4 text-sm  font-bold text-slate-500  m-0 ">{des}</p>
      </section>
      <span className="self-end text-5xl  text-green-900  font-serif h-4 ">
        "
      </span>
    </div>
  );
};

export default Review;
