import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Header from './Layout/Header'
import Dashboard from './leads/Dashboard';
import { Provider } from "react-redux";
import store from '../store'
class App extends Component {
    state = {}
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <Header />
                    <div className="container">
                        <Dashboard />
                    </div>
                </Fragment>

            </Provider>

        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));