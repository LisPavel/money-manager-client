import React from "react";
import PropTypes from "prop-types";

const ListItem = ({ className, children, ...rest }) => {
    return (
        <li {...rest} className={`border-b last:border-b-0 ${className}`}>
            {children}
        </li>
    );
};

ListItem.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

export default ListItem;
