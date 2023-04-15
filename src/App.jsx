import React, { useReducer } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Routes, Route, HashRouter, Navigate } from "react-router-dom";
import { Home } from "./pages";
import { ConfigContext } from "./context/configContext";
import { Reducer, initialState } from "./reducer/reducer";
import Sidebar from "./component/SideBar";

//borrar router dom del package json

const App = () => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <ConfigContext.Provider value={{ state: state, dispatch }}>
      <AnimatePresence>
        <motion.div className="app">
          <Sidebar />
          <Home />
        </motion.div>
      </AnimatePresence>
    </ConfigContext.Provider>
  );
};

export default App;
