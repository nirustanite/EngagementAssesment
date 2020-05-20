import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, Component404 } from './components';
 
export default class App extends Component{
    render(){
        return(
            <React.Fragment>
                
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route component={Component404} />
                    </Switch>
               
                
            </React.Fragment>
        )
    }
}