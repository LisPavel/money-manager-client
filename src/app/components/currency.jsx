import React from "react";
import PropTypes from "prop-types";
import { numberFormatters } from "../utils/formatters";

function Currency(props) {
    const { value, currency, className: cn, color } = props;
    const formatter = numberFormatters.ru[currency] ?? numberFormatters.ru.rub;
    const textColor =
        color === "red"
            ? " text-red-500"
            : color === "green"
            ? " text-green-500"
            : "";
    const className = `font-semibold text-right ${cn ?? ""}${textColor}`;
    return <span className={className}>{formatter.format(value)}</span>;
}

Currency.propTypes = {
    value: PropTypes.number,
    currency: PropTypes.string,
    className: PropTypes.string,
    color: PropTypes.oneOf(["red", "green", "default"]),
};

export default Currency;
