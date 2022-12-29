import React, { useEffect, useState } from "react";
import { List, ListItem } from "../components/common/list";
import Currency from "../components/currency";
import accountsService from "../services/accounts.service";

const Income = () => {
    const [incomeList, setIncomeList] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(async () => {
        const { data } = await accountsService.getIncome();
        setIncomeList(data);
        setLoading(false);
    }, []);
    if (loading) return <>Loading...</>;
    return (
        <div className="income flex flex-col gap-3 overflow-hidden max-h-full h-fit p-10">
            <List className="shadow-slate-300 overflow-y-auto">
                {incomeList.map((income) => (
                    <ListItem key={income._id} className="p-3 border-slate-300">
                        <span className="text-base font-semibold">
                            {income.name}
                        </span>
                        <div className="flex justify-between mt-1 text-xs items-center">
                            <span>Today: </span>
                            <Currency value={income.amount} />
                        </div>
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default Income;
