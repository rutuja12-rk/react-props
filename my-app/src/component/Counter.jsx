import React from 'react'
import PropTypes from "prop-types";
import { useState } from 'react';

const Counter = ({title}) => {

    const[count, setCount] = useState(0);

    const increment = () =>{
           setCount(count+1);
    };

    const decrement = () =>{
        if (count>0) setCount(count-1);
    };


  return (
    <div className="counter-container">
      <h2>{title}</h2>
      <p className="counter-value">{count}</p>
      <button onClick={increment} className="button increment">Increment</button>
      <button onClick={decrement} className="button decrement">Decrement</button>
    </div>
  );
};

Counter.propTypes ={
    title: PropTypes.string.isRequired,
}

export default Counter;