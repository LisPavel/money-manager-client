import React from "react";
import PropTypes from "prop-types";
import { numberFormatters } from "../utils/formatters";

const COLORS = {
    red: " text-red-500",
    green: " text-green-500",
    default: "",
};

function Currency(props) {
    const { value, currency, className: cn, color } = props;

    const formatter = numberFormatters.ru[currency] ?? numberFormatters.ru.rub;

    const textColor = color in COLORS ? COLORS[color] : COLORS.default;

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
