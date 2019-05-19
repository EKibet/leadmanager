import axios from 'axios'
import { GET_LEAD, DELETE_LEAD,ADD_LEAD } from "./types";
// GET leads
export const getLead = () => dispatch => {
    axios.get('/api/leads/').then(
        res => {
            dispatch(
                {
                    type: GET_LEAD,
                    payload: res.data
                }
            );
    
        }
    )
    .catch(err => console.log(err))
}
// Delete lead
export const deleteLead = (id) => dispatch => {
    axios.delete(`/api/leads/${id}/`).then(
        res => {
            dispatch(
                {
                    type: DELETE_LEAD,
                    payload: id
                }
            );
    
        }
    )
    .catch(err => console.log(err))
}
export const addLead = (lead) => dispatch => {
    axios.post('/api/leads/', lead).then(
        res => {
            dispatch(
                {
                    type: ADD_LEAD,
                    payload: res.data
                }
            );
            console.log(res.data)

        }
    )
    .catch(err => console.log(err))
}