import { useState } from "react";

const ShortCircuitOverview = () => {
  // falsy
  const [text, setText] = useState("");

  // trully
  const [name, setName] = useState("susan");
};

return (
  <div>
    <h4>Falsy OR : {text || "hello world"}</h4>
    <h4>Falsy AND : {text || "hello world"}</h4>
    <h4>Falsy OR : {text || "hello world"}</h4>
    <h4>Falsy OR : {text || "hello world"}</h4>
  </div>
);
export default ShortCircuitOverview;
 