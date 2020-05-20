import { combineReducers } from 'redux';
import questionCount from './questionCount';
import question from './question';

export default combineReducers({
    question,
    questionCount,
})