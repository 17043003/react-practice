import React from 'react';

function App() {
  const label = <label htmlFor="bar">bar</label>
  const indom = <input type="text" onChange={() => {console.log("changed!")}} />
  
  return (
    <React.Fragment>
      {label}
      {indom}
    </React.Fragment>
  );
}

export default App;
