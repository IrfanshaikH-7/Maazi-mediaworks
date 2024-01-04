import React from "react";
import Lottie from "lottie-react";
import ThinkingAnim from "./Thinking.json";
import { motion } from "framer-motion";
import { fadeIn, childrens } from "../../variants";

const Thinking = () => {
  return (
    <div className=" h-full w-[90%] bg-white flex items-center justify-between mx-auto border-2 rounded-3xl border-cyan-300 overflow-hidden">
      <Lottie
        animationData={ThinkingAnim}
        loop={true}
        className="w-[600px] min-w-[540px]"
      />
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        // viewport={{ once: false, amount: 0.7 }}
        className="font-nunito text-black"
      >
        <p className="  font-semibold text-3xl px-20">
          You thinking about how to level up your business?
          <br />
          <span className=" font-normal">
            Look no further than Maazi Mediaworks, the creative agency that has
            it all.
          </span>
        </p>
        <div className="font-nunito mt-2 px-20">
          <span className="text-sm ">let's dive into bussiness than</span>
          <p className="text-green-500 font-bold hover:bg-green-500/30  p-2 rounded-3xl w-fit">
            Get in touch with us
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Thinking;
