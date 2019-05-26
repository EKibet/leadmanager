import { CREATE_MESSAGES, GET_ERRORS } from './types';
// create message
export const createMessage = msg =>{
    return{
        type: CREATE_MESSAGES,
        payload : msg
    }
}
//dispatch function as acton to return errors instead of 
export const returnErrors = (msg,status)=>{
    return{
        type:GET_ERRORS,
        payload:{msg,status}
    }
}