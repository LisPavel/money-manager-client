import { groupBy } from "lodash";
import { DateTime } from "luxon";
import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
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

    const transactionsGroupedByDay = groupBy(transactions, (tr) =>
        DateTime.fromMillis(tr.date).startOf("day").toMillis()
    );
    return (
        <div className="transactions flex flex-col gap-3 overflow-hidden max-h-full h-fit text-slate-800">
            <div className="flex mt-2 gap-4 mx-auto items-center">
                <button
                    className="px-2 py-1 bg-slate-500 text-slate-50 rounded"
                    onClick={() =>
                        setCurrentDate(currentMonth.minus({ months: 1 }))
                    }
                >
                    Prev
                </button>
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
                <button
                    className="py-1 px-2 bg-slate-500 text-slate-50 rounded"
                    onClick={() =>
                        setCurrentDate(currentMonth.plus({ months: 1 }))
                    }
                >
                    Next
                </button>
            </div>
            <TransactionsByDay items={transactionsGroupedByDay} />
        </div>
    );
};

export default Transactions;
