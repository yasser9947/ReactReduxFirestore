import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT } from "./eventConstens"


export const createEvent = (event) =>{

    return {
        type : CREATE_EVENT ,
        payload : {
            event
        }
    }
}

export const updateEvent = (event) =>{

    return {
        type : UPDATE_EVENT ,
        payload : {
            event
        }
    }
}

export const deletEvent = (eventId) =>{

    return {
        type : DELETE_EVENT ,
        payload : {
            eventId
        }
    }
}