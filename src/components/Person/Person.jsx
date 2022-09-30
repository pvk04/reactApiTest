import React from "react";

function Person({name, height, mass, hair_color, skin_color, eye_color, birth_year, gender}){
    return(
        <div>
            <h1>{name}</h1>
            <p>{height}</p>
            <p>{mass}</p>
            <p>{hair_color}</p>
            <p>{skin_color}</p>
            <p>{eye_color}</p>
            <p>{birth_year}</p>
            <p>{gender}</p>
        </div>
    );
}

export default Person;