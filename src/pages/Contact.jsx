import React, { useContext } from "react";
import { ConfigContext } from "../context/configContext";
const Contact = () => {
    const { state } = useContext(ConfigContext);
  return (
    <>
      {(state.page === "Contact me" || state.page === "Contáctame") && (
        <>
          <div className="text-white">Aboutme</div>
        </>
      )}
    </>
  )
}

export default Contact