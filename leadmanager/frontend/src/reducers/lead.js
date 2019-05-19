import { GET_LEAD, DELETE_LEAD, ADD_LEAD } from "../actions/types.js";
const initialState = {
    lead: []
}
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_LEAD:
            return {
                ...state, //include everything in state
                lead: action.payload


            }
        case DELETE_LEAD:
            return {
                ...state, //include everything in state
                lead: state.lead.filter(item => item.id !== action.payload)
            }
        case ADD_LEAD:
            return {
                ...state,
                lead: [...state.lead,action.payload]
            }
        default:
            return state
    }
}