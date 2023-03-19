import React from 'react';
import Navigation from "@react/components/Navigation";
import {NavLink} from "react-router-dom";

export default function Home() {
    return (
        <>
            <Navigation/>
            <div className={"container"}>
                <h1>Home</h1>
                <p>Want to <NavLink to={"/new"}>create a new map?</NavLink> Check out <NavLink to={"/maps"}>existing
                    maps?</NavLink></p>
            </div>
        </>
    );
}
