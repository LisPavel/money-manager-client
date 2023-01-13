import React from "react";
import PropTypes from "prop-types";
import { DateTime } from "luxon";

const DayCard = ({ day, children }) => {
    return (
        <div className="rounded-lg p-4 bg-slate-100 shadow-md">
            <div className="border-b-4 p-2 font-bold border-slate-300">
                {DateTime.fromMillis(day)
                    .setLocale("ru")
                    .toLocaleString(DateTime.DATE_SHORT)}
            </div>
            {children}
        </div>
    );
};

DayCard.propTypes = {
    day: PropTypes.number,
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
    ]),
};

export default DayCard;
