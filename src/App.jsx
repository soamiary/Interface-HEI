import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import vraiLogoHEI from "./assets/vraiLogoHEI.png";
import bg3 from "./assets/backgroundImage3.jpg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <nav
          className="bg-[#001948] text-white 
           top-0 absolute w-full flex items-center p-[10px] h-3xs"
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

        <img
          src={bg3}
          alt="background image "
          className="w-screen h-screen object-cover max-h-[600px] mx-auto z-0"
        />
        

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
