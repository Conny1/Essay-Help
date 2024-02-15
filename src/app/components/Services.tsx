import React from "react";
import Svg from "./Svg";
import { GrLinkNext } from "react-icons/gr";
import Link from "next/link";

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
        <Link href="/service">
          <GrLinkNext />
        </Link>
      </section>
      <p className="mt-4 text-sm text-slate-500 ">{des}</p>
    </div>
  );
};

export default Services;
