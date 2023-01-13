import React from "react";
import PropTypes from "prop-types";

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

TransactionInfo.propTypes = {
    data: PropTypes.object.isRequired,
    accountsList: PropTypes.arrayOf(PropTypes.object),
};

export default TransactionInfo;
