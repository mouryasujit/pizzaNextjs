import Image from "next/image";
// import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className=" bg-gray-900 text-white w-[100vw]  h-max md:h-[70vh] ">
      <div className="main-footer max-w-7xl mx-auto px-3  flex flex-col  md:flex-row gap-4 md:h-full md:justify-between ">
        <div className=" h-[40vh] w-[100%] md:w-[40%] md:h-full  relative  ">
          <Image src="/img/bg.png" fill alt="" />
        </div>
        <div className="  md:flex h-full md:w-[60%] md:justify-center gap-4 md:my-5  ">
          <div className=" my-3 md:w-1/3 ">
            <h2 className="text-center md:text-start  text-2xl font-bold  ">
              OH YES, WE DID.THE GREAT PIZZA, WELL BAKED SLICE OF PIZZA.
            </h2>
          </div>
          <div className=" text-center  md:text-start md:w-1/3 flex flex-col gap-4 ">
            <h1 className=" text-[#d2411e] font-semibold text-xl flex-flex-col gap-5 ">
              FIND OUR RESTAURANTS
            </h1>
            <p className=" ">
              1654 R. Don Road #304.
              <br /> NewYork, 85022
              <br /> (602) 867-1010
            </p>
            <p className=" ">
              2356 K. Laquie Rd #235.
              <br /> NewYork, 85022
              <br /> (602) 867-1011
            </p>
            <p className="">
              1614 E. Erwin St #104.
              <br /> NewYork, 85022
              <br /> (602) 867-1012
            </p>
            <p className="">
              1614 W. Caroll St #125.
              <br /> NewYork, 85022
              <br /> (602) 867-1013
            </p>
          </div>
          <div className="md:w-1/3 text-center md:text-start flex flex-col gap-4 my-4 ">
            <h1 className=" text-[#d2411e] font-semibold text-xl flex-flex-col gap-3 ">WORKING HOURS</h1>
            <p className="">
              MONDAY UNTIL FRIDAY
              <br /> 9:00 – 22:00
            </p>
            <p className="">
              SATURDAY - SUNDAY
              <br /> 12:00 – 24:00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
