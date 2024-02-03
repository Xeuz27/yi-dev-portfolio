import React, { useContext } from "react";
import Sidebar from "../component/SideBar";
import { ConfigContext } from "../context/configContext";
import { AnimatePresence, motion } from "framer-motion";
import styles, { layout } from "../style";
import profilepicture from "../assets/profile-pic.png";
import { GrGithub, GrLinkedin } from "react-icons/gr";

const Home = () => {
  const { state } = useContext(ConfigContext);
  return (
    <>
      {(state.page === "Home" || state.page === "Inicio") && (
        <section className={layout.section}>
          <div className="container max-w-7xl m-auto py-16">
            <div className="w-40 h-40 mx-auto mb-5">
              <img
                className="transition-all ease-in border-2 border-softWhite hover:border-white rounded-full outline-1 outline outline-softWhite hover:outline-offset-4 hover:outline-white cursor-pointer"
                src={profilepicture}
                alt="profile picture"
              />
            </div>
            <h1 className="text-white font-poppins text-5xl text-center">
              Jesus Gutierrez
            </h1>
            <p className=" text-white  font-poppins text-2xl text-center">
              {state.language === "english"
                ? "FullStack Developer"
                : "Desarrollador FullStack"}
            </p>
            <p className=" text-gray-300/60  font-poppins text-lg text-center">
              #Javascript #Reactjs #Tailwindcss #NodejJS #Astro
            </p>
            <ul className="mt-5 flex justify-center gap-2 mx-auto text-center text-white">
              <li>
                <a href="https://github.com/Xeuz27" target="_blank">
                  <GrGithub size={42} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/yi-dev/" target="_blank">
                  <GrLinkedin size={42} />
                </a>
              </li>
            </ul>
          </div>
        </section>
      )}
    </>
  );
};

export default Home;

{
  /* <button onClick={() => {handleClick('spanish')}}>cambiar idioma a spanish</button>
<button onClick={() => {handleClick('english')}}>cambiar idioma a ingles</button> */
}
