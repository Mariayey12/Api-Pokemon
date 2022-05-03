import React ,{useState}from 'react'
import {UseFetch}from '../UseFetch'
import { CardItem } from '../cards/CardItem'



const Items =()=>{
const [url, setUrl]= useState('https://pokeapi.co/api/v2/pokemon/')
const  estado=UseFetch (url)
const {cargando,data}=estado
cargando? console.log ('cargando'): console.log(data.results)
return (
    <div>
<h1>Items</h1>


{
    cargando?
    <h1> Cargando...</h1>:

    <div>
    <CardItem results={data.results}/>
    <div className="container m-auto">
    
   

<button onClick={()=>setUrl(data.previous)} className="m-1  btn btn-dark">Anterior</button>
<button onClick={()=>setUrl(data.next)} className="m-1  btn btn-dark">Siguiente</button>
    </div>
</div>
}
    </div>
)



}
export default Items


