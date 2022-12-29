import React from "react";
import Accounts from "./layout/assets";
import Expenses from "./layout/expenses";
import Income from "./layout/income";

function App() {
    return (
        <div className="grid h-screen bg-slate-50">
            <div className="grid h-full container mx-auto overflow-hidden">
                <Expenses />
            </div>
        </div>
    );
}

export default App;
