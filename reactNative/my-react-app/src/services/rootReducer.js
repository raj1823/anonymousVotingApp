import React from 'react'
import {createStore,combineReducers,applyMiddleware,compose} from 'redux'
import thunk  from 'redux-thunk'
import data_Reducer from './data/reducer'



const reducer= combineReducers({data_Reducer})

const store = createStore(
    
    reducer,
    applyMiddleware(thunk))

   
export default store