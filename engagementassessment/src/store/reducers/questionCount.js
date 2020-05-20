import * as actionTypes from '../actions/actionTypes';

const reducer = (state=0, action={}) =>{
    switch(action.type){
        case actionTypes.QUESTION_COUNT:
            return action.data
        default:
            return state
    }
}

export default reducer;