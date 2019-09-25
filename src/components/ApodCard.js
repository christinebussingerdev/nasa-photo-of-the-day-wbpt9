import React from 'react';

export default function ApodCard(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <img src={props.imgsrc} alt={props.title}/>
            <p>{props.explanation}</p>
        </div>
    )
}
