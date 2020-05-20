import request from 'superagent';
import {baseUrl} from '../../constants';
import { put } from 'redux-saga/effects';
import * as actions from '../actions';

export function* getQuestionCount(action){
   try{
       const response = yield request.get(`${baseUrl}/count`);
       yield put(actions.questionCount(response.body.total));
   }
   catch(error) {
       console.error(error)
   }
}


export function* getQuestion(action){
    console.log("action saga", action)
    try{
        const response = yield request.get(`${baseUrl}/questions/${action.id}`);
        yield put(actions.question(response.body));
    }
    catch(error) {
        console.error(error)
    }
 }