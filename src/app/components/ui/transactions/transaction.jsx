import React from "react";
import { ListItem } from "../../common/list";
import TransactionInfo from "./transactionInfo";

const TransactionItem = ({ data, ...rest }) => {
    return (
        <ListItem className="p-3 border-slate-300 transactions-list-item">
            <span className="text-base font-semibold">{data.title}</span>
            <div className="flex justify-between mt-1 text-xs items-center">
                <small>{data.description}</small>
            </div>
            <TransactionInfo {...rest} data={data} />
        </ListItem>
    );
};

export default TransactionItem;
