import React ,{useState}from 'react'
import {UseFetch}from '../UseFetch'



const Pokemon =()=>{
const [url,setUrl]= useState('https://pokeapi.co/')
const  estado=UseFetch (url)
const {cargando,data}=estado
cargando? console.log ('cargando'): console.log(data.results)
return (
    <div>
<h1> Esta es la pagina de Pokemon</h1>

    </div>
)



}
export default Pokemon


