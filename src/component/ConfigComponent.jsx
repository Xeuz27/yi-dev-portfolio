import React, { useContext, useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { ConfigContext } from "../context/configContext";

const ConfigComponent = () => {
  const [open, setOpen] = useState(false)
  const { state } = useContext(ConfigContext);
  const { dispatch } = useContext(ConfigContext);
  const colorstate = state.color;
  return (
    <>
    <div
      className={`transition-all flex justify-center items-center rounded-tl-xl rounded-bl-xl
                         bg-${colorstate} z-10 absolute top-4 right-0 w-12 h-12 cursor-pointer
                         
                         ${open ? 'right-[212px] scale-50': 'right-0 '}
                         `}
                         onClick={() => setOpen((prev) => !prev)}
    >
      <IoMdSettings className="iconconfig" />
    </div>
      
        <div className={`transition-all bg-white z-10 absolute top-7 w-[225px]  ${open ? 'right-[0]': 'right-[-260px]' } h-[120px] font-poppins p-2 text-center rounded-bl-lg `}>
            <p>Color Switcher</p>
            <div className="flex justify-center gap-[6px] pt-[5px]">
              <input className="cursor-pointer rounded-full w-8 h-8 bg-blue appearance-none" onClick={() => {dispatch({type: 'color', color: 'blue'})}} type="checkbox" />
              <input className="cursor-pointer rounded-full w-8 h-8 bg-violet appearance-none" onClick={() => {dispatch({type: 'color', color: 'violet'})}} type="checkbox" />
              <input className="cursor-pointer rounded-full w-8 h-8 bg-green appearance-none" onClick={() => {dispatch({type: 'color', color: 'green'})}} type="checkbox" />
              <input className="cursor-pointer rounded-full w-8 h-8 bg-orange appearance-none" onClick={() => {dispatch({type: 'color', color: 'orange'})}} type="checkbox" />
              <input className="cursor-pointer rounded-full w-8 h-8 bg-red appearance-none" onClick={() => {dispatch({type: 'color', color: 'red'})}} type="checkbox" />
            </div>
        </div>
      
      </>
  );
};

export default ConfigComponent;
