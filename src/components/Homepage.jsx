import React from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Thinking from "./Lotties/Thinking";

// import {ThemeStore} from '../store'
const Homepage = () => {
  // const setTheme = ThemeStore((state) => state.setTheme)

  return (
    <section className="h-full">
      <div className="h-screen w-full flex justify-center items-center  -mt-20">
        <div className="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-600 from-20% via-transparent via-50% to-transparent h-full flex flex-col justify-center w-2/3 ">
          <div className="flex gap-14 ml-12 items-center justify-start">
            <h1 className="text-7xl uppercase font-nunito font-bold text-neutral-800 ">
              MAAZI
            </h1>
            <div className="h-[2px] w-48 bg-neutral-800  rounded-full" />
            <p className="font-nunito font-semibold text-neutral-800">
              Helping you create a{" "}
              <span className="text-green-500">powerful</span> <br />
              brand identity.
            </p>
          </div>
          <h2 className="text-5xl ml-36 mt-4  font-nunito font-bold text-neutral-800">
            Mediaworks
          </h2>
        </div>
        {/* <ChevronDownIcon className="h-12 w-12 absolute bottom-16 left-1/2 -translate-x-[50%] text-neutral-700" /> */}
      </div>
      <div className="h-full w-full">
        <div className="h-28 w-full bg-transparent"></div>
        <Thinking />
        <div className="h-24 w-full"></div>
      </div>
    </section>
  );
};

export default Homepage;
