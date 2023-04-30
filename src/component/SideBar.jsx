import React, { useContext, useState } from "react";
import { navLinksEnglish, navLinksSpanish } from "../constants";
import { ConfigContext } from "../context/configContext";
import { motion } from "framer-motion";
import {AiOutlineMenu} from 'react-icons/ai'

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const { state } = useContext(ConfigContext);
  const { dispatch } = useContext(ConfigContext);
  const colorstate = state.color;

  return (
    <>
      <div id="sidebar-btn" className={`z-20 text-white w-12 h-12 bg-zinc-700 absolute top-4 left-4 p-[6px] md:hidden cursor-pointer
      ${open ? '':'' }`}
      onClick={() => setOpen((prev) => !prev)}
      >
            <button
             className="bg-transparent flex flex-col justify-center items-center gap-[0.45rem] w-full h-full">
              <div className="bg-white h-[4px] w-[100%] rounded-md transition-all origin-right"></div>
              <div className="bg-white h-[4px] w-[100%] rounded-md transition-all origin-right"></div>
              <div className="bg-white h-[4px] w-[100%] rounded-md transition-all origin-right"></div>
            </button>
      </div>
      <motion.aside
        className={`w-[0] md:w-[270px] bg-primary  min-h-screen fixed left-0 top-0 bottom-0 border-r border-r-softWhite transition-all ease-in duration-300 p-[30px]
        ${open ? 'z-10 w-full' : 'z-0 w-0 max-sm:opacity-0'}
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
                  className={`flex items-center gap-[5px] font-poppins font-semibold cursor-pointer text-[16px] text-white border-b border-b-softWhite hover:translate-x-1 leading-[45px] text-${colorstate}`}
                  key={index}
                >
                  {item.icon}
                  <a
                    onClick={() => {
                      setOpen(false)
                      dispatch({ type: "page", page: item.title });
                    }}
                  >
                    {item.title}
                  </a>
                </motion.li>
              ))}
            </>
          )}
          {state.language === "spanish" && (
            <>
              {navLinksSpanish.map((item, index) => (
                <motion.li
                  className={`flex items-center gap-[5px] font-poppins font-semibold cursor-pointer text-[16px] text-white border-b border-b-softWhite hover:translate-x-1 leading-[45px] text-${colorstate}
                `}
                  key={index}
                >
                  {item.icon}
                  <a
                    onClick={() => {
                      setOpen(false)
                      dispatch({ type: "page", page: item.title });
                    }}
                  >
                    {item.title}
                  </a>
                </motion.li>
              ))}
            </>
          )}
        </ul>
        <p className="text-sm text-white font-medium font-poppins absolute bottom-0 mb-8 px-3">
          &copy; 2023 All Rights Reserved By Jesus Gutierrez
        </p>
      </motion.aside>
    </>
  );
};

export default Sidebar;
