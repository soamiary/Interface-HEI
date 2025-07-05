import { useState, useEffect } from "react";
import viteLogo from "/vite.svg";
import vraiLogoHEI from "./assets/vraiLogoHEI.png";
import bg3 from "./assets/backgroundImage3.jpg";
import soccerTeam from "./assets/soccerTeam.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faUsersLine } from "@fortawesome/free-solid-svg-icons";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import RyanPic from "./assets/RyanPic.webp";
import MiradoPic from "./assets/MiradoPic.webp";
import deboucheImage from "./assets/deboucheImage.webp";
import CloudImage from "./assets/CloudImage.png";
import AiImage from "./assets/AiImage.png";
import IngenierieImage from "./assets/IngenierieImage.png";
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

        <div className="absolute mt-[100px] pb-[10%] bg-[#6586c7ff] w-full">
          <p className="text-white  font-serif font-bold text-4xl text-center mt-[70px] px-4 py-2">
            L'équipe pédagogique
          </p>
          <p className="text-white  font-serial text-xl text-center mt-[30px] px-4 py-2">
            Notre équipe pédagogique se compose d’experts nationaux et
            internationaux de l’informatique, de la cybersécurité, de
            l’intelligence artificielle, dont un ingénieur chez Google. Ils sont
            passionnés par l’informatique et sont engagés vers l’excellence.
            Nous sommes conscients que cette équipe est la pierre angulaire de
            l’employabilité de nos étudiants, elle a été soigneusement
            sélectionnée.
          </p>

          <div className="bg-white ml-[100px] mt-[100px] pt-[10px] w-[370px] h-[400px] rounded-[13px] ">
            <img
              src={RyanPic}
              alt=""
              className=" w-[170px] h-[170px] mt-[15px] ml-[105px] rounded-[50%] "
            />
            <p className="font-serif font-bold text-[#001948] mt-[20px] ml-[105px] ">
              Ryan ANDRIAMAHERY
            </p>
            <p className="text-[#001948] mt-[20px] ml-[15px]">
              Développeur backend | cofondateur et directeur des opérations de
              HEI
            </p>
          </div>

          <div className="bg-white ml-[600px] mt-[-400px] pt-[10px] w-[370px] h-[400px] rounded-[13px] ">
            <img
              src={MiradoPic}
              alt=""
              className=" w-[170px] h-[170px] mt-[15px] ml-[105px] rounded-[50%] "
            />
            <p className="font-serif font-bold text-[#001948] mt-[20px] ml-[105px] ">
              Mirado RAFENOMAHENINTSOA
            </p>
            <p className="text-[#001948] mt-[20px] ml-[15px]">
              Data and business intelligence Specialist +5
            </p>
          </div>
        </div>
      </div>

      <div className=" absolute  w-full h-[50%] mt-[80%] ">
        <h1 className="text-[#001948] font-serif ml-[150px]  mt-[20px] ">
          Quelques débouchés
        </h1>

        <div className="max-w-[700px]  ml-[20px] mt-[20px]  mx-auto">
          <h2 className="line-clamp-7  text-[#001948] px-4 py-2 text-justify overflow-hidden">
            Formez-vous à une panoplie de métiers du numérique avec nous et
            venez acquérir les fondements de la programmation (qui vous servira
            pour les différents métiers) ! Ce sont des métiers porteurs, des
            métiers du présent, des métiers du futur… Développeur back end,
            développeur front end, développeurs mobile, chefs de projet,
            exploitants cloud, analystes cybersécurité, pentesters, auditeur
            technique SSI, auditeur organisationnel SSI, administrateur système
            et réseau, développeur de sécurité…
          </h2>
          <img
            src={deboucheImage}
            alt=""
            className=" absolute w-[330px] h-[330px]
           ml-[70%] mt-[-260px] "
          />
        </div>
      </div>

      <div
        className="bg-[#f2f2f2ff] absolute mt-[1350px]
       pb-[5%] w-full "
      >
        <p
          className=" text-[#001948] font-serif font-bold
         absolute text-3xl mt-[30px] ml-[550px] "
        >
          Domaines
        </p>
        <p
          className=" text-[#001948] font-serif 
         absolute text-xl mt-[100px] ml-[50px] "
        >
          Au cours de vos trois ans de formation, naviguez entre les domaines
          les plus porteurs du numérique du présent et de l’avenir :
        </p>
        <div className="bg-white ml-[50px] mt-[150px] pt-[10px] w-[370px] h-[600px] rounded-[13px] ">
          <img
            src={CloudImage}
            alt=""
            className=" w-[170px] h-[170px] mt-[15px] ml-[105px]  "
          />
          <p className="font-serif font-bold text-[#DFA408] mt-[20px] ml-[105px] ">
            Cloud et cybersécurité
          </p>
          <p className="text-[#001948] mt-[20px] ml-[15px]">
            Maîtrisez les engrenages des outils en ligne interconnectés sur les
            nuages (comme sur AWS). Ou encore, devenez maître de la sécurisation
            des données en ligne ou des programmes et applications contre les
            cybermenaces. Chez HEI, vous allez vous former dans le domaine du
            cloud et de la cybersécurité.
          </p>
        </div>
        <div className="bg-white ml-[450px] mt-[-600px] pt-[10px] w-[370px] h-[600px] rounded-[13px] ">
          <img
            src={AiImage}
            alt=""
            className=" w-[170px] h-[170px] mt-[15px] ml-[105px]  "
          />
          <p className="font-serif font-bold text-[#DFA408] mt-[20px] ml-[105px] ">
            Intelligence artificielle
          </p>
          <p className="text-[#001948] mt-[20px] ml-[15px]">
            Le monde de la reconnaissance faciale ou la détection d’obstacles
            par les voitures semi-autonomes vous fascinent ? Ce n’est pas
            sorcier, cela s’apprend. Apprenez les bases de l’intelligence
            artificielle lors de vos cours chez HEI.
          </p>
        </div>
        <div className="bg-white ml-[850px] mt-[-600px] pt-[10px] w-[370px] h-[600px] rounded-[13px] ">
          <img
            src={IngenierieImage}
            alt=""
            className=" w-[170px] h-[170px] mt-[15px] ml-[105px]  "
          />
          <p className="font-serif font-bold text-[#DFA408] mt-[20px] ml-[105px] ">
            Ingénierie logicielle
          </p>
          <p className="text-[#001948] mt-[20px] ml-[15px]">
            Apprenez les principes de la conception ou le développement de
            programmes et d’applications web et mobile et explorez le monde
            fascinant des “codes”. A la fin de votre formation, vous serez aptes
            à proposer des solutions pratiques, créatives et innovantes à des
            particuliers ou des entreprises pour leurs besoins numériques.
          </p>
        </div>

        <div className=" absolute bg-[#6586c7ff] w-full pb-[50%] mt-[50px] ">
          <p
            className=" text-white font-serif 
         absolute text-3xl mt-[30px] ml-[550px] "
          >
            Admissions
          </p>
          <p
            className=" text-white font-serif 
         absolute text-xl mt-[100px] ml-[200px] "
          >
            Ouverte aux bacheliers de toutes les séries, l’admission chez HEI se
            fait par test de niveau :
          </p>
          <p
            className=" text-white font-serif 
         absolute text-xl mt-[150px] ml-[200px] "
          >
            une épreuve de français niveau B2 et d’une épreuve de mathématiques
            niveau Terminale D.
          </p>

          <div className=" absolute bg-[#fcdfb6ff] mt-[300px] ml-[100px] w-[400PX] h-[150px] ">
            <p className=" absolute text-white font-bold ml-[10px] text-4xl ">
              01
            </p>
            <p className=" absolute text-[##001948] font-bold mt-[35px] ">
              Dépôt de dossiers :
              <p>pour les bacheliers de toutes séries sans limite d’âge</p>
            </p>
          </div>

          <div className=" absolute bg-[#f7d08fff] mt-[300px] ml-[400px] w-[300PX] h-[150px] ">
            <p className=" absolute text-white font-bold ml-[10px] text-4xl ">
              02{" "}
            </p>
            <p className=" absolute text-[##001948] font-bold mt-[35px] ">
              Test de niveau :
              <p>
                composé d’une épreuve de français niveau B2 et d’une épreuve de
                mathématiques niveau Terminale D
              </p>
            </p>
          </div>
          <div className=" absolute bg-[#f2c36bff] mt-[300px] ml-[700px] w-[300PX] h-[150px] ">
            <p className=" absolute text-white font-bold ml-[10px] text-4xl ">
              03{" "}
            </p>
            <p className=" absolute text-[##001948] font-bold mt-[35px] ">
              Inscription définitive (si test réussi)
            </p>
            <button
              className=" absolute mt-[250px] text-white
             ml-[-350px] bg-transparent border-white border-solid "
            >
              Inscrivez-vous ici{" "}
            </button>
            <button className=" absolute mt-[250px] text-white
             ml-[50px] bg-[#001948]  " > Résultats Concours </button>
          </div>
        </div>
      </div>

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
