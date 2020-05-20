import { takeEvery } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import { getQuestionCount, getQuestion } from './questionsaga';

export function* watchgetQuestionCount(){
    yield takeEvery(actionTypes.FETCH_QUESTION_COUNT, getQuestionCount);
}

export function* watchgetQuestion(){
    yield takeEvery(actionTypes.FETCH_QUESTION, getQuestion);
}