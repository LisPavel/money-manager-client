import React from "react";
import { useParams } from "react-router";

const AssetPage = () => {
    const params = useParams();
    console.log(params);
    return <h1>Asset page</h1>;
};

export default AssetPage;
