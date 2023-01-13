import React from "react";
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

export default TransactionsList;
