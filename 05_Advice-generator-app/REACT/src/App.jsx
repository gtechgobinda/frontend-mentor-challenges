import { useState } from "react";
import "./App.css";
import patternDividerM from "./assets/images/pattern-divider-mobile.svg";
import patternDividerD from "./assets/images/pattern-divider-desktop.svg";
import iconDice from "./assets/images/icon-dice.svg";
import { useEffect } from "react";

function App() {
  const [advice, setAdvice] = useState("");
  const [adviceId, setAdviceId] = useState("");
  const fetchAdvice = () => {
    fetch("	https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        // console.log(data.slip.advice)
        // console.log(data.slip.id)
        setAdvice(data.slip.advice);
        setAdviceId(data.slip.id);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchAdvice();
  }, []);
  const handleDiseThrow = () => {
    fetchAdvice();
  };
  return (
    <>
      <div className="main-container">
        <div className="container">
          <div className="advice-section">
            <p className="advice-id">ADVICE #{adviceId}</p>
            <p className="advice-quote">"{advice}"</p>

            <img className="divider-m" src={patternDividerM} alt="divider" />
            <img className="divider-d" src={patternDividerD} alt="divider" />
          </div>

          <div className="dise-container" onClick={handleDiseThrow}>
            <img src={iconDice} alt="dise" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
