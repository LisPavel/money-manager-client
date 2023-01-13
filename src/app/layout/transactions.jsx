import React, { useEffect, useState } from "react";
import TransactionsList from "../components/ui/transactions/transactionsList";
import accountsService from "../services/accounts.service";
import transactionsService from "../services/transactions.service";

const Transactions = () => {
    const [transactionsList, setTransactionsList] = useState([]);
    const [accountsList, setAccountsList] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(async () => {
        const [transactionsRes, accountsRes] = await Promise.all([
            transactionsService.fetchAll(),
            accountsService.fetchAll(),
        ]);

        setTransactionsList(transactionsRes.data);
        setAccountsList(accountsRes.data);
        setLoading(false);
    }, []);
    if (loading) return "Loading ...";
    return (
        <div className="transactions flex flex-col gap-3 overflow-hidden max-h-full h-fit">
            <TransactionsList
                items={transactionsList}
                accountsList={accountsList}
            />
        </div>
    );
};

export default Transactions;
