import * as actionTypes from '../actions/types'
import { updateObject } from "../shared/utility"


const initialState = {
    city: null,
}

const changeCity = (state, action) => {
    return updateObject(state, {city: state.city})
}

export default function(state = initialState, action) {
    switch(action.type) {

        case actionTypes.CHANGE_CITY: return changeCity(state, action)

        default: return state
    }
}