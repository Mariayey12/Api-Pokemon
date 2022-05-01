import React from 'react';
import {UseFetch} from '../UseFetch'


export const  CardPokemon =({url})=>{

    const  estado=UseFetch (url)
    const {cargando,data}=estado
    return (
        <div>
    cargando?
    <h1>Cargando</h1>:
    <div className='caard' style={{width:'14rem'}}></div>
    <></>
    
        </div>
    )


}