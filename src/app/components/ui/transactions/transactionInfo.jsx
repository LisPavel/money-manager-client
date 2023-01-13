import React from "react";
import PropTypes from "prop-types";

const TransactionInfo = ({ data, accountsList }) => {
    const creditAccount = accountsList.find(({ _id }) => _id === data.credit);
    const debitAccount = accountsList.find(({ _id }) => _id === data.debit);
    return (
        <div>
            <small>{creditAccount?.name ?? data.debit}</small>
            {"->"}
            <small>{debitAccount?.name ?? data.credit}</small>
            <small>{data.amount}</small>
        </div>
    );
};

TransactionInfo.propTypes = {
    data: PropTypes.object.isRequired,
    accountsList: PropTypes.arrayOf(PropTypes.object),
};

export default TransactionInfo;
