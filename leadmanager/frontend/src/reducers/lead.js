import { GET_LEAD, DELETE_LEAD } from "../actions/types.js";
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

        default:
            return state
    }
}