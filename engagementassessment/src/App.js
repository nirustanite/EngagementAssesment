import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, Component404, Header, Footer,QuestionContainer } from './components';
import './App.css';
 
export default class App extends Component{
    render(){
        return(
            <React.Fragment>
                 <div className="container">
                    <Header />
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/questions/:id" component={QuestionContainer} />
                        <Route component={Component404} />
                    </Switch>
                   
                </div>
            </React.Fragment>
        )
    }
}