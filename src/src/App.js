import React, {Component} from 'react';

function App() {
  const label = <label htmlFor="bar">bar</label>
  const indom = <input type="text" onChange={() => {console.log("changed!")}} />
  
  return (
    <React.Fragment>
      {label}
      {indom}
      <Cat/>
      <Dog/>
    </React.Fragment>
  );
}

// functional component
const Cat = () => {
  return <div>nya!</div>
}

// class component
class Dog extends Component{
  render(){
    return (
      <h2>bow!</h2>
    )
  }
}

export default App;
