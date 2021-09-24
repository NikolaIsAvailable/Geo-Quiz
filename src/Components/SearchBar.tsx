import React, { FC } from 'react'

type Props = {
    departement: string
    departName: string
    setDepartName: (value: string | ((prevVar: string) => string)) => void;
    // handleOnFocus: (event: React.FocusEvent<HTMLParagraphElement>) => void
}

const SearchBar: React.FC<Props> = ({ departement, setDepartName, departName }) => {
    return (
        <>
            <p id={departement} className={departName === departement ? 'hover-search' : ''} onClick={() => setDepartName(departement)}>{departement}</p>
            <hr/>
        </>
    )               
}

export default SearchBar

