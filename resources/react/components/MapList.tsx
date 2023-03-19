import React from 'react';

export default function MapList({maps, emptyHeading}) {
    if (maps.length === 0) {
        return (
            <h2>{emptyHeading}</h2>
        );
    }

    return (
        <ul>
            {maps.map((map) => (
                <li key={map.id}>{map.name}</li>
            ))}
        </ul>
    );
}
