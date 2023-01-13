import React from "react";
import { Route, Switch } from "react-router";
import NavBar from "./components/ui/navBar";
import Assets from "./layout/assets";
import Expenses from "./layout/expenses";
import Income from "./layout/income";
import Main from "./layout/main";
import routes from "./router";

function App() {
    return (
        <div className="h-screen bg-slate-50 flex flex-col">
            <NavBar items={routes} />
            <div className="container mx-auto  overflow-hidden">
                <Switch>
                    {/* <Route component={Main} path="/" exact={true} />
                    <Route component={Income} path="/income" /> */}
                    {Object.keys(routes).map((key) => (
                        <Route {...routes[key]} key={key} />
                    ))}
                </Switch>
            </div>
        </div>
    );
}

export default App;
