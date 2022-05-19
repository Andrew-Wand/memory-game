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


  handleClick = id => {
    this.shuffleArray();
    this.handleScore(id);
    console.log(this.state.timesClicked);
    this.endGame();
  }

  handleScore = id => {
    this.state.characters.forEach(element => {
      if (id === element.id && element.clicked === false) {
        element.clicked = true;
        this.setState({ Clicked: false });
        this.handleIncrement();
      } else if (id === element.id && element.clicked === true) {
        if (this.state.currentScore > this.state.highScore) {
          this.setState({ highScore: this.state.currentScore });
        }
        this.setState({currentScore: 0});
        this.setState({ Clicked: true });
        this.state.characters.forEach(element => (element.clicked = false));
        console.log(this.state.characters);
      }
    })
  }




  shuffleArray = () => {
    const shuffledArr = this.shuffle(this.state.characters);

    this.setState({ shuffledArr })
  }

  handleIncrement = () => {
    this.setState({ currentScore: this.state.currentScore + 1 });
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

    endGame = () => {
      if (this.state.currentScore === 6) {
        alert('game end!');
      }
    }

    


  



  render() {
    
    return (
      <div className='wrapper' >
        
        
        <Header  
          currentScore={this.state.currentScore}
          highScore={this.state.highScore}
        />
        <Rules />

      
        <div className='card-container' >
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
