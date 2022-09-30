import React from "react";

// const BaseUrl = "https://swapi.dev/api/";

async function GetData(){
    // const data = fetch(BaseUrl + url)
    // .then((res) => res.json())
    // .then((json) => {console.log(json)});
    fetch("https://swapi.dev/api/people/1/")
    .then((response) => response.json())
    .then((json) => console.log(json))
    return(
        <div>
            123
        </div>
    );
}

export default GetData;