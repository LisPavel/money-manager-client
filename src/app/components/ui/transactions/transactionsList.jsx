import React from "react";
import PropTypes from "prop-types";
import { List } from "../../common/list";
import TransactionItem from "./transaction";

const TransactionsList = ({ items, ...rest }) => {
    return (
        <List className="shadow-slate-300 overflow-y-auto transactions-list">
            {items.map((item) => (
                <TransactionItem {...rest} data={item} key={item._id} />
            ))}
        </List>
    );
};

TransactionsList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TransactionsList;
