import React, { useContext } from "react";
import { Trans } from "react-i18next";
import { useInView } from "react-intersection-observer";

import Paragraph from "../shared/Paragraph";
import AppContext from "../../context/AppContext";

import Trazo from "../../images/trazo.png";
import Teen from "../../images/teen.png";
import Insade from "../../images/insade.png";
import Ikaro from "../../images/ikaro.png";
import Pacto from "../../images/pacto.png";
import Fzm from "../../images/fzm.png";
import Thi from "../../images/thi.png";
import UYoga from "../../images/yoga.png";
import Incuba from "../../images/incuba.png";
import Cfosc from "../../images/cfosc.png";

const Project = ({ img, darkMode, onClick, text }) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  return (
    <div ref={ref} className="w-full text-center">
      <button
        className={`h-24 hover:h-48 group flex justify-center text-center relative overflow-hidden rounded-md cursor-pointer transition-all duration-1000 ease-in-out ${
          inView ? "opacity-100" : "opacity-0 translate-y-28"
        }`}
        onClick={onClick}
      >
        <img
          src={img}
          alt={text}
          className="w-full h-auto rounded-md object-cover ease-in-out duration-500 group-hover:rotate-0 scale-75 group-hover:scale-100"
        />
        <div
          className={`absolute bg-maindark w-full h-full transition-opacity duration-500 group-hover:opacity-0 ${
            darkMode ? "opacity-30" : "opacity-0"
          }`}
        />
      </button>
      <Paragraph
        darkMode={darkMode}
        className={`text-lg md:text-xl mt-1 font-thin transition-all duration-1000 ease-in-out delay-700 ${
          inView ? "opacity-100" : "opacity-0"
        }`}
      >
        {text}
      </Paragraph>
    </div>
  );
};

const Work = () => {
  const { darkMode } = useContext(AppContext);
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const projects = [
    { name: "Trazo Vivo", url: "https://www.trazovivo.com/", img: Trazo },
    { name: "CFOSC", url: "https://fortalecimiento.org/", img: Cfosc },
    { name: "Teen Hire", url: "https://teenhire.co/", img: Teen },
    { name: "Insade Ac", url: "https://insade.mx/", img: Insade },
    { name: "Ikaro", url: "https://ikaro.mx/", img: Ikaro },
    { name: "Pacto Verde", url: "https://www.pactoverde.mx/", img: Pacto },
    {
      name: "Tu Historia Importa",
      url: "https://tuhistoriaimporta.com/",
      img: Thi,
    },
    { name: "FZM", url: "https://fzm-berlin.com/", img: Fzm },
    { name: "Incuba Ong", url: "https://www.incuba.ong/", img: Incuba },
    { name: "Urdhva Yoga", url: "https://urdhvayogaestudio.com/", img: UYoga },
  ];

  return (
    <div
      id="about"
      className={`w-screen sm:h-screen flex items-center justify-center ${
        darkMode ? "bg-maindark" : "bg-mainlight"
      }`}
    >
      <div
        ref={ref}
        className={`container flex flex-col items-center justify-center mt-24 sm:mt-0`}
      >
        <Paragraph
          darkMode={darkMode}
          className={`text-2xl sm:text-3xl mb-2 transition-all duration-1000 ease-in-out ${
            inView ? "" : "translate-y-12"
          }`}
        >
          <Trans>Work</Trans>
        </Paragraph>
        <Paragraph
          darkMode={darkMode}
          className={`text-lg text-center sm:text-xl font-light mb-6 transition-all duration-1000 ease-in-out ${
            inView ? "" : "translate-y-12"
          }`}
        >
          <Trans>Work Descr</Trans>
        </Paragraph>
        <div
          className={`grid gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-4 md:gap-2 w-full xl:w-4/5 items-center transition-all duration-1000 ease-in-out`}
        >
          {projects.map((project, i) => (
            <Project
              key={`${i}project`}
              img={project.img}
              darkMode={darkMode}
              text={project.name}
              onClick={() => window.open(project.url)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
