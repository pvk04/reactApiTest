import React from "react";

import styles from "./Person.module.css";

function Person({name, height, mass, hair_color, skin_color, eye_color, birth_year, gender}){
    return(
        <div className={styles.personWrap}>
            <div className={styles.personInfo}>
                <h1 className={styles.personName}>{name}</h1>
                <p>Height: {height}</p>
                <p>Mass: {mass}</p>
                <p>Hair color: {hair_color}</p>
                <p>Skin color: {skin_color}</p>
                <p>Eye color: {eye_color}</p>
                <p>Birth year: {birth_year}</p>
                <p>Gender: {gender}</p> 
            </div>
            
        </div>
    );
}

export default Person;