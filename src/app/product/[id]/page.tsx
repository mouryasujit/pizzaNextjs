"use client";
import Image from "next/image";
import React, { useState } from "react";

const page = () => {
  const [size, setsize] = useState(0);
  const arr = [250, 300, 450];
  return (
    <div>
      <div className="main-products max-w-7xl mx-auto h-fit md:h-[75vh] flex flex-wrap justify-center items-center gap-5 ">
        <div className="img my-3 w-[90vw] h-[40vh] md:w-[30vw] md:h-[60vh] relative  border-4 border-red-500 rounded-full p-4 ">
          <Image
            src="/img/pizzza3.png"
            alt="pizza"
            fill
            className="rounded-full"
          />
        </div>
        <div className="content flex-1 flex flex-col gap-4 my-4 px-2">
          <h1 className="text-[#d2411e] font-bold text-3xl "> Margerita </h1>
          <p className="price text-xl font-semibold ">
            {" "}
            Price:{arr[size]} &#8377;
          </p>
          <p className="desc text-gray-500 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequatur velit adipisci cupiditate deserunt recusandae voluptatum
            molestias. Iure mollitia minus quisquam quas consequatur eaque fuga
            molestias fugit laborum saepe adipisci consequuntur, unde,
            perspiciatis.
          </p>
          <h1 className=" w-[70%] text-[#d2411e] font-bold text-xl  ">
            Which size do you want?
          </h1>
          <div className="sizes flex justify-evenly w-full md:w-[70%] items-center gap-3 ">
            <div
              className="small w-12 h-12 relative  "
              onClick={() => setsize(0)}
            >
              <Image src="/img/size.png" alt="pizza" fill className="m-1" />
              <p className="small bg-blue-900 text-white text-xs rounded-2xl flex   justify-center  p-1 absolute left-7  top-0 ">
                Small
              </p>
            </div>
            <div
              className="large w-16 h-16 relative"
              onClick={() => setsize(1)}
            >
              <Image src="/img/size.png" alt="pizza" fill className="m-1" />
              <p className="small  bg-blue-900 text-white text-xs rounded-2xl flex   justify-center  p-1 absolute left-10  top-0 ">
                Medium
              </p>
            </div>
            <div
              className="small w-20 h-20 relative"
              onClick={() => setsize(2)}
            >
              <Image src="/img/size.png" alt="pizza" fill className="m-1" />
              <p className="small  bg-blue-900 text-white text-sm rounded-2xl flex   justify-center  p-1 absolute left-14  top-0 ">
                Large
              </p>
            </div>
          </div>
          <div className="additional my-2 flex flex-col gap-4 ">
            <h2 className=" w-full md:w-[70%] text-[#d2411e] font-bold text-xl">
              Choose Additional Ingredients
            </h2>
            <div className="inputs flex items-center gap-4 ">
              <div className="div1 flex items-center gap-1">
                <input type="checkbox" name="double" id="double" size={20} />
                <label htmlFor="double" className="font-bold">
                  Double Ingredients
                </label>
              </div>
              <div className="div2 flex items-center  gap-1">
                <input type="checkbox" name="cheese" id="cheese" />
                <label htmlFor="cheese" className="font-bold">
                  Double Cheese
                </label>
              </div>
              <div className="div3 flex items-center  gap-1">
                <input type="checkbox" name="sauce" id="sauce" />
                <label htmlFor="sauce" className="font-bold">
                  Spicy Sauce
                </label>
              </div>
              <div className="div4 flex items-center  gap-1">
                <input type="checkbox" name="garlic" id="garlic" />
                <label htmlFor="garlic" className="font-bold">
                  Garlic Sauce
                </label>
              </div>
            </div>
          </div>
          <div className="cart w-full md:w-[30%] flex h-7 gap-5 items-center ">
            <input
              type="number"
              name="number"
              id="number"
              defaultValue={1}
              min={1}
              className="w-[10%] md:w-[20%] h-7  p-2 border-2 border-[#d2411e] "
            />
            <button className=" bg-[#d2411e] rounded-md p-2 flex items-center justify-center text-white h-10  ">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
