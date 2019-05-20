import * as actionTypes from "./types"


export const storeCity= ( city ) => {
    return {
        type: actionTypes.CHANGE_CITY,
        city: city
    };
};