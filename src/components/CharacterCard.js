import { React } from "react";

function CharacterCard(props) {
    return (
    <div className="wrapper">
        <div className={"card " + (props.Clicked ? "animate" : "")} onClick={() => props.handleClick( props.id)}>
            <div className="img-container">
                <img src={props.image} alt={props.name} />
            </div>
        </div>
    </div>
        
    )
}

export default CharacterCard;