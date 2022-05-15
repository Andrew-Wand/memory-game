import React, { Component } from 'react';
import Header from './components/Header';
import Rules from './components/Rules';
import CharacterCard from './components/CharacterCard';
import "./styles/App.css";
import characters from './characters.json';





class App extends Component {

  state = {
    characters,
    highScore: 0,
    currentScore: 0,
    Clicked: false
  }
  
  // Hooks
  // const [characters, setCharacters] = useState(characters);
  // const [highScore, setHighScore] = useState(highScore: 0);
  // const [currentScore, setCurrentScore] = useState(currentScore: 0);
  // const [isclicked, setIsClicked] = useState(Clicked: false);













  render() {
    return (
      <div>
        <Header 
          currentScore={this.state.currentScore}
          highScore={this.state.highScore}
        />
        <Rules />
  
      <div>
      {this.state.characters.map(character => (
          <CharacterCard 
          Clicked={this.state.Clicked}
          handleClick={this.handleClick}
          id={character.id}
          key={character.id}
          name={character.name}
          image={character.image}
        
        />
  
        ))}
      </div>
        
        
      </div>
     
    );
  }

  
}

export default App;
