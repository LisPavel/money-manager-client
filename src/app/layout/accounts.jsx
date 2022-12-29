import React, { useEffect, useState } from "react";
import accountsService from "../services/accounts.service";

const formatter = Intl.NumberFormat("ru");

function Accounts() {
    const [assets, setAssets] = useState([]);
    useEffect(async () => {
        const { data } = await accountsService.getAssets();
        setAssets(data);
    }, []);
    return (
        <ul className="grid m-5 list-none rounded-md bg-slate-100 shadow-sm shadow-slate-300">
            {assets.map((asset) => (
                <li
                    key={asset._id}
                    className="p-3 border-slate-300 border-b last:border-b-0"
                >
                    <span className="text-base text-gray-700">
                        {asset.name}
                    </span>
                    <div className="grid grid-cols-3 mt-1 text-xs">
                        <span>Today: </span>
                        <span>{formatter.format(asset.amount)}</span>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default Accounts;
