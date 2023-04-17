import React, { useContext } from "react";
import { ConfigContext } from "../context/configContext";
const Services = () => {
    const { state } = useContext(ConfigContext);
  return (
    <>
      {(state.page === "Services" || state.page === "Servicios") && (
        <>
          <div className="text-white">Services</div>
        </>
      )}
    </>
  )
}

export default Services