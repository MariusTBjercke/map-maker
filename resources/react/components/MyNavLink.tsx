import React from 'react';
import {NavLink} from "react-router-dom";

export default function MyNavLink({to, className, activeClass, children}) {
    const activeClassName = ({isActive}) => {
        return isActive ? `${className} ${activeClass}` : className;
    };

    return (
        <NavLink to={to} className={activeClassName}>
            {children}
        </NavLink>
    );
}
