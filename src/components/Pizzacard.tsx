import Image from "next/image";
import Link from "next/link";
import React from "react";

const Pizzacard = () => {
  return (
    <div className="w-[95vw] mx-auto md:w-[30%] flex flex-col justify-center items-center gap-2 bg-gray-200 p-3 my-2 rounded-lg shadow-lg hover:scale-105    transition-all delay-100 ease-in-out cursor-pointer ">
      <div className="img w-[70%] h-64 relative   ">
        <Image
          src="/img/pizza2.avif"
          alt="pizza"
          className="rounded-full"
          fill
        />
      </div>
      <h1 className="h1 text-[#d2411e] font-semibold text-lg ">Pizza title</h1>
      <p className="font-bold  text-gray-800 ">&#8377; 370 </p>
      <p className="desc text-md text-gray-600 ">This is margertia pizza</p>
    </div>
  );
};

export default Pizzacard;
