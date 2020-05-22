import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, Component404, Header, QuestionContainer, ResultContainer} from './components';
import './App.css';
 
export default class App extends Component{
    render(){
        return(
            <React.Fragment>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/questions/:id" component={QuestionContainer} />
                        <Route exact path="/results" component={ResultContainer} />
                        <Route component={Component404} />
                    </Switch>
            </React.Fragment>
        )
    }
}