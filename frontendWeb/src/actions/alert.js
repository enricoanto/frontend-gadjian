import {SET_ALERT, REMOVE_ALERT} from "./type"

const setAlert = (msg, alertType) => dispatch => {
    dispatch({
        type: SET_ALERT,
        payload: {msg, alertType}
    }, {
        type: REMOVE_ALERT,
        payload: null
    })
}

export default setAlert