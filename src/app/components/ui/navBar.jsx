import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ items }) => {
    return (
        <nav className="container bg-slate-400 mx-auto">
            <ul className="list-none flex gap-1">
                {Object.keys(items).map((path) => (
                    <li key={path}>
                        <Link to={path} className="py-2 px-1">
                            {items[path].name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;
