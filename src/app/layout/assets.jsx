import React from "react";
import { Route, Switch } from "react-router";
import routes from "../routes/assets";

function Assets() {
    return (
        <Switch>
            {Object.keys(routes).map((key) => (
                <Route {...routes[key]} key={key} />
            ))}
        </Switch>
    );
}

export default Assets;
