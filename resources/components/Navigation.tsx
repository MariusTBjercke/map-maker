import React from 'react';
import NavLinkActive from "@/components/NavLinkActive";

export default function Navigation() {
    return (
        <div className={"navigation"}>
            <div className={"navigation__list"}>
                <div className={"navigation__item"}>
                    <NavLinkActive to={"/"} activeClass={"navigation__link"}>Home</NavLinkActive>
                </div>
                <div className={"navigation__item"}>
                    <NavLinkActive to={"/new"} activeClass={"navigation__link"}>New Map</NavLinkActive>
                </div>
                <div className={"navigation__item"}>
                    <NavLinkActive to={"/maps"} activeClass={"navigation__link"}>Maps</NavLinkActive>
                </div>
            </div>
        </div>
    );
}
