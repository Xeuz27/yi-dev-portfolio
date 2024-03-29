import React, { useContext, useRef } from "react";
import { ConfigContext } from "../context/configContext";
import { GoLocation } from "react-icons/go";
import { BsTelephoneInboundFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { layout } from "../style";
import { useForm } from "../hooks/UseForm";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const serviceID = import.meta.env.VITE_SERVICE_ID || process.env.VITE_SERVICE_ID;
  const templateID = import.meta.env.VITE_TEMPLATE_ID || process.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY || process.env.VITE_PUBLIC_KEY;
  const form = useRef();

  const formData = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const { name, email, subject, message, onInputChange, onResetForm } =
    useForm(formData);
  const { state } = useContext(ConfigContext);
  const colorstate = state.color;

  const handlesubmit = (e) => {
    e.preventDefault();
    if(name === '' || email === '' || subject === '' || message ===''){
      state.language === 'english' ? alert('Please fill out the form'): alert('Por favor llene los campos')
      return
    } else {
      emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then(
        (result) => {
          console.log(result);
          alert("email was sent succesfully");
          onResetForm();
        },
        (error) => {
          alert("something happened, please try again later");
          console.log(error.text);
        }
      );
    }
  };
  return (
    <>
      {(state.page === "Contact me" || state.page === "Contáctame") && (
        <>
          <div
            className={` ${layout.section} py-12 overflow-y-scroll text-white`}
          >
            <div className="container max-w-[1080px] m-auto">
              <div className="flex flex-wrap xs:pl-4 sm:pl-0 md:pl-0 lg:pl-8">
                <div className="text-inherit font-rubik font-semibold text-5xl my-8 ">
                <h2>{state.language === 'english' ? 'Contact me' : 'Contáctame'}</h2>
                  <div
                    id="before-after"
                    className={`relative bg-${colorstate}`}
                  ></div>
                </div>
              </div>

              <div className="w-full pt-9 px-0 sm:px-4">
                <div className="row">
                  <ul className="flex justify-center flex-wrap gap-y-8">
                    <li className="responsive-li-contact flex gap-y-3 flex-col items-center justify-center">
                      <GoLocation style={{ width: "60px", height: "60px" }} />
                      <span>{state.language === 'english' ? 'Address': 'Localidad' }</span>
                      <p>Maracaibo-Zulia. Venezuela</p>
                    </li>
                    <li className="responsive-li-contact flex gap-y-3 flex-col items-center justify-center">
                      <BsTelephoneInboundFill
                        style={{ width: "60px", height: "60px" }}
                      />
                      <span>{state.language === 'english' ? 'Call me on': 'Contáctame' }</span>
                      <p>+58 414 617-2019</p>
                    </li>
                    <li className="responsive-li-contact flex gap-y-3 flex-col items-center justify-center">
                      <HiOutlineMail
                        style={{ width: "60px", height: "60px" }}
                      />
                      <span>{state.language === 'english' ? 'Email': 'Correo Electronico' }</span>
                      <p>Jesusg.1301.jg@gmail.com</p>
                    </li>
                  </ul>
                </div>
                <div className="row mt-8">
                  <form
                    ref={form}
                    onSubmit={handlesubmit}
                    className="contact-form"
                  >
                    <div className="row flex flex-wrap">
                      <div className="form-item col-6 padd-15">
                        <div className="form-group">
                          <input
                            type="text"
                            required
                            className="form-control bg-primary"
                            placeholder={`${state.language === 'english' ? 'Name*' : 'Nombre*'}`}
                            name="name"
                            value={name}
                            onChange={onInputChange}
                          />
                        </div>
                      </div>
                      <div className="form-item col-6 padd-15">
                        <div className="form-group">
                          <input
                            type="email"
                            required
                            className="form-control bg-primary"
                            placeholder={`${state.language === 'english' ? 'Email*' : 'Correo Electronico*'}`}
                            name="email"
                            value={email}
                            onChange={onInputChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-item col-12 padd-15">
                        <div className="form-group">
                          <input
                            type="text"
                            required
                            className="form-control bg-primary"
                            placeholder={`${state.language === 'english' ? 'Subject*' : 'Asunto*'}`}
                            name="subject"
                            value={subject}
                            onChange={onInputChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-item col-12 padd-15">
                        <div className="form-group">
                          <textarea
                            required
                            className="form-control bg-primary"
                            placeholder={`${state.language === 'english' ? 'Your Message*' : 'Tu Mensaje*'}`}
                            name="message"
                            value={message}
                            onChange={onInputChange}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 padd-15">
                        <button
                          onClick={handlesubmit}
                          className={`block btn rounded-3xl bg-${colorstate} font-poppins text-base font-semibold mx-auto`}
                        >
                          {state.language === 'english' ? 'Send Message':'Enviar Mensaje'}
                        </button>
                      </div>
                    </div>
                  </form>
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
