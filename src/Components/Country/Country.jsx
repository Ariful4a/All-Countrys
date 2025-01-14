import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountry}) => {
    console.log(country);
const {name, flags, population, area, cca3} = country;

const [visited, setVisited] = useState(false);

const handlaeClick = () => {
    setVisited(!visited);
}

    const passWithParams = () => handleVisitedCountry(country);

    return (
        <div className={`country ${visited && 'visited'}`}>
            <p style={{color: visited ? 'purple': 'white'}}>Name: {name?.common}</p>
            <img src={flags.png} alt="" />
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <p>code: {cca3}</p>
            <button onClick={passWithParams}>Mark Country</button>
            <button onClick={handlaeClick}>{visited ? 'Visited' : 'Going'}</button>
            {
                visited ? 'I have visited this Country.' : 'I want to visit This Country'
            }
        </div>
    );
};

export default Country;