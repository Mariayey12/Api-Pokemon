import React from "react";
import { CardPokemon } from "./CardPokemon";
import '../../../style/main.css';

export const Cards = ({ results }) =>{
  return (
    <div className="container">
      <ul className="cards">
        {
        results.map(poke => (
          <li className="card-item" key={poke.name}>
            <CardPokemon url={poke.url} />   
          </li>
        )
      
      )
        }
      </ul>
    </div>
  )
}
