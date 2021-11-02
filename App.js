import React from "react";
import "./App.css";
import PersonCard2 from "./Components/PersonCard2";

function App() {
  return (
    <div className="App">
      <PersonCard2
        lastName={"Doe"}
        firstName={"Jane"}
        age={45}
        hairColor={"Black"}
      />
      <PersonCard2
        lastName={"Smith"}
        firstName={"John"}
        age={88}
        hairColor={"Brown"}
      />
      <PersonCard2
        lastName={"Fillmore"}
        firstName={"Millard"}
        age={50}
        hairColor={"Brown"}
      />
      <PersonCard2
        lastName={"Smith"}
        firstName={"Maria"}
        age={62}
        hairColor={"Brown"}
      />
    </div>
  );
}

export default App;
