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






  shuffleArray = () => {
    const shuffledArr = this.shuffle(this.state.characters);

    this.setState({ shuffledArr })
  }



  shuffle = array => {
    let currentIndex = array.length,
    temporaryValue,
    randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array
  }


  



  render() {
    return (
      <div>
        <Header 
          currentScore={this.state.currentScore}
          highScore={this.state.highScore}
        />
        <Rules />
  
      
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
     
    );
  }
  
  
}

export default App;
