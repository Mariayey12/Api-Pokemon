import React from "react";
import { UseFetch } from "../UseFetch";

import Modal from "./Modal";

export const Item = ({ url }) => {
  const estado = UseFetch(url);
  const { cargando,data } = estado;
  return (
    <div>
      {cargando? 
        <h1>Cargando</h1>
       : 
        <div className="card" style={{ width: "14rem" }}  data-bs-toggle="modal" data-bs-target={ `#id${data.id}`}>
          <div className="card-header">
            <h5 className="card-title" >{data.id}</h5>
          </div>
          <div className="card-body" > 
            <img src={data.sprites.front_default} alt="pokemon"/>
           
          </div>

          <div className="card-footer">

            <p className="card-text text-capitalize" >{data.name} </p>
           
          </div>
          <Modal id={`id${data.id}`}  titulo={data.name}   contenido={data.effect_entries} />
        </div>
      }
    </div>
  );
};
