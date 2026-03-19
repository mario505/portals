import { useState } from "react";

export default function Player() {

  const [enteredPlayerName, setEnteredPlayerName] = useState("");
  const [submitted, setSubmited] = useState(false);

  const handlePlayerNameChange = (event) => {
    setSubmited(false);  
    setEnteredPlayerName(event.target.value);
  };

  const handleClick = () => {
    setSubmited(true);  
  };

  return (
    <section id="player">
      <h2>Welcome {submitted ? enteredPlayerName : "unknown entity"}</h2>
      <p>
        <input type="text" onChange={handlePlayerNameChange} value={enteredPlayerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
