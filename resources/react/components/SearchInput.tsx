import React from 'react';

export default function SearchInput({value, onChange}) {
    const handleChange = (event) => {
        onChange(event.target.value);
    }

    return (
        <>
            <div className={"search-input"}>
                <span className={"search-input__icon"}/>
                <input type="text" className={"search-input__input"} value={value} onChange={handleChange}/>
            </div>
        </>
    );
}
