import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, NavLink, Route, Switch} from "react-router-dom";

import Main from "./components/Main";
import NotFound from "./components/NotFound";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <nav>
                    <ul>
                        <li><NavLink exact to="/" activeStyle={{fontWeight: "bold", color: "red"}}>All</NavLink></li>
                        <li><NavLink to="/done" activeStyle={{fontWeight: "bold", color: "red"}}>Done</NavLink></li>
                        <li><NavLink to="/not-done" activeStyle={{fontWeight: "bold", color: "red"}}>Not Done</NavLink></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/:filter?" component={Main} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </Provider>
    )
}

ReactDOM.render(<App />, document.getElementById("app"));
