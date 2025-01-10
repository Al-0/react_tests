import { useState } from "react";

import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration > 0 ? true : false;

  const handleChange = (identifier, value) => {
    setUserInput((prevValue) => {
      return { ...prevValue, [identifier]: +value };
    });
  };

  return (
    <>
      <UserInput userInput={userInput} onChange={handleChange} />
      {inputIsValid && <Results data={userInput} />}
      {!inputIsValid && <p className="center">Duration must be positive</p>}
    </>
  );
}

export default App;
