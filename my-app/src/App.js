import React from 'react';
import Counter from './component/Counter';


const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "20px 0", fontSize: "2rem"}}>
        React Counter App
      </h1>
      <Counter title="Counter Example"/>
    </div>
  )
}

export default App