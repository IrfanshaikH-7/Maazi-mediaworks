import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, RectangleGroupIcon } from "@heroicons/react/20/solid";
import { ThemeStore } from "../ThemeStore";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ThemeSelector = () => {
  const setTheme = ThemeStore((state) => state.setTheme);

  return (
    <Menu
      as="div"
      className="relative inline-block outline-none outline-offset-0 ring-0 ring-offset-0 focus:outline-0 focus:outline-offset-0 focus:ring-0 focus:ring-offset-0 text-left"
    >
      <div>
        <Menu.Button className="flex w-full justify-center gap-x-1.5 rounded-3xl bg-cyan-400 hover:bg-cyan-500  group px-6 p-[11px] transition duration-300 shadow-sm outline-none outline-offset-0 ring-0 ring-offset-0 focus:outline-0 focus:outline-offset-0 focus:ring-0 focus:ring-offset-0 ">
          <RectangleGroupIcon
            className="-mr-1 h-5 w-5 text-white transition duration-500"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2  origin-top-right rounded-3xl bg-cyan-400 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="p-4 flex flex-col items-center gap-1.5">
            <Menu.Item>
              <div
                onClick={() => {
                  setTheme({
                    backgroundImage: "nnnoise",
                    bgColor: "blue",
                    primary: "blue-100",
                    secondary: "blue-300",
                    tertiary: "blue-600",
                    forthery: "blue-800",
                  });
                }}
                className="text-neutral-700  cursor-pointer"
              >
                <p className="px-3 py-0.5 text-xs rounded-lg border hover:border-cyan-400  text-white hover:text-neutral-600 hover:bg-white transition">
                  1
                </p>
              </div>
            </Menu.Item>
            <Menu.Item>
              <div
                onClick={() => {
                  setTheme({
                    backgroundImage: "ooorganize",
                    bgColor: "blue",
                    primary: "blue-100",
                    secondary: "blue-300",
                    tertiary: "blue-600",
                    forthery: "blue-800",
                  });
                }}
                className="text-neutral-700 cursor-pointer"
              >
                <p className="px-3 py-0.5 text-xs rounded-lg border hover:border-cyan-400  text-white hover:text-neutral-600 hover:bg-white transition">
                  2
                </p>
              </div>
            </Menu.Item>
            <Menu.Item>
              <div
                onClick={() => {
                  setTheme({
                    backgroundImage: "bbburst",
                    bgColor: "green",
                    primary: "rose-100",
                    secondary: "rose-300",
                    tertiary: "rose-600",
                    forthery: "rose-800",
                  });
                }}
                className="text-neutral-700 cursor-pointer"
              >
                <p className="px-3 py-0.5 text-xs rounded-lg border hover:border-cyan-400  text-white hover:text-neutral-600 hover:bg-white transition">
                  3
                </p>
              </div>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
export default ThemeSelector;
