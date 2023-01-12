import React from "react";
import { Route, Switch } from "react-router";
import NavBar from "./components/ui/navBar";
import Accounts from "./layout/assets";
import Expenses from "./layout/expenses";
import Income from "./layout/income";
import routes from "./router";

function App() {
    return (
        <div className="grid h-screen bg-slate-50">
            <NavBar items={routes} />
            <div className=" h-full container">
                <Switch>
                    {Object.keys(routes).map((key) => {
                        const route = routes[key];
                        return <Route {...route} key={key} />;
                    })}
                </Switch>
            </div>
        </div>
    );
}

export default App;
