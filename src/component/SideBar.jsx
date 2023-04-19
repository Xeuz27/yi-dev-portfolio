import React, { useContext } from "react";
import { navLinksEnglish, navLinksSpanish } from "../constants";
import { ConfigContext } from "../context/configContext";
import { motion } from "framer-motion";

const Sidebar = () => {
  const { state } = useContext(ConfigContext);
  const { dispatch } = useContext(ConfigContext);
  const colorstate = state.color

  return (
    <motion.aside className={`w-[270px] bg-primary  min-h-screen fixed left-0 top-0 bottom-0 border-r border-r-softWhite transition-all ease-in duration-300 p-[30px]`}>
      <div className="py-8 text-center">
        <a className="text-white font-rubik font-bold text-[46px] italic">Yi-Dev</a>
      </div>
      
        <ul className="mb-[20px]">
          {state.language === "english" && (
            <>
              {navLinksEnglish.map((item, index) => (
                <motion.li
                  className={`flex items-center gap-[5px] font-poppins font-semibold cursor-pointer text-[16px] text-white border-b border-b-softWhite hover:translate-x-1 leading-[45px] text-${colorstate}` 
                }
                  key={index}
                >
                  {item.icon}
                  <a onClick={() => {dispatch({ type: "page", page: item.title })} }>{item.title}</a>
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
                  <a onClick={() => {dispatch({ type: "page", page: item.title })} }>{item.title}</a>
                  
                </motion.li>
              ))}
            </>
          )}
        </ul>
        <p className="text-sm text-white font-medium font-poppins absolute bottom-0 mb-8">
          &copy; 2023 All Rights Reserved By Jesus Gutierrez
        </p>
   
    </motion.aside>
  );
};

export default Sidebar;
