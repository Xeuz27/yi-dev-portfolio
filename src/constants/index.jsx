import {GrReactjs, GrMysql } from 'react-icons/Gr';
import {IoLogoCss3, IoLogoNodejs} from 'react-icons/io'
import {DiJavascript1} from 'react-icons/di'
import {TbBrandFramerMotion} from 'react-icons/tb'
import {SiExpress, SiTailwindcss, SiGithub, SiFirebase, SiHtml5, SiJavascript} from 'react-icons/si'

export const navLinksEnglish = [
  {
    id: "Home",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-[2rem] h-[2rem] hover:text-inherit"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
    title: "Home",
  },
  {
    id: "Portfolio",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-[2rem] h-[2rem] hover:text-inherit"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
        />
      </svg>
    ),
    title: "Portfolio",
  },
  {
    id: "Services",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-[2rem] h-[2rem] hover:text-inherit"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
        />
      </svg>
    ),
    title: "Services",
  },
  {
    id: "About Me",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-[2rem] h-[2rem] hover:text-inherit"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "About Me",
  },
  {
    id: "Contact me",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-[2rem] h-[2rem] hover:text-inherit"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
    title: "Contact me",
  },
];
export const navLinksSpanish = [
  {
    id: "Inicio",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-[2rem] h-[2rem] hover:text-inherit"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
    title: "Inicio",
  },
  {
    id: "Proyectos",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-[2rem] h-[2rem] hover:text-inherit"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
        />
      </svg>
    ),
    title: "Proyectos",
  },
  {
    id: "Servicios",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-[2rem] h-[2rem] hover:text-inherit"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
        />
      </svg>
    ),
    title: "Servicios",
  },
  {
    id: "Sobre mi",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-[2rem] h-[2rem] hover:text-inherit"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "Sobre mi",
  },
  {
    id: "Contáctame",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-[2rem] h-[2rem] hover:text-inherit"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
    title: "Contáctame",
  },
];
//  export const services = [
//    {
//      id: "feature-1",
//      icon: star,
//      title: "Rewards",
//      content:
//        "The best credit cards offer some tantalizing combinations of promotions and prizes",
//    },
//    {
//      id: "feature-2",
//      icon: shield,
//      title: "100% Secured",
//      content:
//        "We take proactive steps make sure your information and transactions are secure.",
//    },
//    {
//      id: "feature-3",
//      icon: send,
//      title: "Balance Transfer",
//      content:
//        "A balance transfer credit card can save you a lot of money in interest charges.",
//    },
//  ];
//  export const servicios = [
//    {
//      id: "feature-1",
//      icon: star,
//      title: "Rewards",
//      content:
//        "The best credit cards offer some tantalizing combinations of promotions and prizes",
//    },
//    {
//      id: "feature-2",
//      icon: shield,
//      title: "100% Secured",
//      content:
//        "We take proactive steps make sure your information and transactions are secure.",
//    },
//    {
//      id: "feature-3",
//      icon: send,
//      title: "Balance Transfer",
//      content:
//        "A balance transfer credit card can save you a lot of money in interest charges.",
//    },
//  ];

export const aboutMeEnglish = [
  {
    id: "about-1",
    title: "BirthDay",
    content: " april 27th, 1999",
  },
  {
    id: "about-2",
    title: "Age",
    content: " 24",
  },
  {
    id: "about-3",
    title: "Email",
    content: " jesusg.1301.jg@gmail.com",
  },
  {
    id: "about-4",
    title: "Phone",
    content: " +58 414 617-2019",
  },
  {
    id: "about-5",
    title: "City",
    content: " Maracaibo",
  },
  {
    id: "about-6",
    title: "Country",
    content: " Venezuela",
  },
  {
    id: "about-7",
    title: "Full-Time",
    content: " Available",
  },
  {
    id: "about-8",
    title: "Freelance",
    content: " Available",
  },
]
export const aboutMeSpanish = [
  {
    id: "about-1",
    title: "Cumpleaños",
    content: " 27 de abril de 1999",
  },
  {
    id: "about-2",
    title: "Edad",
    content: " 24",
  },
  {
    id: "about-3",
    title: "Correo",
    content: " jesusg.1301.jg@gmail.com",
  },
  {
    id: "about-4",
    title: "Teléfono",
    content: " +58 414 617-2019",
  },
  {
    id: "about-5",
    title: "Ciudad",
    content: " Maracaibo",
  },
  {
    id: "about-6",
    title: "País",
    content: " Venezuela",
  },
  {
    id: "about-7",
    title: "Tiempo Completo",
    content: " Disponible",
  },
  {
    id: "about-8",
    title: "Independiente",
    content: " Disponible",
  },
]

export const aboutMe = {
  name: "Jesus Gutierrez",
  description:
    "Hello! My name is Jesus Gutierrez. I am a Web Developer and I'm very passionate and dedicated to my work. With 2 years experience as a Web Developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the making process, from discussion to elaboration.",
  descripcion:
    "Hola! Mi nombre es Jesus Gutierrez. Soy Desarrollador Web y soy bastante apasionado y dedicado a mi trabajo. Con 2 años de experiencia como desarrollador web, he obtenido las habilidades y conocimientos necesarios para hacer de tu proyecto un Exito!. Disfruto cada parte del proceso de desarrollo, desde discutir las ideas hasta la elaboracion del mismo.",
  cumpleanos: "27 de abril de 1999",
  email: "jesusg.1301.jg@gmail.com",
  phone: "+58 414 617-2019",
  city: "Maracaibo",
  country: "Venezuela",
  freelance: "available",
  fullTime: "available",
};

export const skills = [
  {
    name: "html",
    icon: <SiHtml5 />,
  },
  {
    name: "css",
    icon: <IoLogoCss3 />,
  },
  {
    name: "javascript",
    icon: <SiJavascript />,
  },
  {
    name: "reactJs",
    icon: <GrReactjs />,
  },
  {
    name: "mySQL",
    icon: <GrMysql />,
  },
  {
    name: "nodeJs",
    icon: <IoLogoNodejs />,
  },
  {
    name: "expressJs",
    icon: <SiExpress />,
  },
  {
    name: "taildwindcss",
    icon: <SiTailwindcss />,
  },
  {
    name: "git",
    icon: <SiGithub />,
  },
  {
    name: "framer-motion",
    icon: <TbBrandFramerMotion />,
  },
  {
    name: "firebase",
    icon: <SiFirebase />,
  },
];
