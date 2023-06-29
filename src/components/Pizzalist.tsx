import React from "react";
import Pizzacard from "./Pizzacard";

const Pizzalist = () => {
  return (
    <div className="max-w-7xl p-2   mx-auto space-y-3">
      <h2 className="text-center font-bold text-3xl my-6 ">
        Best Pizza in town
      </h2>
      <p className="text-gray-600 text-lg ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        ipsa sit praesentium quis architecto inventore dolore ea officia,
        eveniet rem! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Inventore cum, mollitia quam cupiditate molestiae ipsa assumenda
        necessitatibus? Repellat, deleniti tempora?
      </p>
      <div className="pizzalist flex flex-wrap justify-between my-3 ">
        <Pizzacard />
        <Pizzacard />
        <Pizzacard />
        <Pizzacard />
        <Pizzacard />
        <Pizzacard />
      </div>
    </div>
  );
};

export default Pizzalist;
