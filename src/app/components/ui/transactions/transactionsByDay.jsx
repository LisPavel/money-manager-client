import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import DayCard from "../dayCard";
import TransactionsList from "./transactionsList";
import { groupBy } from "lodash";
import { DateTime } from "luxon";
import Pagination from "../../common/pagination";
import usePaginate from "../../../hooks/usePaginate";

const TransactionsByDay = ({ items, ...rest }) => {
    const daysListRef = useRef();
    const pageSize = 50;

    const { paginate, currentPage, setCurrentPage } = usePaginate({
        pageSize,
    });

    useEffect(() => {
        setCurrentPage(1);
    }, [items]);
    useEffect(() => {
        daysListRef.current?.scrollTo({ top: 0 });
    }, [currentPage]);

    const paginated = paginate(items);
    // const paginated = transactions;

    const transactionsGroupedByDay = groupBy(paginated, (tr) =>
        DateTime.fromMillis(tr.date).startOf("day").toMillis()
    );
    const onPageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
            <ul className="grid gap-4 overflow-y-auto p-2" ref={daysListRef}>
                {Object.keys(transactionsGroupedByDay)
                    .map((d) => Number(d))
                    .map((day) => (
                        <li key={day}>
                            <DayCard day={day} balance>
                                <TransactionsList
                                    {...rest}
                                    items={transactionsGroupedByDay[day]}
                                />
                            </DayCard>
                        </li>
                    ))}
            </ul>
            <Pagination
                currentPage={currentPage}
                itemsCount={items.length}
                onPageChange={onPageChange}
                pageSize={pageSize}
            />
        </>
    );
};

TransactionsByDay.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
};

TransactionsByDay.defaultProps = {
    items: {},
};
export default TransactionsByDay;
