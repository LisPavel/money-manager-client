import React from "react";
import { useSelector } from "react-redux";
import { List, ListItem } from "../components/common/list";
import { getIncome } from "../store/accounts";

const Income = () => {
    const incomeList = useSelector(getIncome());
    return (
        <div className="income flex flex-col gap-3 overflow-hidden max-h-full h-fit">
            <List className="shadow-slate-300 overflow-y-auto">
                {incomeList.map((income) => (
                    <ListItem key={income._id} className="p-3 border-slate-300">
                        <span className="text-base font-semibold">
                            {income.name}
                        </span>
                        <div className="flex justify-between mt-1 text-xs items-center">
                            <small>{income.description}</small>
                        </div>
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default Income;
