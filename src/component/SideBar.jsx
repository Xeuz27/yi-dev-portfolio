import React, { useContext, useState } from "react";
import { navLinksEnglish, navLinksSpanish } from "../constants";
import { ConfigContext } from "../context/configContext";
import { motion } from "framer-motion";
import { AiOutlineMenu } from "react-icons/ai";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const { state } = useContext(ConfigContext);
  const { dispatch } = useContext(ConfigContext);
  const colorstate = state.color;

  return (
    <>
      <div
        id="sidebar-btn"
        className={`z-20 text-white w-12 h-12 bg-zinc-700 absolute top-4 left-4 p-[6px] md:hidden cursor-pointer
      ${open && "open"}`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <button className="bg-transparent flex flex-col justify-center items-center gap-[0.45rem] w-full h-full">
          <div className="bg-white h-[4px] w-[100%] rounded-md transition-all origin-right"></div>
          <div className="bg-white h-[4px] w-[100%] rounded-md transition-all origin-right"></div>
          <div className="bg-white h-[4px] w-[100%] rounded-md transition-all origin-right"></div>
        </button>
      </div>
      <motion.aside
        className={`w-[0] md:w-[270px] bg-primary  min-h-screen fixed left-0 top-0 bottom-0 border-r border-r-softWhite transition-all ease-in duration-300 p-[30px]
        ${open ? "z-10 w-full" : "z-0 w-0 max-md:opacity-0"}
        `}
      >
        <div className="py-8 text-center">
          <a className="text-white font-rubik font-bold text-[46px] italic">
            Yi-Dev
          </a>
        </div>

        <ul className="mb-[20px]">
          {state.language === "english" && (
            <>
              {navLinksEnglish.map((item, index) => (
                <motion.li
                  className={`flex items-center gap-[5px] font-poppins font-semibold cursor-pointer text-[24px] md:text-[20px] text-white border-b border-b-softWhite hover:translate-x-1 leading-[55px] text-${colorstate}`}
                  key={index}
                  onClick={() => {
                    setOpen(false);
                    dispatch({ type: "page", page: item.title });
                  }}
                >
                  {item.icon}
                  {item.title}
                </motion.li>
              ))}
            </>
          )}
          {state.language === "spanish" && (
            <>
              {navLinksSpanish.map((item, index) => (
                <motion.li
                  className={`flex items-center gap-[5px] font-poppins font-semibold cursor-pointer text-[24px] md:text-[20px] text-white border-b border-b-softWhite hover:translate-x-1 leading-[55px] text-${colorstate}`}
                  key={index}
                  onClick={() => {
                    setOpen(false);
                    dispatch({ type: "page", page: item.title });
                  }}
                >
                  {item.icon}
                  {item.title}
                </motion.li>
              ))}
            </>
          )}
        </ul>
        <a
          className="text-sm text-white font-medium font-poppins"
          href="https://devfolio.alsiam.com/"
          target="_blank"
        >
          inspired by Alsiam Devfolio
        </a>
        <p className="text-lg md:text-sm text-white font-medium font-poppins absolute bottom-0 left-[30px] mb-8 pr-[30px]">
          &copy; 2023 All Rights Reserved By Jesus Gutierrez
        </p>
      </motion.aside>
    </>
  );
};

export default Sidebar;
