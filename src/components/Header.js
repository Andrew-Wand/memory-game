import { React } from "react";

function Header(props) {
    return (
        <header>
            <div>
                <h1>JoJo's Bizarre Memory Game</h1>
                <p>Score: <span>{props.currentScore}</span></p>
                <p>High Score: <span>{props.highScore}</span></p>
            </div>
        </header>
    )




    
}


export default Header;