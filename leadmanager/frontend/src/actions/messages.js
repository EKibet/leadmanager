import { CREATE_MESSAGES } from './types';
// create message
export const createMessage = msg =>{
    return{
        type: CREATE_MESSAGES,
        payload : msg
    }
}
