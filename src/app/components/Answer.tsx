import React from "react";

type Props = {
  setanswer: React.Dispatch<React.SetStateAction<boolean>>;
  des: string;
  list: string[] | undefined;
};

const Answers = ({ des, list, setanswer }: Props) => {
  return (
    <div className=" flex flex-col md:max-w-96 bg-green-100 p-3 rounded-lg   ">
      <button
        onClick={(ev) => {
          ev.stopPropagation();
          setanswer(false);
        }}
        className="p-1 bg-green-900 text-white "
      >
        close
      </button>
      <section className="flex gap-5 items-center flex-col ">
        <p className="mt-4 text-sm  font-bold text-slate-500  m-0 ">{des}</p>
      </section>
      <div>
        {list &&
          list.map((item, i) => {
            return (
              <li key={i} className="text-sm  font-bold text-slate-500">
                {item}
              </li>
            );
          })}
      </div>
    </div>
  );
};

export default Answers;
