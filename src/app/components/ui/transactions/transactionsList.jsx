import React, { useState } from "react";
import PropTypes from "prop-types";
import { List } from "../../common/list";
import TransactionItem from "./transaction";
import { DateTime } from "luxon";

const isDateBetween = (start, end) => (date) =>
    date <= end.toMillis() && date >= start.toMillis();

const TransactionsList = ({ items, ...rest }) => {
    const [currentDate, setCurrentDate] = useState(
        DateTime.now().setLocale("ru")
    );

    const start = currentDate.startOf("month");
    const end = currentDate.endOf("month");

    const inCurrentMonth = isDateBetween(start, end);

    const filteredData = items.filter((t) => inCurrentMonth(t.date));

    // const startMonth =
    return (
        <>
            <div className="flex mt-2 gap-4 mx-auto items-center">
                <button
                    className="px-2 py-1 bg-slate-500 text-slate-50 rounded"
                    onClick={() =>
                        setCurrentDate(currentDate.minus({ months: 1 }))
                    }
                >
                    Prev
                </button>
                <input
                    type="month"
                    onChange={(ev) =>
                        setCurrentDate(DateTime.fromISO(ev.target.value))
                    }
                    className="bg-transparent outline-none border-none"
                    value={currentDate.toFormat("yyyy-LL")}
                />
                <button
                    className="py-1 px-2 bg-slate-500 text-slate-50 rounded"
                    onClick={() =>
                        setCurrentDate(currentDate.plus({ months: 1 }))
                    }
                >
                    Next
                </button>
            </div>
            <List className="shadow-slate-300 overflow-y-auto transactions-list">
                {filteredData.map((item) => (
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
