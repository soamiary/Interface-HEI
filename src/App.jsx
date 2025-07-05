import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import vraiLogoHEI from "./assets/vraiLogoHEI.png";
import bg3 from "./assets/backgroundImage3.jpg";
import soccerTeam from "./assets/soccerTeam.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faUsersLine } from "@fortawesome/free-solid-svg-icons";
import { faMedal } from "@fortawesome/free-solid-svg-icons";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <nav
          className="bg-[#001948] text-white 
           top-0 absolute w-full flex items-center p-[1px] h-3xs z-30"
        >
          <img src={vraiLogoHEI} alt="" className="w-[125px] p-0 h-auto" />
          <ul className="flex gap-6 items-center text-white ml-[37%]  ">
            <li>
              <a
                href=""
                className="text-[#DFA408] hover:text-[#DFA408]  font-bold text-2XL"
              >
                ACCUEIL
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-white  font-bold hover:text-[#DFA408] -500"
              >
                ACTUALITE
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-white   font-bold hover:text-[#DFA408] -500"
              >
                BOURSE D'ETUDE
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-white  font-bold hover:text-[#DFA408] -500"
              >
                INSCRIPTION
              </a>
            </li>
            <li>
              <button className="text-white bg-[#DFA408]  ">INTRANTET</button>
            </li>
          </ul>
        </nav>

        <div>
          <img
            src={bg3}
            alt="background image "
            className="w-screen h-screen object-cover max-h-[600px] mx-auto z-0"
          />
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <h1
              className="text-white mb-[100px] text-5xl font-serif
             font-bold flex items-center justify-center"
            >
              Haute école d'Informatique
            </h1>
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <h2 className="text-white font-serial   mt-[25ch] p-[70px] m-[45PX]  ">
                "L'éducation est l'arme la plus puissante pour changer le
                monde." selon Nelson Mandela "L'éducation dans l'informatique
                est une arme puissante pour lutter contre la pauvreté à
                Madagascar"selon HEI. C'est notre mission.
              </h2>
            </div>
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <button className=" absolute mt-[450px] mr-[720px] font-bold text-xl  ">
                Inscrivez-vous ici
              </button>
              <button
                className="absolute mt-[450px] mr-[0px] 
              font-bold text-xl bg-[#DFA408] text-white "
              >
                Emploie du temps
              </button>
              <button
                className="absolute mt-[450px] ml-[650px] 
              font-bold text-xl bg-[#001948] text-white "
              >
                Programme pédagogique
              </button>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h1 className=" mt-[70px] ml-[600px] font-serif font-bold ">
              A propos de nous{" "}
            </h1>
            <h1 className="text-[#DFA408] mt-[60px] ml-[600px]">
              <FontAwesomeIcon icon={faGraduationCap} />
            </h1>
            <h1
              className="text-[#001948] font-bold ml-[695px]
              absolute mt-[-55px] "
            >
              +3ans
            </h1>
            <h2 className="text-[#001948]  mt-[20px] ml-[700px] pb-[135px] mb-[50px] ">
              Depuis 3 ans, nous formons ceux qui décodent le futur, aux métiers
              de l’informatique. Nous sommes un groupe d’experts, de
              professionnels et des passionnés de l’informatique de Madagascar
              et du monde entier.
            </h2>
          </div>
          <div className="ABSOLUTE">
            <img
              src={soccerTeam}
              alt=""
              className="w-[300px] mt-[-300px]
               absolute ml-[150px] rounded-md "
            />
            <div className=" mt-[-120px] ">
              <h1 className="text-[#DFA408] mt-[-70px] ml-[600px]">
                <FontAwesomeIcon icon={faUsersLine} />
              </h1>
              <h1
                className="text-[#001948] font-bold ml-[695px]
              absolute mt-[-55px] "
              >
                +250étudiants
              </h1>
              <h2 className="text-[#001948]  mt-[20px] ml-[700px] pb-[135px] mb-[50px] ">
                Plus de 250 étudiants et plus d’une dizaine d’entreprises ont
                déjà fait confiance à notre formation habilitée par l’État
                malgache. Avec eux tous, nous sommes fiers de pouvoir parler de
                la “grande famille HEI”.
              </h2>
            </div>
            <div className="absolute  mt-[-200px] ">
              <h1 className="text-[#DFA408] mt-[60px] ml-[600px]">
                <FontAwesomeIcon icon={faMedal} />
              </h1>
              <h1
                className="text-[#001948] font-bold ml-[695px]
              absolute mt-[-55px] "
              >
                Notre mission
              </h1>
              <h2 className="text-[#001948]  mt-[20px] ml-[700px] pb-[135px] mb-[50px] ">
                Notre mission est d’amener des jeunes malgaches sur des domaines
                porteurs comme l’intelligence artificielle, la cybersécurité ou
                la programmation afin de favoriser leur employabilité et le
                développement de Madagascar.
              </h2>
            </div>
          </div>
        </div>

        <button className="bg-secondary text-primary px-4 py-2 rounded">
          Bouton stylé
        </button>

        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <p>hello world</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
