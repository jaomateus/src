import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    hobby: "ready books",
  });

  const displayPerson = () => {
    setPerson({...person, name:'susan' });
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoys: {person.hobby}</h4>
      <button className="btn" onClick={displayPerson} type="button">
        Show John
      </button>
    </>
  );
};

export default UseStateObject;
  