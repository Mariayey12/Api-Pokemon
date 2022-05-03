import React from "react";
import '../../../style/main.css';
import {Item} from "./Item"


export const CardItem = ({ results }) =>{
  return (
    <div className="container">
      <ul className="items">
        {
        results.map(p=> (
          <li className="item" key={p.name}>
            <Item url={p.url} />  
             
          </li>
          
          
        )
      
      )
        }
      </ul>
    </div>
  )
}



