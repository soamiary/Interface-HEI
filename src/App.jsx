import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <nav
          className="bg-[#001948] text-white 
           top-0 absolute w-full flex items-center p-[35px] h-3xs"
        >
          <ul className="flex gap-6 items-center text-white ml-[45%]  ">
            <li>
              <a
                href=""
                className="text-[#DFA408] hover:text-[#DFA408]  font-bold text-2XL"
              >
                ACCUEIL
              </a>
            </li>
            <li>
              <a href="" className="text-white  font-bold hover:text-[#DFA408] -500">
                ACTUALITE
              </a>
            </li>
            <li>
              <a href="" className="text-white   font-bold hover:text-[#DFA408] -500">
                BOURSE D'ETUDE
              </a>
            </li>
            <li>
              <a href="" className="text-white  font-bold hover:text-[#DFA408] -500">
                INSCRIPTION
              </a>
            </li>
            <li>
              <button className="text-white bg-[#DFA408] rounded-[7px] ">INTRANTET</button>
            </li>
          </ul>
        </nav>

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
