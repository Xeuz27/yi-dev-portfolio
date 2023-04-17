import React, { useContext } from "react";
import { ConfigContext } from "../context/configContext";
import { layout } from "../style";
import { motion } from "framer-motion";
import { aboutMe, aboutMeEnglish, aboutMeSpanish, skills } from "../constants";
import { IconComponent } from "../component";


const Aboutme = () => {
  const { state } = useContext(ConfigContext);
  return (
    <>
      {(state.page === "About Me" || state.page === "Sobre mi") && (
        <>
          <div
            className={` ${layout.section} py-12 overflow-y-scroll text-white`}
          >
            <motion.div className="container max-w-7xl m-auto">
              <motion.div className="flex flex-wrap">
                <div className="text-inherit font-rubik font-semibold text-4xl my-8 pl-4">
                  {state.language === "english" ? (
                    <>
                      <h2>About me</h2>
                    </>
                  ) : (
                    <>
                      <h2>Sobre mi</h2>
                    </>
                  )}
                </div>
              </motion.div>
              <motion.div className="flex flex-wrap px-4 md:px-8">
                <h3 className="text-2xl font-medium mb-7">
                  {state.language === "english" ? (
                    <>
                      I'm {aboutMe.name} a <span>Web Developer</span>
                    </>
                  ) : (
                    <>
                      Soy {aboutMe.name} un <span>Desarrollador Web</span>
                    </>
                  )}
                </h3>
                <p className="text-inherit font-poppins text-base leading-7">
                  {state.language === "english" && aboutMe.description}
                  {state.language === "spanish" && aboutMe.descripcion}
                </p>
                <motion.div className="w-full flex flex-col-reverse md:flex-row mx-auto pt-9 px-4">
                  <div className="w-full md:max-w-[60%] sm:px-2 py-8">
                    <ul className="w-full flex flex-col sm:flex-row flex-wrap gap-3 ">
                      {state.language === "english" && (
                        <>
                          {aboutMeEnglish.map((item) => (
                            <li
                              className="responsive-li flex flex-col md:items-center w-full sm:min-w-[186px] sm:w-52 sm:max-w-fit sm:flex-row sm:mx-auto gap-x-1 border-b-[1px] border-b-softWhite "
                              key={item.id}
                            >
                              <p>
                                {item.title} : <span>{item.content} </span>
                              </p>
                            </li>
                          ))}
                        </>
                      )}
                      {state.language === "spanish" && (
                        <>
                          {aboutMeSpanish.map((item) => (
                            <li
                              className="flex flex-col md:items-center w-full sm:min-w-[186px] sm:w-56 sm:max-w-fit sm:flex-row sm:mx-auto gap-x-1 border-b-[1px] border-b-softWhite "
                              key={item.id}
                            >
                              <p>
                                {item.title} : <span>{item.content} </span>
                              </p>
                            </li>
                          ))}
                        </>
                      )}
                    </ul>
                  </div>
                   <div className="w-full md:max-w-[40%] px-4">
                    <ul className="w-full gap-3 grid-responsive">
                      {skills.map( (item) => (
                        <li key={item.name} className="text-center flex flex-col items-center justify-center">
                           <IconComponent>{item.icon}</IconComponent> 
                           <p>{item.name}</p>
                           </li>
                      ) )}
                    </ul>
                  </div>
                  
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </>
      )}
    </>
  );
};

export default Aboutme;