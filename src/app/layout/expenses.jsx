import React, { useEffect, useState } from "react";
import { List, ListItem } from "../components/common/list";
import Currency from "../components/currency";
import accountsService from "../services/accounts.service";

const Expenses = () => {
    const [expensesList, setExpensesList] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(async () => {
        const { data } = await accountsService.getExpenses();
        setExpensesList(data);
        setLoading(false);
    }, []);
    if (loading) return <>Loading...</>;
    return (
        <div className="expenses flex flex-col gap-3 overflow-hidden max-h-full h-fit">
            <List className="shadow-slate-300 overflow-y-auto">
                {expensesList.map((expense) => (
                    <ListItem
                        key={expense._id}
                        className="p-3 border-slate-300"
                    >
                        <span className="text-base font-semibold">
                            {expense.name}
                        </span>
                        <div className="flex justify-between mt-1 text-xs items-center">
                            <span>Today: </span>
                            <Currency value={expense.amount} />
                        </div>
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default Expenses;
