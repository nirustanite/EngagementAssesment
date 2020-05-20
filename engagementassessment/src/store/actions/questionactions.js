import * as actionTypes from './actionTypes';

export const fetchQuestionCount = () => ({
    type: actionTypes.FETCH_QUESTION_COUNT
})

export const questionCount = (data) => ({
    type: actionTypes.QUESTION_COUNT,
    data
})

export const fetchQuestion = (id) =>{
    return{
    type: actionTypes.FETCH_QUESTION,
    id
}
}

export const question = (data) => ({
    type: actionTypes.QUESTION,
    data
})