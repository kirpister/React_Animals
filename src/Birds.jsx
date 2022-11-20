import React, { Component } from 'react';
import { birds } from './animals.js';
import './App.css';
import Card from './Card.jsx';

class Birds extends Component {

    state = {
        birds: birds,
        search: '',
      };

      addHandler = (name) => {
        this.setState(state => {
          const updatedArray = state.birds.map(bird => {
            if (bird.name === name) {
              return {...bird, likes: bird.likes + 1};
            } else { return bird; }
          });
          return { birds: updatedArray, };
        });
        };
    
        dislikeHandler = (name) => {
          this.setState(state => {
            const updatedArray = state.birds.map(bird => {
              if (bird.name === name) {
                return {...bird, likes: bird.likes - 1};
              } else { return bird; }
            });
            return { birds: updatedArray, };
          });
        }; 

        removeHandler = (name) => {
            const updatedArray = this.state.birds.filter(bird => bird.name !== name);
            this.setState({ birds: updatedArray });
            };
        
          searchHandler = (e) => {
            this.setState({ search: e.target.value });
            };

    render() {

        const birdFilter = this.state.birds.filter(bird => { 
            return bird.name
            .toLowerCase()
            .includes(this.state.search.toLowerCase());
          });
        
           const birdsList = birdFilter.map(bird => {
              return <Card 
              key={bird.name} 
              name={bird.name} 
              likes={bird.likes} 
              removeCard={() => this.removeHandler(bird.name)} 
              addLikes={() => this.addHandler(bird.name)}
              removeLikes={() => this.dislikeHandler(bird.name)}
              />});

        return (
        <div>
            <h1>{this.state.birds.length} Birds</h1>
            <input type="text" placeholder='Search for Bird' onChange={this.searchHandler} />
            <div className='card-container'>

                {birdsList}

            </div>
        </div> 
        );
    }
}

export default Birds;