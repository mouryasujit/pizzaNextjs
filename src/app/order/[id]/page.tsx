"use client";
import Image from "next/image";
import React from "react";

const page = () => {
  const status: number = 0;
  const statusclass = (index: number) => {
    if (index - status < 1) return "one";
    else if (index - status == 1) return "two";
    else {
      return "three";
    }
  };

  return (
    <div className="max-w-7xl md:mx-auto flex md:flex-row flex-col my-4  ">
      <div className="maonorder w-[100vw] md:flex[2]  md:flex-col   ">
        <table className="w-[70%] mx-auto border-2 border-[#d2411e] ">
          <thead className="text-center border-2 border-[#d2411e] ">
            <tr>
              <th className="border-2 border-[#d2411e] ">Order Id</th>
              <th className="border-2 border-[#d2411e] "> Customer</th>
              <th className="border-2 border-[#d2411e] ">Address</th>
              <th className="border-2 border-[#d2411e] ">Total</th>
            </tr>
          </thead>
          <tbody className="text-center border-2 border-[#d2411e] ">
            <tr className="border-2 border-[#d2411e] ">
              <td className="border-2 border-[#d2411e] ">12345678</td>
              <td className="border-2 border-[#d2411e] "> Mukesh</td>
              <td className="border-2 border-[#d2411e] ">123 street mumbai</td>
              <td className="border-2 border-[#d2411e] "> &#8377; 250 </td>
            </tr>
          </tbody>
        </table>
        <div className="images mx-auto w-[100vw] md:w-[70%] flex items-center flex-col md:flex-row gap-6 my-4 md:justify-between">
          <div className="payment flex flex-col items-center gap-1">
            <div
              className={
                statusclass(0) === "one"
                  ? "patimg w-20 h-20 relative"
                  : "patimg w-20 h-20 relative opacity-30 "
              }
            >
              <Image src="/img/paid.png" alt="" fill />
            </div>
            <p className="text-[#d2411e] font-bold ">Paid</p>
            <div
              className={
                statusclass(0) === "one" ? "check w-10 h-10 relative" : "hidden"
              }
            >
              <Image src="/img/checked.png" alt="" fill />
            </div>
          </div>
          <div className="payment flex flex-col items-center gap-3">
            <div
              className={
                statusclass(1) === "two"
                  ? "patimg w-20 h-20 relative animate-pulse opacity-25 "
                  : "patimg w-20 h-20 relative opacity-30 "
              }
            >
              <Image src="/img/bake.png" alt="" fill />
            </div>
            <p className="text-[#d2411e] font-bold ">Preparing</p>
            <div
              className={
                statusclass(1) === "one"
                  ? "check w-10 h-10 relative "
                  : "hidden"
              }
            >
              <Image src="/img/checked.png" alt="" fill />
            </div>
          </div>
          <div className="payment flex flex-col items-center gap-3">
            <div
              className={
                statusclass(2) === "one"
                  ? "patimg w-20 h-20 relative"
                  : "patimg w-20 h-20 relative opacity-30 "
              }
            >
              <Image src="/img/bike.png" alt="" fill />
            </div>
            <p className="text-[#d2411e] font-bold ">On my Way</p>
            <div
              className={
                statusclass(2) === "one" ? "check w-10 h-10 relative" : "hidden"
              }
            >
              <Image src="/img/checked.png" alt="" fill />
            </div>
          </div>
          <div className="payment flex flex-col items-center gap-3">
            <div
              className={
                statusclass(2) === "one"
                  ? "patimg w-20 h-20 relative"
                  : "patimg w-20 h-20 relative opacity-30 "
              }
            >
              <Image src="/img/delivered.png" alt="" fill />
            </div>
            <p className="text-[#d2411e] font-bold ">Delivered</p>
            <div
              className={
                statusclass(2) === "one" ? "check w-10 h-10 relative" : "hidden"
              }
            >
              <Image src="/img/checked.png" alt="" fill />
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex-1 md:mx-auto relative  ">
        <div className="my-3 bg-gray-600 p-3 gap-4 md:h-[30vh] md:w-[20vw] md:p-3 flex flex-col text-white md:sticky md:top-20 md:right-0  ">
          <h2 className="font-bold text-xl text-white">CART TOTAL</h2>
          <div>
            <b>Subtotal:</b> &#8377;79.60
          </div>
          <div>
            <b>Discount:</b> &#8377;0.00
          </div>
          <div>
            <b>Total:</b> &#8377;79.60
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded text-[#d2411e] ">
            CHECKOUT NOW!
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
