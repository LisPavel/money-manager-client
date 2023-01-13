import React from "react";
import PropTypes from "prop-types";
import Currency from "../../currency";

const TransactionInfo = ({ data, accountsList }) => {
    const creditAccount = accountsList.find(({ _id }) => _id === data.credit);
    const debitAccount = accountsList.find(({ _id }) => _id === data.debit);
    const getCurrencyColor = (creditAccount, debitAccount) => {
        if (
            (creditAccount.type === "income" &&
                debitAccount.type === "asset") ||
            (debitAccount.type === "asset" && creditAccount.type === "expense")
        ) {
            return "text-green-500";
        }
        if (
            (creditAccount.type === "asset" &&
                debitAccount.type === "expense") ||
            (debitAccount.type === "income" && creditAccount.type === "asset")
        ) {
            return "text-red-500";
        }
    };

    return (
        <div className="flex flex-col items-end">
            <Currency
                value={data.amount}
                className={getCurrencyColor(creditAccount, debitAccount)}
            />
            <div className="text-slate-500 italic ">
                <small data-type={creditAccount.type}>
                    {creditAccount?.name ?? data.debit}
                </small>
                {"->"}
                <small data-type={debitAccount.type}>
                    {debitAccount?.name ?? data.credit}
                </small>
            </div>
        </div>
    );
};

TransactionInfo.propTypes = {
    data: PropTypes.object.isRequired,
    accountsList: PropTypes.arrayOf(PropTypes.object),
};

export default TransactionInfo;
