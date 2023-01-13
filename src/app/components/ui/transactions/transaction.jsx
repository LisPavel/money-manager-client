import React from "react";
import PropTypes from "prop-types";
import { ListItem } from "../../common/list";
import TransactionInfo from "./transactionInfo";
import { DateTime } from "luxon";

const TransactionItem = ({ data, ...rest }) => {
    const date = DateTime.fromMillis(data.date);
    return (
        <ListItem className="p-3 border-slate-300 transactions-list-item flex justify-between">
            <div>
                <div className="text-base font-semibold">{data.title}</div>
                <div className="text-sm">{data.description}</div>
                <div className="text-xs">
                    {date.setLocale("ru").toLocaleString(DateTime.DATE_SHORT)}
                </div>
            </div>
            <TransactionInfo {...rest} data={data} />
        </ListItem>
    );
};
TransactionItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default TransactionItem;
