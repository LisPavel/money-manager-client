import AssetPage from "../components/pages/assetPage.jsx/assetPage";
import AssetsListPage from "../components/pages/assetsListPage/assetsListPage";

const routes = {
    "/": {
        path: "/assets",
        exact: true,
        component: AssetsListPage,
    },
    "/asset": {
        path: "/assets/:id",
        component: AssetPage,
    },
};

export default routes;
