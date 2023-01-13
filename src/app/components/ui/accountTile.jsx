/* eslint-disable indent */
import React from "react";
import PropTypes from "prop-types";
import { ACCOUNT_TYPES } from "../../utils/constants";

const AccountTile = ({ data, className }) => {
    const color =
        data.type === ACCOUNT_TYPES.EXPENSE
            ? "text-red-800"
            : data.type === ACCOUNT_TYPES.INCOME
            ? "text-green-800"
            : "";
    return <span className={`${color} ${className ?? ""}`}>{data.name}</span>;
};

AccountTile.propTypes = {
    data: PropTypes.object.isRequired,
    className: PropTypes.string,
};

export default AccountTile;
