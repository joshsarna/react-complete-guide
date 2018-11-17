import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Josh', age: 23},
      {name: 'Maria', age: 23},
      {name: 'Jake', age: 23}
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked');
    this.setState( {
      persons: [
        {name: newName, age: 23},
        {name: 'Maria', age: 23},
        {name: 'Jake', age: 24}
      ]
    } )
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
          {this.state.persons.map(person => {
            return <Person 
              name={person.name}
              age={person.age} />
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
