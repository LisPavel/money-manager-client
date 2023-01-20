import { nanoid } from "nanoid";
import React from "react";
import { useParams } from "react-router";
import history from "../../../utils/history";
import Button from "../../common/button";

const AssetPage = () => {
    const params = useParams();
    const { id } = params;

    return (
        <form
            className=" p-3 shadow-md shadow-slate-400 m-3 bg-slate-100 rounded-md text-slate-800 grid gap-4"
            onSubmit={(ev) => ev.preventDefault()}
        >
            <div className="flex justify-between">
                <Button
                    onClick={() => history.push("/assets")}
                    className="bg-transparent hover:bg-transparent disabled:bg-transparent active:bg-transparent"
                >
                    Cancel
                </Button>
                <Button>Save</Button>
            </div>
            <label className="block relative">
                <input
                    type="text"
                    className="peer bg-transparent outline-none w-full p-1 rounded border border-slate-500 focus:border-sky-600 "
                    name="name"
                />
                <span className="absolute top-0 left-0 -translate-y-3/4 text-xs bg-slate-100 px-1 mx-1 peer-focus:text-sky-600">
                    Asset name
                </span>
            </label>
            <label className="block relative">
                <input
                    type="number"
                    className="peer bg-transparent outline-none w-full p-1 rounded border border-slate-500 focus:border-sky-600 inpu"
                    name="amount"
                />
                <span className="absolute top-0 left-0 -translate-y-3/4 text-xs bg-slate-100 px-1 mx-1 peer-focus:text-sky-600">
                    {id === "new" ? "Initial value" : "Value"}
                </span>
            </label>
            <label className="block relative">
                <textarea
                    className="peer bg-transparent outline-none w-full p-1 rounded border border-slate-500 focus:border-sky-600 "
                    name="amount"
                    rows={3}
                />
                <span className="absolute top-0 left-0 -translate-y-3/4 text-xs bg-slate-100 px-1 mx-1 peer-focus:text-sky-600">
                    Description
                </span>
            </label>
        </form>
    );
};

export default AssetPage;
