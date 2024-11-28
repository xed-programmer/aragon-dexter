import React, {setState, useState} from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <button onClick={()=>setCounter(counter+1)}>Count {counter}</button>
  );
}

export default Counter;