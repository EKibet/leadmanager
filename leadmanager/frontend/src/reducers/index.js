import { combineReducers } from "redux";
import lead from './lead'
import errors from "./errors";
import messages from './messages'
export default combineReducers({
    lead,
    errors,
    messages
})