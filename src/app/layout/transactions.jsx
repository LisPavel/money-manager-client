import { DateTime } from "luxon";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/common/button";
import TransactionsByDay from "../components/ui/transactions/transactionsByDay";
import {
    getTransactionsByMonth,
    getTransactionsLoadingStatus,
    loadTransactions,
} from "../store/transactions";

const Transactions = () => {
    const dispatch = useDispatch();
    const [currentMonth, setCurrentDate] = useState(
        DateTime.now().startOf("month").setLocale("ru")
    );
    useEffect(() => {
        dispatch(loadTransactions());
    }, []);
    const transactionsLoading = useSelector(getTransactionsLoadingStatus());
    const transactions = useSelector(
        getTransactionsByMonth(currentMonth.toMillis())
    );

    if (transactionsLoading) return "Loading...";

    return (
        <div className="transactions flex flex-col gap-3 overflow-hidden max-h-full h-fit text-slate-800">
            <div className="flex mt-2 gap-4 mx-auto items-center">
                <Button
                    onClick={() =>
                        setCurrentDate(currentMonth.minus({ months: 1 }))
                    }
                >
                    Prev
                </Button>
                <input
                    type="month"
                    onChange={(ev) =>
                        setCurrentDate(
                            DateTime.fromISO(ev.target.value).startOf("month")
                        )
                    }
                    className="bg-transparent outline-none border-none"
                    value={currentMonth.toFormat("yyyy-LL")}
                />
                <Button
                    onClick={() =>
                        setCurrentDate(currentMonth.plus({ months: 1 }))
                    }
                >
                    Next
                </Button>
            </div>
            <TransactionsByDay items={transactions} />
        </div>
    );
};

export default Transactions;
