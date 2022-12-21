import React, { useEffect, useState } from "react";
import accountsService from "../services/accounts.service";

function Accounts() {
    const [assets, setAssets] = useState([]);
    useEffect(async () => {
        const { data } = await accountsService.getAssets();
        setAssets(data);
    }, []);
    return (
        <ul className="grid gap-3 p-2 list-none">
            {assets.map((asset) => (
                <li
                    key={asset._id}
                    className=" p-3  rounded-md shadow-md shadow-gray-400"
                >
                    <span className="text-2xl text-gray-700">{asset.name}</span>
                    <div className="grid grid-cols-3 mt-1">
                        <span>Today: </span>
                        <span>{asset.value}</span>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default Accounts;
