import React from "react";

const List = ({ children, className, ...rest }) => {
    return (
        <ul
            {...rest}
            className={`list-none rounded-md bg-slate-100 text-slate-800 ${className}`}
        >
            {children}
        </ul>
    );
};

export default List;
