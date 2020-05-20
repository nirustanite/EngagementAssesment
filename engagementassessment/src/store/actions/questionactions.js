import * as actionTypes from './actionTypes';
import { dispatch } from 'rxjs/internal/observable/range';

export const fetchQuestionCount = () => ({
    type: actionTypes.FETCH_QUESTION_COUNT
})

export const questionCount = (data) => ({
    type: actionTypes.QUESTION_COUNT,
    data
})

export const fetchQuestion = (id) =>{
    console.log("id inside action", id)
    return{
    type: actionTypes.FETCH_QUESTION,
    id
}
}

export const question = (data) => ({
    type: actionTypes.QUESTION,
    data
})