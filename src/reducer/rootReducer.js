import {combineReducers} from 'redux' ; 
import eventReducer from '../features/event/eventReducer';
// import  ; 

const rootReduscer = combineReducers({

    events : eventReducer
})

export default rootReduscer