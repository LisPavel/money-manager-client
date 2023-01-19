import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router";
import App from "./app/app";
import { createStore } from "./app/store/createStore";
import history from "./app/utils/history";
import "./index.css";

const store = createStore();

const root = document.getElementById("root");
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router history={history}>
                <App />
            </Router>
        </Provider>
    </React.StrictMode>,
    root
);
