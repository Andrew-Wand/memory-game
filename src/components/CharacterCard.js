import { React } from "react";

function CharacterCard(props) {
    return (
        <div className={"card " + (props.Clicked ? "animate" : "")} onClick={() => props.handleClick( props.id)}>
            <div>
                <img src={props.image} alt={props.name} />
            </div>
        </div>
    )
}

export default CharacterCard;