import React from 'react';
import PropTypes from 'prop-types';

function App() {
  const profiles = [
    { name: 'tama', age: 3 },
    { name: 'pikachu', age: 5 },
    { name: 'pichu', age: 1  }
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

Cat.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
