import React, {useState} from "react";
import { useEffect } from "react";
import Character from "../utils/Character";

const Game = () => {

    useEffect(()=>{},[])

    const character1 = new Character('Garvin');

    return (
        <>
            <div>Name: {character1.getName()}</div>
            <div>HP: {character1.currentHp}</div>
        </>
    )
}

export default Game
