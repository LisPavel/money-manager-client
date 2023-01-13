import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavBar = ({ items }) => {
    const renderItems = (items) => {
        return Object.keys(items).map((path) => {
            const item = items[path];
            if (item.name == null) return null;
            return (
                <li key={path}>
                    <Link to={path} className="py-2 px-2 block">
                        {items[path].name}
                    </Link>
                </li>
            );
        });
    };
    return (
        <nav className="bg-slate-400 flex">
            <div className="container mx-auto">
                <ul className="list-none flex">{renderItems(items)}</ul>
            </div>
        </nav>
    );
};

NavBar.propTypes = {
    items: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.object),
        PropTypes.object,
    ]),
};

export default NavBar;
