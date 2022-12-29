import React from "react";

const ListItem = ({ className, children, ...rest }) => {
    return (
        <li {...rest} className={`border-b last:border-b-0 ${className}`}>
            {children}
        </li>
    );
};

export default ListItem;
