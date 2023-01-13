import React from "react";
import PropTypes from "prop-types";
import { numberFormatters } from "../utils/formatters";

function Currency(props) {
    const { value, currency, className: cn } = props;
    const formatter = numberFormatters.ru[currency] ?? numberFormatters.ru.rub;
    const className = `font-semibold text-right ${cn ?? ""} `;
    return <span className={className}>{formatter.format(value)}</span>;
}

Currency.propTypes = {
    value: PropTypes.number,
    currency: PropTypes.string,
    className: PropTypes.string,
};

export default Currency;
