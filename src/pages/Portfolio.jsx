import React, { useContext } from "react";
import { ConfigContext } from "../context/configContext";
const Portfolio = () => {
    const { state } = useContext(ConfigContext);
  return (
    <>
      {(state.page === "Portfolio" || state.page === "Proyectos") && (
        <>
          <div className="text-white">Portfolio</div>
        </>
      )}
    </>
  )
}

export default Portfolio