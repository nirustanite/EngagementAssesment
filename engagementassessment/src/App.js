import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, Component404, Header, Footer } from './components';
import './App.css';
 
export default class App extends Component{
    render(){
        return(
            <React.Fragment>
                 <div className="container">
                    <Header />
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route component={Component404} />
                    </Switch>
                    <Footer />
                </div>
            </React.Fragment>
        )
    }
}