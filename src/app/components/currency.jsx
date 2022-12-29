import React from "react";

function Currency({ value }) {
    const formatter = Intl.NumberFormat("ru");
    const className = `font-semibold text-right ${
        value > 0 ? "text-green-600" : value < 0 ? "text-red-600" : ""
    }`;
    return <span className={className}>{formatter.format(value)}</span>;
}

export default Currency;
