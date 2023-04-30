import React, { useContext } from "react";
import { ConfigContext } from "../context/configContext";
import { layout } from "../style";
import { motion } from "framer-motion";
import { aboutMe, aboutMeEnglish, aboutMeSpanish, skills } from "../constants";
import { IconComponent } from "../component";

const Aboutme = () => {
  const { state } = useContext(ConfigContext);
  const colorstate = state.color;
  return (
    <>
      {(state.page === "About Me" || state.page === "Sobre mi") && (
        <>
          <div
            className={` ${layout.section} py-12 overflow-y-scroll text-white`}
          >
            <motion.div className="container max-w-7xl m-auto">
              <motion.div className="flex flex-wrap">
                <div className="text-inherit font-rubik font-semibold text-5xl my-8 pl-4">
                  <h2>{state.language === 'english' ? 'About Me' : 'Sobre mi'}</h2>
                  <div
                    id="before-after"
                    className={`relative bg-${colorstate}`}
                  ></div>
                </div>
              </motion.div>
              <motion.div className="flex flex-wrap px-4 md:px-8">
                <h3 className="text-3xl font-medium mb-7">
                  {state.language === "english" ? (
                    <>
                      I'm {aboutMe.name} a{" "}
                      <span className={`span-${colorstate}`}>
                        Web Developer
                      </span>
                    </>
                  ) : (
                    <>
                      Soy {aboutMe.name} un{" "}
                      <span className={`span-${colorstate}`}>
                        Desarrollador Web
                      </span>
                    </>
                  )}
                </h3>
                <p className="text-inherit font-poppins text-base leading-8">
                  {state.language === "english" && aboutMe.description}
                  {state.language === "spanish" && aboutMe.descripcion}
                </p>
                <motion.div className="w-full flex flex-col-reverse md:flex-row mx-auto pt-10 px-4">
                  <div className="w-full md:max-w-[40%] sm:px-2 py-8 my-auto">
                    <ul className="w-full flex flex-col ss:flex-row flex-wrap gap-3 items-center ">
                      {state.language === "english" && (
                        <>
                          {aboutMeEnglish.map((item) => (
                            <li
                              className={`mx-auto border-b-${colorstate} responsive-li`}
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
                              className={`mx-auto border-b-[1px] border-b-${colorstate} responsive-li`}
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
                    <div className="flex justify-evenly mt-6 pt-3">
                      <button className={`text-primary px-4 py-2 rounded-3xl font-poppins text-base font-semibold bg-${colorstate}`}> {state.language === 'english' ? 'Hire Me' : 'contrátame' } </button>
                      <button className={`text-primary px-4 py-2 rounded-3xl font-poppins text-base font-semibold bg-${colorstate}`}> {state.language === 'english' ? 'See CV' : 'Ver CV'} </button>
                    </div>
                  </div>
                  <div className="w-full md:max-w-[60%] px-4">
                    <ul className="w-full flex flex-wrap justify-center gap-4 gap-y-8 pb-4">
                      {skills.map((item) => (
                        <li
                          key={item.name}
                          className="text-center flex flex-col items-center justify-center responsive-li-icons"
                        >
                          <IconComponent>{item.icon}</IconComponent>
                          <p>{item.name}</p>
                        </li>
                      ))}
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
