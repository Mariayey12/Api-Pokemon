import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { logueoReducers } from "../reducers/logueoReducers";
import { pokesReducers } from "../reducers/pokesReducers";
import { registroReducers } from "../reducers/registroReducers";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducersEnviar = combineReducers({
        login: logueoReducers,
        register: registroReducers,
        plantas: pokesReducers,
   

})

export const store= createStore(
    reducersEnviar,
        composeEnhancers(
        applyMiddleware(thunk)
    )
)