import React, { useState } from "react";
import PropTypes from "prop-types";
import { List } from "../../common/list";
import TransactionItem from "./transaction";
import { DateTime } from "luxon";

const TransactionsList = ({ items, ...rest }) => {
    // const startMonth =
    return (
        <>
            <List className="shadow-slate-300 overflow-y-auto transactions-list">
                {items.map((item) => (
                    <TransactionItem {...rest} data={item} key={item._id} />
                ))}
            </List>
        </>
    );
};

TransactionsList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TransactionsList;
