import Assets from "../layout/assets";
import Expenses from "../layout/expenses";
import Income from "../layout/income";
import Main from "../layout/main";

const routes = {
    "/": {
        path: "/",
        exact: true,
        component: Main,
        name: Main.name,
    },
    "/expenses": {
        path: "/expenses",
        component: Expenses,
        name: Expenses.name,
    },
    "/income": {
        path: "/income",
        component: Income,
        name: Income.name,
    },
    "/assets": {
        path: "/assets",
        component: Assets,
        name: Assets.name,
    },
};

export default routes;
