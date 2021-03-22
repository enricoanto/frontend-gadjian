import {SET_PREVIOUS_PAGE_BUTTON, SET_NEXT_PAGE_BUTTON, SET_CURRENT_PAGE, SET_PERSONNELS_PER_PAGE} from "./type"

const setPage = (payload) => dispatch => {
    dispatch({
        type: SET_PREVIOUS_PAGE_BUTTON,
        payload
    }, {
        type: SET_NEXT_PAGE_BUTTON,
        payload
    }, {
        type: SET_CURRENT_PAGE,
        payload 
    }, {
        type: SET_PERSONNELS_PER_PAGE,
        payload
    })
}

export default setPage