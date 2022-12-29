import React from "react";
import { numberFormatters } from "../utils/formatters";

function Currency({ value, currency, isExpense }) {
    const formatter = numberFormatters.ru[currency] ?? numberFormatters.ru.rub;
    const positiveColor = !isExpense ? " text-green-600" : " text-red-600";
    const negativeColor = isExpense ? " text-green-600" : " text-red-600";
    const textColor =
        value > 0 ? positiveColor : value < 0 ? negativeColor : "";
    const className = `font-semibold text-right${textColor}`;
    return <span className={className}>{formatter.format(value)}</span>;
}

export default Currency;
