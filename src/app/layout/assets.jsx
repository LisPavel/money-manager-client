import React, { useEffect, useState } from "react";
import List from "../components/common/list/list";
import ListItem from "../components/common/list/listItem";
import Currency from "../components/currency";
import accountsService from "../services/accounts.service";

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
        <div className="assets flex flex-col gap-3 overflow-hidden max-h-full h-fit">
            <div className="flex justify-between bg-slate-100 shadow-sm shadow-slate-300 text-slate-800 p-3 rounded-md items-center ">
                <span className="text-2xl font-semibold">Total:</span>
                <Currency value={total} />
            </div>
            <List className="shadow-slate-300 overflow-y-auto">
                {assets.map((asset) => (
                    <ListItem key={asset._id} className="p-3 border-slate-300">
                        <span className="text-base font-semibold">
                            {asset.name}
                        </span>
                        <div className="flex justify-between mt-1 text-xs items-center">
                            <span>Today: </span>
                            <Currency value={asset.amount} />
                        </div>
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default Accounts;
