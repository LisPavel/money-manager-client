import React, { useEffect, useState } from "react";
import Currency from "../components/currency";
import accountsService from "../services/accounts.service";

const formatter = Intl.NumberFormat("ru");

function Accounts() {
    const [assets, setAssets] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(async () => {
        const { data } = await accountsService.getAssets();
        setAssets(data);
        setLoading(false);
    }, []);
    if (loading) return <>Loading...</>;
    const total = assets.reduce((sum, a) => (sum += a.amount), 0);
    return (
        <div className="assets grid gap-3 overflow-hidden ">
            <div className="flex justify-between bg-slate-100 shadow-sm shadow-slate-300 text-slate-800 p-3 rounded-md items-center ">
                <span className="text-2xl font-semibold">Total:</span>
                <Currency value={total} />
            </div>
            <ul className="grid list-none rounded-md bg-slate-100 shadow-sm shadow-slate-300 text-slate-800 overflow-y-auto">
                {assets.map((asset) => (
                    <li
                        key={asset._id}
                        className="p-3 border-slate-300 border-b last:border-b-0"
                    >
                        <span className="text-base font-semibold">
                            {asset.name}
                        </span>
                        <div className="grid grid-cols-2 mt-1 text-xs items-center">
                            <span>Today: </span>
                            <Currency value={asset.amount} />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Accounts;
