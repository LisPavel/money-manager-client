import { DateTime } from "luxon";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import TransactionsList from "../components/ui/transactions/transactionsList";
import accountsService from "../services/accounts.service";
import transactionsService from "../services/transactions.service";
import { isDateBetween } from "../utils/date";

const Transactions = () => {
    const [transactionsList, setTransactionsList] = useState([]);
    const [accountsList, setAccountsList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentDate, setCurrentDate] = useState(
        DateTime.now().setLocale("ru")
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

    const start = currentDate.startOf("month");
    const end = currentDate.endOf("month");

    const inCurrentMonth = isDateBetween(start, end);

    const filteredData = transactionsList.filter((t) => inCurrentMonth(t.date));

    if (loading) return "Loading ...";

    return (
        <div className="transactions flex flex-col gap-3 overflow-hidden max-h-full h-fit">
            <div className="flex mt-2 gap-4 mx-auto items-center">
                <button
                    className="px-2 py-1 bg-slate-500 text-slate-50 rounded"
                    onClick={() =>
                        setCurrentDate(currentDate.minus({ months: 1 }))
                    }
                >
                    Prev
                </button>
                <input
                    type="month"
                    onChange={(ev) =>
                        setCurrentDate(DateTime.fromISO(ev.target.value))
                    }
                    className="bg-transparent outline-none border-none"
                    value={currentDate.toFormat("yyyy-LL")}
                />
                <button
                    className="py-1 px-2 bg-slate-500 text-slate-50 rounded"
                    onClick={() =>
                        setCurrentDate(currentDate.plus({ months: 1 }))
                    }
                >
                    Next
                </button>
            </div>
            <TransactionsList
                items={filteredData}
                accountsList={accountsList}
            />
        </div>
    );
};

export default Transactions;
