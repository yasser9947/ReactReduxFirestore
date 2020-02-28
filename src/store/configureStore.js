import {createStore} from 'redux'
import testReducer from '../features/test/testReducer'
import eventReducer from '.././features/event/eventReducer'
import rootReduscer from '../reducer/rootReducer'
export const configurStore =()=>{

    const store = createStore(rootReduscer
        )

    return store
}