import {SET_PERSONNEL, SET_SEARCH} from "./type"

const setPersonnels = (payload) => dispatch => {
    dispatch({
        type: SET_PERSONNEL,
        payload: payload
    }, {
        type: SET_SEARCH,
        payload: payload
    })
}

export default setPersonnels