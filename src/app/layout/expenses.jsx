import React from "react";
import { useSelector } from "react-redux";
import { List, ListItem } from "../components/common/list";
import { getExpenses } from "../store/accounts";

const Expenses = () => {
    const expensesList = useSelector(getExpenses());
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
                        <p className="text-sm mt-1">{expense.description}</p>
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default Expenses;
