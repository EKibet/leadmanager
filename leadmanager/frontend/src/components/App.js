import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Header from './Layout/Header'
import Dashboard from './leads/Dashboard';
import Alerts from './Layout/alerts';

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from 'react-alert-template-basic';
import { Provider } from "react-redux";
import store from '../store'
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
                    <Fragment>
                        <Header />
                        <Alerts />
                        <div className="container">
                            <Dashboard />
                        </div>
                    </Fragment>
                </AlertProvider>
            </Provider>

        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));