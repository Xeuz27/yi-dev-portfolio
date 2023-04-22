import React, { useContext } from "react";
import { ConfigContext } from "../context/configContext";
import {GoLocation} from 'react-icons/go'
import {BsTelephoneInboundFill} from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'
import { layout } from "../style";
const Contact = () => {
  const { state } = useContext(ConfigContext);
  const colorstate = state.color
  return (
    <>
      {(state.page === "Contact me" || state.page === "Contáctame") && (
        <>
          <div
            className={` ${layout.section} py-12 overflow-y-scroll text-white`}
          >
            <div className="container max-w-[1080px] m-auto">
              <div className="flex flex-wrap xs:pl-4 sm:pl-0 md:pl-0 lg:pl-8">
                <div className="text-inherit font-rubik font-semibold text-4xl my-8 ">
                  <h2>{state.page}</h2>
                  <div
                    id="before-after"
                    className={`relative bg-${colorstate}`}
                  ></div>
                </div>
              </div>

              <div className="w-full pt-9 px-4">
                <div className="row">
                   <ul className="flex justify-center flex-wrap">
                    <li className="responsive-li-contact flex flex-col items-center justify-center"><GoLocation style={{width: '60px', height: '60px'
                    }}/>
                    <span>Address</span>
                    <p>Maracaibo-Zulia. Venezuela</p>
                    </li>
                    <li className="responsive-li-contact flex flex-col items-center justify-center"><BsTelephoneInboundFill style={{width: '60px', height: '60px'
                    }} />
                    <span>Call me on
                      </span>
                      <p>+58 414 617-2019</p></li>
                    <li className="responsive-li-contact flex flex-col items-center justify-center"><HiOutlineMail style={{width: '60px', height: '60px'
                    }}/>
                    <span>Email</span>
                    <p>Jesusg.1301.jg@gmail.com</p></li>
                   </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Contact;
