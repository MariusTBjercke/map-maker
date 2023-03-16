import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

interface NavLinkActiveProps {
    to: string;
    activeClass: string;
    children: React.ReactNode;
}

export default class NavLinkActive extends Component<NavLinkActiveProps> {
    render() {
        return (
            <NavLink to={this.props.to} className={isActive => {
                return this.props.activeClass + (isActive ? ' navigation__link_active' : '');
            }}>{this.props.children}</NavLink>
        );
    }
}
