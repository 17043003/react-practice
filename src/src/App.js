import React, {Component} from 'react';

function App() {
  const profiles = [
    { name: 'tama', age: 3 },
    { name: 'pikachu', age: 5 },
    { name: 'pichu' }
  ];

  return (
    <React.Fragment>
    {
      profiles.map((profile, index) => {
        return <Cat name={profile.name} age={profile.age} key={index}/>
      })
    }
    </React.Fragment>
  );
}

// functional component
const Cat = (props) => {
  return <div>nya! I am {props.name}, and {props.age} years old.</div>
}
// default props
Cat.defaultProps = {
  age: 0
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
