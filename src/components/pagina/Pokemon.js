import React ,{useState}from 'react'
import {UseFetch}from '../UseFetch'
import { Cards } from '../cards/Cards'



const Pokemon =()=>{
const [url, setUrl]= useState('https://pokeapi.co/api/v2/pokemon/')
const  estado=UseFetch (url)
const {cargando,data}=estado
cargando? console.log ('cargando'): console.log(data.results)
return (
    <div>
<h1> Esta es la pagina de Pokemon</h1>


{
    cargando?
    <h1> Cargando...</h1>:

    <div>
    <Cards results={data.results}/>
    <div className="container m-auto">

<button Onclick={()=>setUrl(data.previous)} className=" m-2  btn btn-dark">Anterior</button>
<button Onclick={()=>setUrl(data.next)} className=" m-2  btn btn-dark">Siguiente</button>
    </div>
</div>
}
    </div>
)



}
export default Pokemon


