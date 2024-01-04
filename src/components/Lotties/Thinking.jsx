import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Lottie from "lottie-react";
import ThinkingAnim from "./Thinking.json";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Gift from "./Gift";

const Thinking = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      className=" h-full w-[90%] bg-white flex items-center justify-between mx-auto border-2 rounded-3xl border-cyan-300 overflow-hidden"
    >
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
          <p
            onClick={openModal}
            className="text-green-500 font-bold hover:bg-green-500/30  hover:px-5 cursor-pointer py-3 rounded-3xl w-fit transition-all duration-500"
          >
            Get in touch with us
          </p>
        </div>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10 font-nunito"
            onClose={closeModal}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-black "
                    >
                      Under developement!
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-black/80">
                        Functionality not available for now! will be available
                        soon!
                      </p>
                    </div>
                    <div className="h-40 w-full flex justify-start">
                      <Gift />
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Got it, thanks!
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </motion.div>
    </motion.div>
  );
};

export default Thinking;
