import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Header from './Layout/Header'
import Dashboard from './leads/Dashboard';
import Alerts from './Layout/alerts';

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from 'react-alert-template-basic';
import { Provider } from "react-redux";
import store from '../store'
import { HashRouter as Router,Route,Switch,Redirect } from "react-router-dom";
const alertOptions = {
    timeout: 3000,
    position: 'top center'
}
class App extends Component {
    state = {}
    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate}{...alertOptions}>
                    <Router>

                    <Fragment>
                        <Header />
                        <Alerts />
                        <div className="container">
                        <Switch>
                            <Route exact path="/" component ={Dashboard}></Route>
                        </Switch>
                        </div>
                    </Fragment>
                    </Router>
                </AlertProvider>
            </Provider>

        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));