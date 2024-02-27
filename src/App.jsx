import "./App.css";
import Appinput from "./components/Appinput";
import Appbtns from "./components/Appbtns";
import { useState } from "react";

function App() {
  const [calcVal, setVal] = useState("");
  const onButtonClick = (ButtonText) => {
    if (ButtonText == "=") {
      const res = eval(calcVal);
      setVal(res);
    } else if (ButtonText == "C") {
      setVal("");
    } else {
      var newVal = calcVal + ButtonText;
      setVal(newVal);
    }
  };
  return (
    <>
      <div className="container">
        <Appinput calcVal={calcVal} />
        <Appbtns onButtonClick={onButtonClick} />
      </div>
    </>
  );
}

export default App;
