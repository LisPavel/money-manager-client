import { groupBy } from "lodash";
import { DateTime } from "luxon";
import React, { useEffect, useState, useMemo } from "react";
import TransactionsByDay from "../components/ui/transactions/transactionsByDay";
import accountsService from "../services/accounts.service";
import transactionsService from "../services/transactions.service";

const Transactions = () => {
    const [transactionsList, setTransactionsList] = useState([]);
    const [accountsList, setAccountsList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentMonth, setCurrentDate] = useState(
        DateTime.now().startOf("month").setLocale("ru")
    );

    useEffect(async () => {
        const [transactionsRes, accountsRes] = await Promise.all([
            transactionsService.fetchAll(),
            accountsService.fetchAll(),
        ]);

        setTransactionsList(transactionsRes.data);
        setAccountsList(accountsRes.data);
        setLoading(false);
    }, []);
    const groupedByMonthAndDay = useMemo(() => {
        console.log("recalc group by month");
        const groupedByMonth = groupBy(transactionsList, (tr) =>
            DateTime.fromMillis(tr.date).startOf("month").toMillis()
        );
        const groupedByMonthAndDay = Object.keys(groupedByMonth).reduce(
            (acc, month) => ({
                ...acc,
                [month]: groupBy(groupedByMonth[month], (tr) =>
                    DateTime.fromMillis(tr.date).startOf("day").toMillis()
                ),
            }),
            {}
        );

        return groupedByMonthAndDay;
    }, [transactionsList]);

    if (loading) return "Loading ...";

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
            <TransactionsByDay
                items={groupedByMonthAndDay[currentMonth.toMillis()]}
                accountsList={accountsList}
            />
        </div>
    );
};

export default Transactions;
