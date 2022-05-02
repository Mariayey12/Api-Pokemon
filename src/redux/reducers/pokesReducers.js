import { typesPokes } from "../types/types";

const initialState = {
    pokes: []
}

export const pokesReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesPokes.add:
            return {
                pokes: [action.payload]
            }
         case typesPokes.addFormik:
                return {
                    pokes: [action.payload]
                }
        case typesPokes.list:
            return {
                pokes: [...action.payload]
            }

        case typesPokes.edit:
            return {
                ...state
            }

        case typesPokes.delete:
            return {
                pokes: state.pokes.filter(poke => poke.codigo !== action.payload)
            }
            case typesPokes.search:
                return {
                    pokes: action.payload
                }   
        default:
            return state
    }

}