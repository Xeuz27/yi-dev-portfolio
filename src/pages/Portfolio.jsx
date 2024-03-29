import React, { useContext } from "react";
import { ConfigContext } from "../context/configContext";
import { layout } from "../style";
import { portfolio, proyectos } from "../constants";
const Portfolio = () => {
  const { state } = useContext(ConfigContext);
  const colorstate = state.color;

  return (
    <>
      {(state.page === "Portfolio" || state.page === "Proyectos") && (
        <>
          <div
            className={`${layout.section} py-12 overflow-y-scroll text-white`}
          >
            <div className="container max-w-[1080px] m-auto">
              <div className="flex flex-wrap xs:pl-4 sm:pl-8 md:pl-0 lg:pl-8">
                <div className="text-inherit font-rubik font-semibold text-5xl my-8 ">
                  <h2>
                    {state.language === "english" ? "Portfolio" : "Proyectos"}
                  </h2>
                  <div
                    id="before-after"
                    className={`relative bg-${colorstate}`}
                  ></div>
                </div>
              </div>

              <div>
                <ul className="w-full flex flex-wrap gap-5 gap-y-10 justify-center px-6">
                  {state.language === "english" ? (
                    <>
                      {portfolio.map((item) => (
                        <li
                          key={`${item.name}`}
                          className="responsive-li-portfolio overflow-hidden"
                        >
                          <a
                            className="sm:h-[580px] block"
                            target="_blank"
                            rel="noopener"
                            href={`${item.link}`}
                          >
                            <img
                              className="block w-full h-48 object-cover"
                              src={`${item.image}`}
                            />
                            <div className="bg-zinc-800 rounded-b-lg p-5">
                              <h5 className="font-poppins font-semibold text-2xl mb-4">
                                {item.name}
                              </h5>
                              <p className="text-lg font-medium leading-7">
                                {item.description}
                              </p>
                            </div>
                          </a>
                        </li>
                      ))}
                    </>
                  ) : (
                    <>
                      {proyectos.map((item) => (
                        <li
                          key={`${item.name}`}
                          className="responsive-li-portfolio overflow-hidden"
                        >
                          <a
                            className="sm:h-[580px] block"
                            target="_blank"
                            rel="noopener"
                            href={`${item.link}`}
                          >
                            <img
                              className="block w-full h-48 object-cover"
                              src={`${item.image}`}
                            />
                            <div className="bg-zinc-800 h-full rounded-b-lg p-5">
                              <h5 className="font-poppins font-semibold text-2xl mb-4">
                                {item.name}
                              </h5>
                              <p className="text-lg font-medium leading-7">
                                {item.description}
                              </p>
                            </div>
                          </a>
                        </li>
                      ))}
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Portfolio;
