import React from 'react'

function Joke(props) {
    return (
        <div className={`friend ${props.q}`}>
            <p><strong>Joke: </strong> {props.q}</p>
            <p><strong>Punchline: </strong> {props.p}</p>
            <button id={props.id} onClick={props.onDelete}>Delete</button>
            {/* <button id={props.id} onClick={props.onUpdate}>Update</button> */}
        </div>
    )
}

export default Joke;