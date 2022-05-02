import { typesLogueo } from "../types/types";

export const logueoReducers =(state ={}, action)=>{
    switch (action.type) {
        case typesLogueo.logueo:
           return{
              id: action.payload.email,
               name: action.payload.password
           }
           case typesLogueo.logout:
            return{
                
            }
        default:
          return state
    }
}