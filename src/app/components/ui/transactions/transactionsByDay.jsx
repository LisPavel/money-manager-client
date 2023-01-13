import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import DayCard from "../dayCard";
import TransactionsList from "./transactionsList";

const TransactionsByDay = ({ items, ...rest }) => {
    const daysListRef = useRef();

    useEffect(() => {
        daysListRef.current?.scrollTo({ top: 0 });
    }, [items]);

    // const groupedByDay = useMemo(() => {
    //     console.log("recalc group by day");
    //     return groupBy(items, (item) =>
    //         DateTime.fromMillis(item.date).startOf("day").toMillis()
    //     );
    // }, [items, month]);

    return (
        <ul className="grid gap-4 overflow-y-auto p-2" ref={daysListRef}>
            {Object.keys(items)
                .map((d) => Number(d))
                .map((day) => (
                    <li key={day}>
                        <DayCard day={day}>
                            <TransactionsList {...rest} items={items[day]} />
                        </DayCard>
                    </li>
                ))}
        </ul>
    );
};

TransactionsByDay.propTypes = {
    items: PropTypes.object,
};

TransactionsByDay.defaultProps = {
    items: {},
};
export default TransactionsByDay;
