import React, { useContext } from "react";
import { ConfigContext } from "../context/configContext";
import { layout } from "../style";
import { services } from "../constants";
import { IKContext, IKImage } from "imagekitio-react";

const Services = () => {
  const publicKey = "public_rw5MD5lD1Lg+0TkL0gHzyJLMDbI=";
  const urlEndpoint = "https://ik.imagekit.io/0oguwfou0i";
  const baseikURL = "https://ik.imagekit.io/0oguwfou0i/portfolio-illustrations/";

  const { state } = useContext(ConfigContext);
  const colorstate = state.color;
  return (
    <>
      {(state.page === "Services" || state.page === "Servicios") && (
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
                <ul
                  className="w-full flex flex-wrap justify-around gap-4 gap-y-16"
                >
                  <IKContext publicKey={publicKey} urlEndpoint={urlEndpoint}>
                    {services.map((item) => (
                      <li
                        key={item.name}
                        className="font-poppins text-lg text-justify flex flex-col items-center responsive-li-skills"
                      >
                        <IKImage
                          className={`${item.image}`}
                          transformation={[{ height: "150", width: 600 }]}
                          quantity="100"
                          height="150"
                          width="250"
                          loading="lazy"
                          lqip={{ active: true }}
                          src={`${baseikURL}${item.image}-${colorstate}.svg`}
                        />
                        <h3 className="text-3xl mb-3 font-semibold">
                          {item.name}
                        </h3>
                        <p className="text-lg lg:text-xl">{item.description}</p>
                      </li>
                    ))}
                  </IKContext>
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Services;
