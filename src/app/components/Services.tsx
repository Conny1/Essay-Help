import React from "react";
import Svg from "./Svg";

type Props = {
  name: string;
  des: string;
  svg: string;
};

const Services = ({ name, des, svg }: Props) => {
  return (
    <div className=" ">
      <section className="flex gap-5 items-center ">
        <Svg svg={svg} />
        <h2 className="text-sm uppercase font-semibold "> {name}</h2>
      </section>
      <p className="mt-4 text-sm text-slate-500 ">{des}</p>
    </div>
  );
};

export default Services;
