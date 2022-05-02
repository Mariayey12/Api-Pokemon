import { typesRegistro } from "../types/types";

export const registroReducers =(state={}, action)=>{
    switch (action.type) {
        case typesRegistro.registro:
            return{
               email: action.payload.email, 
               pass: action.payload.pass,
               name: action.payload.name,
            }
            
             
        default:
           return state
    }
}