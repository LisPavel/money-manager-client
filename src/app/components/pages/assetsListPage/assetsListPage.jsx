import React from "react";
import Currency from "../../currency";
import { List, ListItem } from "../../common/list";
import { useSelector } from "react-redux";
import { getAssets } from "../../../store/accounts";
import Button from "../../common/button";
import { useRouteMatch } from "react-router";
import { Link } from "react-router-dom";

const AssetsListPage = () => {
    const assets = useSelector(getAssets());
    console.log(assets);
    const total = assets.reduce((sum, a) => (sum += a.amount), 0);
    const getCurrencyColor = (value) => {
        if (value > 0) {
            return "text-green-500";
        }
        if (value < 0) {
            return "text-red-500";
        }
        return "text-slate-800";
    };
    const { path } = useRouteMatch();

    return (
        <div className="flex gap-3 overflow-hidden h-full w-full items-baseline text-slate-800 ">
            <div className="flex flex-col gap-3 overflow-hidden max-h-full h-fit w-full">
                <div className="flex justify-between bg-slate-100 shadow-sm shadow-slate-300 p-3 rounded-md items-center ">
                    <span className="text-2xl font-semibold">Total:</span>
                    <Currency
                        value={total}
                        className={getCurrencyColor(total)}
                    />
                </div>
                <List className="shadow-slate-300 overflow-y-auto">
                    {assets.map((asset) => (
                        <ListItem
                            key={asset._id}
                            className="p-3 border-slate-300"
                        >
                            <span className="text-base font-semibold">
                                {asset.name}
                            </span>
                            <div className="flex justify-between mt-1 text-xs items-center border-0 border-b border-slate-300 pb-1">
                                <span>Today: </span>
                                <Currency
                                    value={asset.amount}
                                    className={getCurrencyColor(asset.amount)}
                                />
                            </div>
                        </ListItem>
                    ))}
                </List>
            </div>
            <Link
                to={`${path}/new`}
                className="p-2 rounded bg-slate-500 no-underline visited:text-slate-50  text-slate-50"
            >
                Add
            </Link>
        </div>
    );
};

export default AssetsListPage;
