import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { baseDato } from "../../Firebase/firebaseConfig"
import { typesPokes } from "../types/types"


//--------------Search------------------//
export const searchAsync = (search)=>{
    return async(dispatch)=>{
        const traerPokemon = collection(baseDato, "pokemonBD")
        const q = query(traerPokemon, where("nombre", ">=", search), where("nombre", "<=", search + '~'))
        const datosPokemon = await getDocs(q)
 
        const pokemon = []
        datosPokemon.forEach((docu =>{
            pokemon.push(docu.data())
        }))
        dispatch(searchSync(pokemon))
    }
}

export const searchSync = (pokesBuscar)=>{
    return{
        type: typesPokes.search,
        payload: pokesBuscar
    }
}


//---------------------Edit-----------//
export const editAsync = (codigo, poke)=>{
   
    return async (dispatch)=>{
        const  colleccionTraer = collection(baseDato, "plantasBD")
        const q = query(colleccionTraer, where("codigo", "==", codigo))
        const traerDatosQ = await getDocs(q)
        let id
        traerDatosQ.forEach( async (docu)=>{
            id= docu.id
        })
        console.log(id)
        const documenRef = doc(baseDato, "pokemonBD", id)
       await updateDoc(documenRef, poke)
        .then(resp => {
            dispatch(editSync(poke))
         
            console.log(resp)
         })       
        .catch((err) => console.log(err))
        dispatch(listAsyn())
    }
}


export const editSync = (poke)=>{
    return{
        type: typesPokes.edit,
        payload: poke
    }
   
}

//-------------------delete--------------------//
export const deleteAsync = (codigo)=>{
  
    return async (dispatch)=>{
        const  colleccionTraer = collection(baseDato , "pokemonBD")
        const q = query(colleccionTraer, where("codigo", "==", codigo))
        const traerDatosQ = await getDocs(q)
        traerDatosQ.forEach((docum =>{
            deleteDoc(doc(baseDato, "pokemonBD", docum.id))
        }))
        dispatch(deleteSync(codigo))
        dispatch(listAsyn())
    } 
}

export const deleteSync = (codigo)=>{
    return{
        type: typesPokes.delete,
        payload: codigo
    }
   
}

//---------------listar----------------//
export const listAsyn =()=>{
    return async (dispatch)=>{
        const  colleccionTraer = await getDocs(collection(baseDato , "pokemonBD"))
        const pokemons = []
        colleccionTraer.forEach((doc)=>{
            pokes.push({
                ...doc.data()
                

            })
        })
        dispatch(listSync(pokes))
        
    }
}

export const listSync = (poke)=>{
    return{
        type: typesPokes.list ,
        payload: poke 
    }
   
}

//-------------agregar---------------//
export const addAsync =(poke)=>{
    return(dispatch)=>{
        addDoc(collection(baseDato, "pokemonBD"), poke)
        .then(resp =>{
            dispatch(addSync(poke))
          //  dispatch(listAsyn())
        })
        .catch(error=>{
            console.warn(error);
        })
}
}

export const addSync =(poke)=>{
    return{
        type: typesPokes.add,
        payload: poke,
    }
}



//--------------Agregar desde formik---------------------//

export const addFormikAsync=(user)=>{
    return(dispatch)=>{
        addDoc(collection(baseDato, "User"), user)
        .then(resp =>{
            dispatch(addFormikSync(user))
          //  dispatch(listAsyn())
        })
        .catch(error=>{
            console.warn(error);
        })
}
}

export const addFormikSync =(user)=>{
    return{
        type: typesPokes.addFormik,
        payload: user,
    }
}