import React from 'react';
import Navigation from "@react/components/Navigation";
import SearchInput from "@react/components/SearchInput";
import MapList from "@react/components/MapList";

export default function Maps() {
    const [searchText, setSearchText] = React.useState('');
    const [foundMaps, setFoundMaps] = React.useState([]);

    return (
        <>
            <Navigation/>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-12"}>
                        <h1>Maps</h1>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col-9 col-lg-7"}>
                        <SearchInput value={searchText} onChange={setSearchText}/>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col-12"}>
                        <MapList maps={foundMaps} emptyHeading={`No matches found for "${searchText}"`}/>
                    </div>
                </div>
            </div>
        </>
    );
}
