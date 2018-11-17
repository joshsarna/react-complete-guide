import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {id: '1', name: 'Josh', age: 23},
      {id: '2', name: 'Maria', age: 23},
      {id: '3', name: 'Jake', age: 23}
    ]
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    // above, we're copying the array rather than just references
    // const persons = this.state.persons.slice();
    // .slice() without an argument copies the array, which we want since arrays are reference type and we shouldn't mutate state data on the following line
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        {name: 'Josh', age: 23},
        {name: event.target.value, age: 23},
        {name: 'Jake', age: 23}
      ],
      showPersons: false
    } )
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id} />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler} >Toggle Persons
        </button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'));
  }
}

export default App;
