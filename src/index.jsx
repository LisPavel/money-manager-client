import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router";
import App from "./app/app";
import history from "./app/utils/history";
import "./index.css";

const root = document.getElementById("root");
ReactDOM.render(
    <React.StrictMode>
        <Router history={history}>
            <App />
        </Router>
    </React.StrictMode>,
    root
);
