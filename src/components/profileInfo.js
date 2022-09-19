import React from "react";
import ProfPic from "../images/profPric2.png"

const Info = () => {
    return (
        <div style={{padding: "15%", color: "gray"}}>
            <img src={ProfPic} width="65%" style={{borderRadius: "30%", border: "solid lightblue 4px"}}/>
            <h2>Bojan Dukovski</h2>
            <p>Hello, hope you enjoy.</p>
            <p>Please keep in mind this webpage is built by my own. If there is any bugs or things i should fix please contact me on my social media. Thanks :)</p> 
        </div>
    )
};

export default Info;