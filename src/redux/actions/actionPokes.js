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
   // console.log(codigo, planta)
    return async (dispatch)=>{
        const  colleccionTraer = collection(baseDato, "plantasBD")
        const q = query(colleccionTraer, where("codigo", "==", codigo))
        const traerDatosQ = await getDocs(q)
        let id
        traerDatosQ.forEach( async (docu)=>{
            id= docu.id
        })
        console.log(id)
        const documenRef = doc(baseDato, "plantasBD", id)
       await updateDoc(documenRef, planta)
        .then(resp => {
            dispatch(editSync(planta))
         
            console.log(resp)
         })       
        .catch((err) => console.log(err))
        dispatch(listAsyn())
    }
}


export const editSync = (planta)=>{
    return{
        type: typesPlantas.edit,
        payload: planta
    }
   
}

//-------------------delete--------------------//
export const deleteAsync = (codigo)=>{
  
    return async (dispatch)=>{
        const  colleccionTraer = collection(baseDato , "plantasBD")
        const q = query(colleccionTraer, where("codigo", "==", codigo))
        const traerDatosQ = await getDocs(q)
        traerDatosQ.forEach((docum =>{
            deleteDoc(doc(baseDato, "plantasBD", docum.id))
        }))
        dispatch(deleteSync(codigo))
        dispatch(listAsyn())
    } 
}

export const deleteSync = (codigo)=>{
    return{
        type: typesPlantas.delete,
        payload: codigo
    }
   
}

//---------------listar----------------//
export const listAsyn =()=>{
    return async (dispatch)=>{
        const  colleccionTraer = await getDocs(collection(baseDato , "plantasBD"))
        const plantas = []
        colleccionTraer.forEach((doc)=>{
            plantas.push({
                ...doc.data()
                

            })
        })
        dispatch(listSync(plantas))
        
    }
}

export const listSync = (planta)=>{
    return{
        type: typesPlantas.list ,
        payload: planta 
    }
   
}

//-------------agregar---------------//
export const addAsync =(planta)=>{
    return(dispatch)=>{
        addDoc(collection(baseDato, "plantasBD"), planta)
        .then(resp =>{
            dispatch(addSync(planta))
          //  dispatch(listAsyn())
        })
        .catch(error=>{
            console.warn(error);
        })
}
}

export const addSync =(planta)=>{
    return{
        type: typesPlantas.add,
        payload: planta,
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
        type: typesPlantas.addFormik,
        payload: user,
    }
}