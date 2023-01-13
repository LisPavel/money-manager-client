import React from "react";

const TransactionInfo = ({ data, accountsList }) => {
    const asset = accountsList.find(({ _id }) => _id === data.credit);
    const expense = accountsList.find(({ _id }) => _id === data.debit);
    return (
        <div>
            <small>{asset?.name ?? data.debit}</small>
            {"->"}
            <small>{expense?.name ?? data.credit}</small>
            <small>{data.amount}</small>
        </div>
    );
};

export default TransactionInfo;
