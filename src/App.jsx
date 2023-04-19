import React, { useReducer } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Home, Aboutme, Contact, Portfolio, Services } from "./pages";
import { ConfigContext } from "./context/configContext";
import { Reducer, initialState } from "./reducer/reducer";
import {ConfigComponent, Sidebar} from "./component";


const App = () => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <ConfigContext.Provider value={{ state: state, dispatch }}>
      <AnimatePresence>
        <motion.div className="app">
          <Sidebar />
          <ConfigComponent />
          <Home />
          <Aboutme />
          <Contact />
          <Portfolio />
          <Services />
        </motion.div>
      </AnimatePresence>
    </ConfigContext.Provider>
  );
};

export default App;
