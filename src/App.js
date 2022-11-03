import React, { Component } from 'react';
import { animals } from './animals.js';
import './App.css';
import Card from './Card.jsx';


class App extends Component {
  
  state = {
    animals: animals,
    search: '',
  };

  addHandler = (name) => {
    this.setState(state => {
      const updatedArray = state.animals.map(animal => {
        if (animal.name === name) {
          return {...animal, likes: animal.likes + 1};
        } else { return animal; }
      });
      return { animals: updatedArray, };
    });
    };

    dislikeHandler = (name) => {
      this.setState(state => {
        const updatedArray = state.animals.map(animal => {
          if (animal.name === name) {
            return {...animal, likes: animal.likes - 1};
          } else { return animal; }
        });
        return { animals: updatedArray, };
      });
    };

  removeHandler = (name) => {
    const updatedArray = this.state.animals.filter(animal => animal.name !== name);
    this.setState({ animals: updatedArray });
    };

  searchHandler = (e) => {
    this.setState({ search: e.target.value });
    };

  //if more than one liner curly brackets and return needed
  
  render() {

  const animalFilter = this.state.animals.filter(animal => { 
    return animal.name
    .toLowerCase()
    .includes(this.state.search.toLowerCase());
  });

   const animalsList = animalFilter.map(animal => {
      return <Card 
      key={animal.name} 
      name={animal.name} 
      likes={animal.likes} 
      removeCard={() => this.removeHandler(animal.name)} 
      addLikes={() => this.addHandler(animal.name)}
      removeLikes={() => this.dislikeHandler(animal.name)}
      />});

  return (

    <div>
      <h1>{this.state.animals.length} Animals</h1>
      <input type="text" placeholder='Search for Animal' onChange={this.searchHandler} />
      
      <div className='card-container'>
        
        {animalsList}
      
      </div>
    </div>
  );
}};

export default App;



