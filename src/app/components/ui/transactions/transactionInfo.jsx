import React from "react";
import PropTypes from "prop-types";
import Currency from "../../currency";
import AccountTile from "../accountTile";
import { useSelector } from "react-redux";
import { getAccountById } from "../../../store/accounts";

const TransactionInfo = ({ data, accountsList }) => {
    const creditAccount = useSelector(getAccountById(data.credit));
    const debitAccount = useSelector(getAccountById(data.debit));
    const getCurrencyColor = (creditAccount, debitAccount) => {
        if (
            (creditAccount.type === "income" &&
                debitAccount.type === "asset") ||
            (debitAccount.type === "asset" && creditAccount.type === "expense")
        ) {
            return "green";
        }
        if (
            (creditAccount.type === "asset" &&
                debitAccount.type === "expense") ||
            (debitAccount.type === "income" && creditAccount.type === "asset")
        ) {
            return "red";
        }
    };

    return (
        <div className="flex flex-col items-end">
            <Currency
                value={data.amount}
                color={getCurrencyColor(creditAccount, debitAccount)}
            />
            <div className="text-slate-500 italic text-sm w-max">
                <AccountTile data={creditAccount} />
                {"->"}
                <AccountTile data={debitAccount} />
            </div>
        </div>
    );
};

TransactionInfo.propTypes = {
    data: PropTypes.object.isRequired,
    accountsList: PropTypes.arrayOf(PropTypes.object),
};

export default TransactionInfo;
