import React, { useContext } from "react";
import Sidebar from "../component/SideBar";
import { ConfigContext } from "../context/configContext";
import { AnimatePresence, motion } from "framer-motion";
import styles, { layout } from "../style";
import profilepicture from "../assets/profile-pic.png";
import { GrGithub } from "react-icons/gr";

const Home = () => {
  const { state } = useContext(ConfigContext);
  const { dispatch } = useContext(ConfigContext);

  const handleClick = (id) => {
    dispatch({ type: "language", language: id });
  };
  return (
    <>
      {(state.page === "Home" || state.page === "Inicio") && (
        <AnimatePresence>
          <motion.section className={layout.section}>
            <motion.div className="container max-w-7xl m-auto py-16">
              <motion.div className="w-40 h-40 mx-auto mb-5">
                <img
                  className="transition-all ease-in border-2 border-softWhite hover:border-white rounded-full outline-1 outline outline-softWhite hover:outline-offset-4 hover:outline-white cursor-pointer"
                  src={profilepicture}
                  alt="profile picture"
                />
              </motion.div>
              <h1 className="text-white font-poppins text-5xl text-center">
                {" "}
                Jesus Gutierrez{" "}
              </h1>
              <p className=" text-white  font-poppins text-2xl text-center">
                {state.language === 'english' ? 'Front-End Developer':'Desarrollador Front-End'}
              </p>
              <motion.ul className="mt-5 flex justify-center mx-auto text-center text-white">
                <li>
                  <a href="https://github.com/Xeuz27">
                    <GrGithub size={42} />
                  </a>
                </li>
              </motion.ul>
            </motion.div>
          </motion.section>
        </AnimatePresence>
      )}
    </>
  );
};

export default Home;

{
  /* <button onClick={() => {handleClick('spanish')}}>cambiar idioma a spanish</button>
<button onClick={() => {handleClick('english')}}>cambiar idioma a ingles</button> */
}
