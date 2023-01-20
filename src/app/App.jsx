import React from "react";
import { Route, Switch } from "react-router";
import AppLoader from "./components/ui/hoc/appLoader";
import NavBar from "./components/ui/navBar";
import routes from "./routes";

function App() {
    return (
        <AppLoader>
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
        </AppLoader>
    );
}

export default App;
