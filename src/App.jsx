import { useState } from "react";
import Counter from "./Components/Counter";

const App = () => {
  const [items, setItems] = useState(["Jeans", " Jackets", "Shirts", "Caps"]);
  const [input, setInput] = useState("");

  const addItemHandler = () => {
    console.log(input);
    setItems([...items, input]);
    setInput("");
  };

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addItemHandler}>Add Item</button>

      {items.map((item, index, arr) => {
        return <Counter key={index} itemName={item} />;
      })}
      {/* <Counter itemName="Jeans"></Counter>
      <Counter itemName="Jackets"></Counter>
      <Counter itemName="Shirts"></Counter> */}
    </>
  );
};

export default App;
