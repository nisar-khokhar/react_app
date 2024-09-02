import { Fragment, useState } from "react";
const Counter = (props) => {
  // let count = 5;
  const [count, setCount] = useState(5);

  const Increment = () => {
    let value = count + 1;
    setCount(value);
  };
  const Decrement = () => {
    let value = count - 1;
    setCount(value);
  };
  return (
    <Fragment>
      <h1>{props.itemName}</h1>
      <h1>{count}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </Fragment>
  );
};

export default Counter;
