import React from 'react';
import MyNavLink from "@react/components/MyNavLink";

export default function Navigation() {
    return (
        <div className={"navigation"}>
            <div className={"navigation__list"}>
                <MyNavLink to={"/"} className={"navigation__link"}
                           activeClass={"navigation__link_active"}>Home</MyNavLink>
                <MyNavLink to={"/new"} className={"navigation__link"} activeClass={"navigation__link_active"}>New
                    Map</MyNavLink>
                <MyNavLink to={"/maps"} className={"navigation__link"}
                           activeClass={"navigation__link_active"}>Maps</MyNavLink>
            </div>
        </div>
    );
}
