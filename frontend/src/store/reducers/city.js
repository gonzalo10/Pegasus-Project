import * as actionTypes from '../actions/actions'

const initialState = {
    city: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_CITY:
  
        default:
            return state;
    }
    return state;
}

export default reducer;