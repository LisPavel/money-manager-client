import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, className, ...rest }) => {
    return (
        <button
            {...rest}
            className={`py-1 px-2 bg-slate-500 text-slate-50 rounded disabled:bg-slate-400 active:bg-slate-700 hover:bg-slate-600 ${
                className ? " " + className : ""
            }`}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.node),
    ]),
    className: PropTypes.string,
};

export default Button;
