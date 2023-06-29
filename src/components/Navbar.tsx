"use client";
import Image from "next/image";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

const Navbar = () => {
  const [open, setopen] = useState(false);
  return (
    <div className="bg-[#d2411e] p-2 h-28 flex items-center sticky top-0 cursor-pointer z-50 ">
      <div className="container flex items-center justify-between max-w-7xl mx-auto ">
        <div className="hamberger relative text-white text-2xl md:hidden   ">
          <div className="menu  " onClick={() => setopen(!open)}>
            <MenuIcon fontSize="large" />
          </div>
          {open && (
            <ul className="flex items-center justify-around text-white font-semibold absolute top-14 left-0   flex-col bg-[#d2411e]   w-[100vw]  mx-auto transition-all delay-100 ease-in-out ">
              <div className="logog">
                <h2 className=" font-semi text-4xl text-white font-mono ">
                  Pizzerita
                </h2>
              </div>
              <Link href="/">
                <li className="my-2 text-md">Homepage</li>
              </Link>
              <Link href="/">
                <li className="my-2 text-md">Products</li>
              </Link>
              <Link href="/">
                <li className="my-2 text-md">Menu</li>
              </Link>
              <Link href="/">
                <li className="my-2 text-md">Cart</li>
              </Link>
              <Link href="/order">
                <li className="my-2 text-md">Orders Tracking</li>
              </Link>
              <Link href="/">
                <li className="my-2 text-md">Contact</li>
              </Link>
            </ul>
          )}
        </div>
        <div className="left flex items-center space-x-3 md:flex-shrink ">
          <div className="img w-10 h-10 relative bg-white  rounded-3xl ">
            <Image src="/img/telephone.png" alt="telephone" fill />
          </div>
          <div className="info">
            <h3 className="font-bold text-white  ">Order Now!</h3>
            <span className="text-white">+91 33433433</span>
          </div>
        </div>
        <div className="center hidden md:block md:w-[75%]  ">
          <ul className="flex items-center justify-around text-white font-semibold ">
            <Link href="/">
              <li className="my-2 text-xl">Homepage</li>
            </Link>
            <Link href="/">
              <li className="my-2 text-xl">Products</li>
            </Link>
            <Link href="/">
              <li className="my-2 text-xl">Menu</li>
            </Link>
            <div className="logog">
              <h2 className=" font-semi text-5xl text-white font-mono ">
                Pizzerita
              </h2>
            </div>
            <Link href="/">
              <li className="my-2 text-xl">Cart</li>
            </Link>
            <Link href="/order">
              <li className="my-2 text-xl">Orders Tracking</li>
            </Link>
            <Link href="/">
              <li className="my-2 text-xl">Contact</li>
            </Link>
          </ul>
        </div>

        <div className="right  ">
          <div className="cart h-12 w-12 p-2  relative flex    ">
            <Image src="/img/cart.png" alt="cart" fill className="absolute  " />
            <div className="number w-5 h-5 text-sm p-2 bg-black text-white font-semibold rounded-full flex justify-center items-center absolute top-0  right-0  ">
              2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
